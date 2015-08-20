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
            "opacity": 0.5,     // opacity of a trajectory link
            "colors": "black",  // color of trajectory link
            "drawn_traj": {},   // object to story drawn trajectories
        },

        initialize: function(data){
            // trajectories is going to be an array of objects.

            this.set({
                "data": data,
            });
            
            // Create a trajectories object.
            var trajectories = self.init_link_map(data.paths);
            
            // Set trajectoreis as property of model.
            this.set({
                "trajectories": trajectories; 
                
            });
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

        path_to_links: function(path){
            // Convert a trajectory to array of links to color
            
            var links = [];
            
            for (i==0; i < path.length - 1; i++) {
                // link object that mirrors network links
                var link = {
                    "source" : path[i],
                    "target" : path[i+1],                    
                }
                
                links.push(link)
            }
            
            return links
        },
        
        init_link_map: function(data) {
            // Initialize a link mapping
            //
            // mapping = {
            //  "trajectory 1" : [{"source": 1, "target": 2}, ...],
            //  "trajectory 2" : [{"source": 1, "target": 4}, ...],
            //    ...
            // }
            
            var mapping = {};
            
            for(i==0; i < data.length; i++) {
                // Key to mapping is trajectory + index
                var key = "trajectory" + String(m);
                
                mapping[key] = this.path_to_links(data[i])                
            }
        },
        
        
        
        
    });

    return TrajectoryModel;

});
