//Filename: sliders.js

define([
  // These are path alias that we configured in our bootstrap
  'jquery',
  'noslider'
], function($, noUiSlider){
  // Above we have passed in jQuery, Underscore and Backbone
  // They will not be accessible in the global scope
  var sumSlider = $('.sum.noUiSlider'),
      sumVal = $('.sum-val .val'),
      sSlider;

  var InitSliders = function(){

    sSlider = sumSlider.noUiSlider({
      start: 0,
      range: [0, 25000],
      connect: "lower",
      handles: 1,
      slide: sumChange
    });
  };

  function sumChange(){
    // console.log("sumChange triggered");
    sumVal.text( sumSlider.val());
  }

  return InitSliders;
  // What we return here will be used by other modules
});