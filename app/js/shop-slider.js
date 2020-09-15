$(document).ready(function () {
  
  const shopSlider = $('#shopSlider');

  shopSlider.owlCarousel({
    items: 3,
    dots: false,
    loop: true,
    margin: 2,
  });

  $('#shopSliderRight').click(function () {
    shopSlider.trigger('next.owl.carousel');
  })
  $('#shopSliderLeft').click(function () {
    shopSlider.trigger('prev.owl.carousel');
  })
});