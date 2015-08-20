/*
General network graph of nodes and edges.
*/

define([
    'jquery',
    'jqueryui',
    'd3',
    'backbone',
], function($, $ui, d3, backbone) {

    // --------------------------------------
    // Trajectory widget
    // --------------------------------------

    var TrajectoryView = backbone.View.extend({
        
        
        initialize: function(){
            //
            //Initialize TrajectoryWidget
            //
            this.element = "#network_viewer";
            
            var scope = this;

            // Click function for trajectory
            var traj = this.model.get("trajectories");
        },
        
        
        draw_trajectory: function(){

        },
        
        rm_trajectory: function(){

        },
        
    });

    return TrajectoryView;

});
