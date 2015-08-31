/*
General network graph of nodes and edges.
*/

define([
    'jquery',
    'jqueryui',
    'd3',
    'backbone'
], function($, $ui, d3, backbone) {

    // --------------------------------------
    // Trajectory widget
    // --------------------------------------

    var TrajectoryTable = backbone.View.extend({
        
        
        initialize: function(){
            //
            //Initialize Trajectory Table
            //
            this.element = "#network_viewer";
            
            // Click function for trajectory
            this.traj = this.model.get("trajectories");

            // Construct table
            this.probability = this.get_weight(this.traj);

            this.indices = this.get_path_index(this.traj);
            this.build_list("#tablebody", this.indices, this.probability);        
        },
        
        build_list: function(parent, index, weight){
            // Construct a complete html table of all trajectories
            
            for (var e = 0; e < index.length; e++) {
                menu = this.add_element(index[e], weight[e]);
                $(parent).append(menu);
                
                menu.click([this, e, menu], this.click_row);
                menu.mouseover([this, e, menu], this.hover_row);
                menu.mouseout([this, e, menu], this.out_row);
            }
            
        },
        
        add_element: function(index, weight){
            // Built an html table element for trajectory
            
            column = $("<td>").attr("id", "tablecolumn_"+index)
                .text("Trajectory "+index)
                .attr("padding-right","300")
                .attr("class", "network-viewer");

            weight = $("<td>").attr("id", "tablecolumn_"+weight)
                .text(weight);

            label = $("<tr>").append(column).append(weight);
            return label;
        },
        
        get_path_index: function(){
            // Get the indices of all paths
            //
            var path_index = [];
            for (var prop in this.traj) {
                if( this.traj.hasOwnProperty( prop ) ) {
                    path_index.push(prop);
                } 
            }
            return path_index;
            
        },
        
        get_weight: function(){
            // Get the weight 
            //
            var probability = [];
            for (var prop in this.traj) {
                if( this.traj.hasOwnProperty( prop ) ) {  
                    probability.push(this.traj[prop].weight);
                } 
            }
            return probability;
        },
        
        click_row: function(d){
            //
            // Set click behavior of trajectory table
            //
            var that = d.data[0]
            var index = d.data[1];
            var menu = d.data[2];
            
            // Add trajectory to model.
            menu.off("click")
            that.model.add_trajectory(index);
            menu.click([that, index, menu], that.unclick_row);
        },
        
        unclick_row: function(d){
            //
            // Set click behavior of trajectory table
            //
            var that = d.data[0]
            var index = d.data[1];
            var menu = d.data[2];

            // Remove trajectory from model.
            menu.off("click")
            that.model.rm_trajectory(index);
            menu.click([that, index, menu], that.click_row);
        },
        
        hover_row: function(d){
            //console.log("hovered");
            
            var menu = d.data[1];
            var weight = d.data[0].weight;

            for (var h = 0; h < d.data[0].nodes.length-1; h++) {
                //console.log(d.data.nodes[h]);
                var slice = d.data[0].nodes.slice(h, h+2);
                //console.log(d.data.nodes[h]);

                //$("#node_"+d.data[h])
                //    .attr("fill", "red");
                //console.log(this.linkNum);

                $("#link_"+slice[0]+"_"+slice[1])
                    .attr("stroke-opacity", String(weight*.15))
                    .attr("stroke-width", weight*2);

                $("#link_"+slice[1]+"_"+slice[0])
                    .attr("stroke-opacity", String(weight*.15))
                    .attr("stroke-width", weight*2);
            }

            menu.mouseout([d.data[0], menu], this.out_row);

            menu.bind("click")
            //    .bind("mouseout");
            
        },
        
        out_row: function(d){
            for (var h = 0; h < d.data[0].nodes.length-1; h++) {
                var slice = d.data[0].nodes.slice(h, h+2);

                $("#link_"+slice[0]+"_"+slice[1])
                    .css("stroke","#999")
                    .attr("stroke-opacity", "1")
                    .attr("stroke-width", 1);

                $("#link_"+slice[1]+"_"+slice[0])
                    .css("stroke","#999")
                    .attr("stroke-opacity", "1")
                    .attr("stroke-width", 1);
            }

            //menu.bind("mouseover")
            //    .bind("mouseout");
            
        },
        
    });

    return TrajectoryTable;

});
