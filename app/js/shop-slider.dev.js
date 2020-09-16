"use strict";

jquery(document).ready(function ($) {
  var shopSlider = $('#shopSlider');
  shopSlider.owlCarousel({
    dots: false,
    loop: true,
    margin: 2,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      1254: {
        items: 3
      }
    }
  });
  $('#shopSliderRight').click(function () {
    shopSlider.trigger('next.owl.carousel');
  });
  $('#shopSliderLeft').click(function () {
    shopSlider.trigger('prev.owl.carousel');
  });
});