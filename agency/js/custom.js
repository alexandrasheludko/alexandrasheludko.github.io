$('.slick-vertical').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  autoplay: true,
  dots: true,
  arrows : false,
  responsive: [
  {
    breakpoint: 991,
    settings: {
    vertical: false,
    }
  }
  ]
});


$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows : true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
  ]
});

$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });
});