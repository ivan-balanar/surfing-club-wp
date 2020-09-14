"use strict";

$(document).ready(function () {
  var headerSlider = $(".owl-carousel");
  headerSlider.owlCarousel({
    items: 1,
    loop: true,
    dots: false
  });
  $('#headerSliderRight').click(function () {
    headerSlider.trigger('next.owl.carousel');
  });
  $('#headerSliderLeft').click(function () {
    headerSlider.trigger('prev.owl.carousel');
  });
});