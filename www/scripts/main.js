(function () {
  'use strict';

  require.config({
      shim: {
          underscore: {
              exports: '_'
          },
          backbone: {
              deps: [
                  'underscore',
                  'jquery'
              ],
              exports: 'Backbone'
          }
      },
      paths: {
          jquery     : 'libs/jquery',
          backbone   : 'libs/backbone',
          underscore : 'libs/underscore',
          noslider   : 'libs/nouislider',
          tools      :  'tools',
          templates  :  '../templates'
      }
  });

  require([
    'backbone',
    'jquery',
    'tools',
    'router'
  ], function (Backbone, $, tools, AppRouter) {

    // Instantiate the router
    var app_router = new AppRouter();

    // Start Backbone history
    // a necessary step for bookmarkable URL's
    Backbone.history.start();

  });// End of function()

}());
