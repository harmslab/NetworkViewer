var Options = function (selector, network_viewer) {
    // Network Options

    this.id = "network_options";
    this.network_viewer = network_viewer;
    this.modal = new Modal(this.id);
    this.modal.header.append($("<h4>").text("Network customization"));
    
    // Attach the modal to the page
    $(selector).append(this.modal.window);
    
    // Place the modal toggle button somewhere ...
    $(selector).append(this.modal.create_modal_toggle("Customization"));
    
    // Populate a modal.
    this.modal.toggle_button("test", "Push me!");
    this.modal.sub_panel("test2", "Sub Panel")
    
    this.modal.toggle_button("test2", "Push me too!");
    this.modal.toggle_button("test3", "Push me too!");
    this.modal.toggle_button("test4", "Push me too!");
};