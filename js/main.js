$('.carousel.carousel-slider').carousel({fullWidth: true});

var options = [
    {selector: '#staggered-test', offset: 50, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
  ];
  Materialize.scrollFire(options);