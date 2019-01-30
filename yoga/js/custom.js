$('.sliderRight').slick({
  infinite: true,
  slidesToShow: 1,
  dots: false,
  arrows : true,
});


 $('.sliderRewiev').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
  asNavFor: '.slider-nav',
  // autoplay: true
});

$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.sliderRewiev',
  dots: false,
  focusOnSelect: true
});



$(document).on("scroll", function(){

  if ($(document).scrollTop() > 0){
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
  
});


$(document).ready(function(){
      var touch = $('#touch-menu');
      var menu = $('.menu');
      
      $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
      });
      $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    });


jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
});

$('form').validate({
  rules: {
    ph: {
      checkMask: true
    }
  },
  messages: {
    ph: {
      checkMask: "Введите полный номер телефона"
    }
  }
});
$('.js-phone').mask("+7(999)999-9999", {autoclear: false});