/*
General network graph of nodes and edges.
*/

define([
    'jquery',
    'd3',
    'backbone',
    'js/models/network'
], function($, d3, backbone, NetworkModel) {

    // --------------------------------------
    // Network View
    // --------------------------------------

    var NetworkView = backbone.View.extend({

        //element: "#network_viewer",

        initialize: function(){
            this.element = "#network_viewer";
            
            // Parameters for building network
            this.width = this.model.get("width");
            this.height = this.model.get("height");
            
            // Initialize the svg width
            this.svg = d3.select(this.element).append("svg")
                .attr("width", this.width)
                .attr("height", this.height)
            
            // Initialize the force
            this.force = d3.layout.force()
                .charge(this.model.get("charge"))
                .linkDistance(this.model.get("link_distance"))
                .size([this.width-10, this.height-10])
            
            this.start_force();
            this.draw_links();
            this.draw_nodes();
            this.node_shape();
            this.node_text();
            this.node_color();
            this.force_on();
        },

        start_force: function(){
            this.force
                .nodes(this.model.get("nodes"))
                .links(this.model.get("links"))
                .start();
        },

        draw_nodes: function() {
            this.nodes = this.svg.selectAll(".graph_node")
                .data(this.model.get("nodes"))
                .enter().append("g")
                .attr("class", "graph_node")
                .call(this.force.drag);
        },

        draw_links: function() {
            this.links = this.svg.selectAll(".graph_link")
                .data(this.model.get("links"))
                .enter().append("line")
                .attr("class", "graph_link");
        },

        node_shape: function(shape) {
            this.circles = this.nodes.append("circle")
                .attr("class", "graph_circle")
                .attr("id", function(d) {return "node-"+d.index})
                .attr("node-index", function(d) {return d.index})
                .attr("r", this.model.get("node_radius"))
        },

        force_on: function() {
            // get 
            var that = this;

            this.force.on("tick", function () {
                that.links
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                that.nodes
                    .attr("transform", function(d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    })
            });
            
            this.force.start();
        },

        node_text: function(){
            this.labels = this.nodes.append("text")
                .attr("class", "graph_text")
                .attr("dx", 12)
                .attr("dy", ".35em")
                .text(function(d) { return d.id; });

            this.force_on();
        },

        node_color: function() {
            // Builds a D3 network from graph data (in JSON form).
            var colors = d3.interpolate('orange', 'purple');
            this.nodes
                .attr("fill", function(d){ return colors(d.value)});
        },

    });

    return NetworkView;

});
