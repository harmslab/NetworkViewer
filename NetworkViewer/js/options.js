var Options = function (selector, network_viewer) {
    // List of options
    
    this.network_viewer = network_viewer;
    this.id = "#options";
    
    this.modal = new Modal("options");
    
    $(selector).append(this.modal.window);
    $(selector).append(this.)
};