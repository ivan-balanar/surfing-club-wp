jquery(document).ready(function ($) {
  
  var headerSlider = $(".owl-carousel");
  headerSlider.on('initialized.owl.carousel', function(event){
    $('.slide-controls__number-active').text(event.item.index + 1)
    $('.slide-controls__number-total').text(event.item.count)
  });
  headerSlider.owlCarousel({
    items: 1,
    dots: false
  });

  $('#headerSliderRight').click(function () {
    headerSlider.trigger('next.owl.carousel');
  })
  $('#headerSliderLeft').click(function () {
    headerSlider.trigger('prev.owl.carousel');
  })
  headerSlider.on('changed.owl.carousel', function(event){
    $('.slide-controls__number-active').text(event.item.index + 1)
    $('.slide-controls__number-total').text(event.item.count)
  });

});