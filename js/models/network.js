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

    var NetworkModel = backbone.Model.extend({

        // Initial attributes
        defaults:{
            "width": 1100,
            "height": 700,
            "charge": -100,
            "link_distance": 100,
            "color_on": false,
            "node_text_on": true,
            "node_radius": 10,
            "node_shape": "circle",
            "add_node_names": true,

            // link properties
            "link_opacity": 1.0,
            "link_width": 1.0,
            "link_color": "#999", 
            "link_key" : "network"
        },

        initialize: function(data){
            // Data is going to be an array of objects.
            this.set({
              "datasets": data,
            })

            // Make DEEP copy (first argument set to true) of first set
            // of data for initializing our model. Copy is necessary to
            // avoid pointing with reference.
            var data_copy = $.extend(true, {}, data[0]);
            
            var links = this.add_link_attr(data_copy.links);
            this.set({
                "nodes": data_copy.nodes,
                "links": links,
                "ref": data_copy.ref
            })

        },
        
        
        add_node_attr: function(nodes){
            // Add attributes from model to node objects.
            //
            
            
        },
        
        add_link_attr: function(links){
            // Add link attributes from model to link objects.
            for (var i=0; i < links.length; i++){
                links[i]["id"] = "link_" + links[i].source + "_" + links[i].target;
                links[i]["opacity"] = this.get("link_opacity"); // for setting link opacity
                links[i]["width"] = this.get("link_width");     // for setting link width
                links[i]["color"] = this.get("link_color");     // for setting link color
                links[i]["key"] = this.get("link_key");         // for naming link html elements
            }
            return links;
        },

    });

    return NetworkModel;

});
