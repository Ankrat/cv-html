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
          tools      :  'tools',
          templates  :  '../templates'
      }
  });

  require([
    'backbone',
    'jquery',
    'tools',
    'text!../Templates/template.html'
  ], function (Backbone, $, tools, template) {

    // Declaration of the variables used
    // Only in THIS scope
    var myVar;

    // Remote file Load
    // get OutOf libs/, OutOf scripts/
    $.getJSON('../../dataJSON/myData.json', function(json) {
      myFunction(json.items);
    });

    // Manipulate the json data
    function myFunction( data ){
      // Sample use of my data
      _.each( data, function( val, key, list){
        //DO something with each entries of my data
      });

      return;
    }

  });
  // End of function()

}());
