$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    // dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
        nav: false,
        margin: 20,
      },
    },
  });
});
