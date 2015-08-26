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
            this.drawn_traj = this.model.get("drawn_traj");

            // listen for the model to change
        },
        
        link_array: function(){
            // Construct an array of link objects to drawing
            // on network view. 
            //
            // links = [{"source": #, "target": #}, {"source": #, "target": #}, ...]
            
            // Get network links
            //var links = this.network_view.link_data.slice();
            var links = [];
            for (var property in this.drawn_traj){
                // Need this to iterate through object
                if (this.drawn_traj.hasOwnProperty(property)){
                    // Add a set of trajectory links to network linkss
                    links = links.concat(this.drawn_traj[property])
                }
            };
            return links
        },
        
        add_trajectory: function(traj_name){
            // Add trajectory to drawn trajectories object
            //
            
            this.drawn_traj[traj_name] = this.traj[traj_name];
        },
        
        rm_trajectory: function(traj_name){
            // Remove trajectory to drawn trajectories object
            //
            
            delete this.drawn_traj[traj_name]
        },
        
        render: function(){
            // Add trajectory to drawn trajectories object
            // and render this list through network draw_links method
            //
            console.log("DRAWN")
            
            var nodes = this.network_view.node_data;

            var links = this.link_array();

            for (var i=0; i < links.length; i++){
                this.network_view.force_add_link(links[i]);                
            };
        },
        
    });

    return TrajectoryView;

});
