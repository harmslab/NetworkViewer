/*

Application entry point if stand-alone application -- base URL to top level of this repo.

*/

// Config the application paths for other scripts loading modules

requirejs.config({
    baseUrl: '',
    paths: {
        backbone: 'lib/backbone/backbone-min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        d3: 'lib/d3/d3.min',
        jquery: 'lib/jquery/jquery.min',
        jqueryui: 'lib/jquery-ui/jquery-ui.min',
        underscore: 'lib/underscore/underscore-min',
        text: 'lib/require/text'
    }
})
// Enter application through main.js
requirejs(['js/main']);