//Filename: router.js

define([
  // These are path alias that we configured in our bootstrap
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var AppRouter = Backbone.Router.extend({
    routes: {
      ""                  : "home",
    },

    home: function(){
      console.log( "home" );
    }
  });

  return AppRouter;
});
