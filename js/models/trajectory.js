/*
General network graph of nodes and edges.
*/

define([
    'jquery',
    'd3',
    'backbone'
], function($, d3, backbone) {

    // --------------------------------------
    // Network Model
    // --------------------------------------

    var TrajectoryModel = backbone.Model.extend({

        // Initial attributes
        defaults:{
            "weight": 0.5,
            "colors": "black",
        },

        initialize: function(trajectories){
            // trajectories is going to be an array of objects.

            this.set({
                "trajectories": trajectories,
            })
/*
            // Make DEEP copy (first argument set to true) of first set
            // of data for initializing our model. Copy is necessary to
            // avoid pointing with reference.
            var data_copy = $.extend(true, {}, data[0]);

            this.set({
                "nodes": data_copy.nodes,
                "links": data_copy.links,
                "ref": data_copy.ref
            })
*/
        },

        trajectory_to_link: function(){
            // Convert a trajectory to link
            
        }
    });

    return TrajectoryModel;

});
