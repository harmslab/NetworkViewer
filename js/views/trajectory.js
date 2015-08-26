/*
General network graph of nodes and edges.
*/

define([
    'jquery',
    'jqueryui',
    'd3',
    'backbone',
], function($, ui, d3, backbone) {

    // --------------------------------------
    // Trajectory widget
    // --------------------------------------

    var TrajectoryView = backbone.View.extend({
        
        initialize: function(data){
            //
            //Initialize Trajectory View
            //
            // this.model needs to be set (points to TrajectoryModel object)
            this.listenTo(this.model, 'change', this.render);
            
            this.network_view = data["network_view"];
            this.traj = this.model.get("trajectories");

            // listen for the model to change
        },
        
        link_array: function(trajectory){
            // Construct an array of link objects to draw
            // on network view from trajectory data.
            //
            // links = [{"source": #, "target": #}, {"source": #, "target": #}, ...]
            
            // Get network links
            //var links = this.network_view.link_data.slice();
            var links = [];
            for (var property in trajectory){
                
                // Need this to iterate through object
                if (trajectory.hasOwnProperty(property)){
                    
                    // Add a set of trajectory links to network linkss
                    links = links.concat(trajectory[property])
                
                }
            };
            return links
        },
        
        render: function(){
            // Add trajectory to drawn trajectories object
            // and render this list through network draw_links method
            //
            
            var drawn_traj = this.model.get("drawn_traj");
            var nodes = this.network_view.node_data;
            var links = this.link_array(drawn_traj);
            
            this.network_view.reset_force();
            
            for (var i=0; i < links.length; i++){
                this.network_view.force_add_link(links[i]);                
            };
            
            return this;
        },
        
    });

    return TrajectoryView;

});
