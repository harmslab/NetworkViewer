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
        
        
        initialize: function(NetworkView){
            //
            //Initialize TrajectoryWidget
            //
            
            this.network_view = NetworkView;
            
            this.traj = this.model.get("trajectories");
        },
        
        draw_trajectories: function(){
            
        },
        
        undraw_trajectories: function(){

        },
        
    });

    return TrajectoryView;

});
