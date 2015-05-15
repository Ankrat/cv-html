//Filename: tools.js

define([
  // These are path alias that we configured in our bootstrap
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  // Above we have passed in jQuery, Underscore and Backbone
  // They will not be accessible in the global scope
  var tools = {
    'listObj' : function (obj){
      for(var j in obj) {
        console.log(j +" : "+ obj.j);
      }
    },
    'listArray' : function (arr){
      var l = arr.length;
      for(var j = 0; j < l; j++) {
        console.log(arr[j]);
      }
    }
  };
  // What we return here will be used by other modules
  return {
    tools : tools
  };
});

