/*
General network graph of nodes and edges.
*/

define([
    'jquery',
    'd3',
    'backbone',
    'underscore',
    'bootstrap',
    'js/models/network',
    'text!templates/modal.html'
], function($, d3, backbone, _, bootstrap, NetworkModel, modalTemplate) {
    
    var NetworkModal = backbone.View.extend({
        
        el: "#cool",
        
        initialize: function() {
            this.render();
        },
        
        template: _.template(modalTemplate),
        
        render: function() {
            this.$el.html(this.template());
            return this;
        },
   
        show: function(){
            console.log($("#myModal"))
            $("#myModal").modal({show:true})
        }
    });
    
    return NetworkModal;
});