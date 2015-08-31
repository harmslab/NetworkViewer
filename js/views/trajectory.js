/*
General network graph of nodes and edges.
*/

define([
    'jquery',
    'jqueryui',
    'd3',
    'backbone',
    'js/utils/diff',
], function($, ui, d3, backbone, diff) {

    // --------------------------------------
    // Trajectory widget
    // --------------------------------------

    var TrajectoryView = backbone.View.extend({
        
        initialize: function(data){
            //
            //Initialize Trajectory View
            //
            // this.model needs to be set (points to TrajectoryModel object)
            
            this.network_view = data["network_view"];
            this.traj = this.model.get("trajectories");
            this.length = 0;
            this.listenTo(this.model, 'change', this.render);
            this.drawn_traj = _.clone(this.model.get("drawn_traj"))
            this.render();
        },
        
        link_array: function(trajectory){
            //
            // Construct an array of link objects to draw
            // on network view from trajectory data.
            //
            // links = [{"source": #, "target": #}, {"source": #, "target": #}, ...]
            
            // Get network links
            // var links = this.network_view.link_data.slice();
            var links = [];
            for (var property in trajectory){
                
                // Need this to iterate through object
                if (trajectory.hasOwnProperty(property)){
                    
                    // Add a set of trajectory links to network links
                    links = links.concat(trajectory[property])
                
                }
            };
            return links
        },
        
        render: function(){
            // 
            // Add trajectory to drawn trajectories object
            // and render this list through network draw_links method
            //
            var old_traj = this.model.previous("drawn_traj");
            var drawn_traj = this.model.get("drawn_traj");
                  
            var len2 = Object.keys(drawn_traj).length;
            var len1 = Object.keys(old_traj).length;
            
            // Add and remove links from network.
            if ( len2 > len1 ) { 
                
                var diff_traj = diff(drawn_traj, old_traj);
                var links = this.link_array(diff_traj);
                
                for ( var i=0; i < links.length; i++ ) {
                    // Add or remove nodes to network.
                    this.network_view.force_add_link(links[i]); 
                };
            } else {
                
                var diff_traj = diff(old_traj, drawn_traj);
                var links = this.link_array(diff_traj);
                
                for ( var i=0; i < links.length; i++ ) {
                    // Remove links from network
                    this.network_view.force_rm_link(links[i].id);
                };
            };
            
            return this;
        },
        
    });

    return TrajectoryView;

});
