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
            "link_opacity": 1,     // opacity of a trajectory link
            "link_color": "#999",  // color of trajectory link
            "link_width": 2,
            //"drawn_traj": {},   // object to story drawn trajectories
        },

        initialize: function(data){
            // trajectories is going to be an array of objects.
            //
            
            this.set({
                "data": data,
            });
            
            // Create a trajectories object.
            var trajectories = this.init_link_map(data.paths);
            
            // Set trajectories as property of model.
            this.set({
                "trajectories": trajectories,
                "drawn_traj": trajectories,
            });

        },

        path_to_links: function(path){
            // Convert a trajectory to array of links to color
            //
            
            var links = [];
            for (var i=0; i < path.length - 1; i++) {
                // link object that mirrors network links
                var link = {
                    "source" : path[i],
                    "target" : path[i+1],
                    "color" : this.get("link_color"),
                    "opacity" : this.get("link_opacity"),
                    "width" : this.get("link_width"),                 
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
            //
            
            var mapping = {};
            
            for(var i=0; i < data.length; i++) {
                // Key to mapping is trajectory + index
                var key = "trajectory" + String(i);
                
                mapping[key] = this.path_to_links(data[i].nodes)                
            }
            return mapping
        },
        
        
    });

    return TrajectoryModel;

});
