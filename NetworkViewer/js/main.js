var main = function () {
    //
    $('#app_container').append($('<div>').attr('id', 'network_viewer'));
    
    this.selector = '#network_viewer';
    this.width = parseInt($(this.selector).css("width"));
    this.height = 700;
    
    this.clustering_button = $(this.selector).append($("<button>").addClass("btn btn-primary").attr("id", "cluster").text("Cluster"));
    this.unclustering_button = $(this.selector).append($("<button>").addClass("btn btn-danger").attr("id", "uncluster").text("Un-cluster"));
    
    
    this.svg = d3.select(this.selector).append("svg")
        .attr("width", this.width)
        .attr("height", this.height)

    this.network = {'nodes': [{'name': '0110', 'value': 2.6332888187882394e-09}, {'name': '0111', 'value': 0.031256249349703571}, {'name': '0000', 'value': 0.37497499115196253}, {'name': '0001', 'value': 0.093743750650296373}, {'name': '0011', 'value': 2.6332888187996131e-09}, {'name': '0010', 'value': 0.093743750650296373}, {'name': '0101', 'value': 2.6332888187993137e-09}, {'name': '0100', 'value': 0.093743750650296373}, {'name': '1111', 'value': 0.12502499304830464}, {'name': '1110', 'value': 0.031256249349703634}, {'name': '1100', 'value': 2.6332888187996135e-09}, {'name': '1101', 'value': 0.031256249349703627}, {'name': '1010', 'value': 2.6332888187996135e-09}, {'name': '1011', 'value': 0.031256249349703627}, {'name': '1001', 'value': 2.6332888187995643e-09}, {'name': '1000', 'value': 0.093743750650296373}], 'links': [{'source': 0, 'tsize': 0.13767669013560876, 'target': 1, 'ssize': 0.0}, {'source': 0, 'tsize': 0.36232330986439121, 'target': 5, 'ssize': 0.0}, {'source': 0, 'tsize': 0.36232330986439121, 'target': 7, 'ssize': 0.0}, {'source': 0, 'tsize': 0.13767669013560876, 'target': 9, 'ssize': 0.0}, {'source': 1, 'tsize': 1.1599040028214072e-08, 'target': 4, 'ssize': 0.0}, {'source': 1, 'tsize': 1.1599040028214072e-08, 'target': 6, 'ssize': 0.0}, {'source': 1, 'tsize': 0.99999996520287993, 'target': 8, 'ssize': 0.0}, {'source': 2, 'tsize': 0.25, 'target': 3, 'ssize': 0.0}, {'source': 2, 'tsize': 0.25, 'target': 5, 'ssize': 0.0}, {'source': 2, 'tsize': 0.25, 'target': 7, 'ssize': 0.0}, {'source': 2, 'tsize': 0.25, 'target': 15, 'ssize': 0.0}, {'source': 3, 'tsize': 1.0177765615757753e-08, 'target': 4, 'ssize': 0.0}, {'source': 3, 'tsize': 1.0177765615757753e-08, 'target': 6, 'ssize': 0.0}, {'source': 3, 'tsize': 1.0177765615757753e-08, 'target': 14, 'ssize': 0.0}, {'source': 4, 'tsize': 0.36232330986439121, 'target': 5, 'ssize': 0.0}, {'source': 4, 'tsize': 0.13767669013560876, 'target': 13, 'ssize': 0.0}, {'source': 5, 'tsize': 1.0177765615757753e-08, 'target': 12, 'ssize': 0.0}, {'source': 6, 'tsize': 0.36232330986439121, 'target': 7, 'ssize': 0.0}, {'source': 6, 'tsize': 0.13767669013560876, 'target': 11, 'ssize': 0.0}, {'source': 7, 'tsize': 1.0177765615757753e-08, 'target': 10, 'ssize': 0.0}, {'source': 8, 'tsize': 0.25, 'target': 9, 'ssize': 0.0}, {'source': 8, 'tsize': 0.25, 'target': 11, 'ssize': 0.0}, {'source': 8, 'tsize': 0.25, 'target': 13, 'ssize': 0.0}, {'source': 9, 'tsize': 1.1599040028214073e-08, 'target': 10, 'ssize': 0.0}, {'source': 9, 'tsize': 1.1599040028214073e-08, 'target': 12, 'ssize': 0.0}, {'source': 10, 'tsize': 0.13767669013560876, 'target': 11, 'ssize': 0.0}, {'source': 10, 'tsize': 0.36232330986439121, 'target': 15, 'ssize': 0.0}, {'source': 11, 'tsize': 1.1599040028214072e-08, 'target': 14, 'ssize': 0.0}, {'source': 12, 'tsize': 0.13767669013560876, 'target': 13, 'ssize': 0.0}, {'source': 12, 'tsize': 0.36232330986439121, 'target': 15, 'ssize': 0.0}, {'source': 13, 'tsize': 1.1599040028214072e-08, 'target': 14, 'ssize': 0.0}, {'source': 14, 'tsize': 0.36232330986439121, 'target': 15, 'ssize': 0.0}]};
    this.network_viewer = new Network(this.svg, this.network);
    this.options = new Options(this.selector, this.network_viewer);
    
    var network_viewer = this.network_viewer;
    /*
    this.cluster = {'nodes': [{'name': 0, 'value': 0.99999996217657749}, {'name': 1, 'value': 0.99999998738883045}], 'links': [{'source': 0, 'tsize': 3.7823422446081196e-08, 'target': 1, 'ssize': 0.99999996217657749}]}
    this.membership = {0: 1, 1: 0, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 0, 9: 0, 10: 1, 11: 0, 12: 1, 13: 0, 14: 1, 15: 1}
    this.clustering = new Clustering(this.svg, this.membership, this.network_viewer, this.cluster);
    var clustering = this.clustering;

    $("#cluster").click(this, function(event){
        var that = event.data;
        that.clustering.cluster_network();
    });
    
    $("#uncluster").click(this, function(event){
        var that = event.data
        $("svg").empty();
        that.network_viewer.build_network();
    });
    */
    
};

$(document).ready(main);