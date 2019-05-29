$(document).ready(function() {
  $('.js_main-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   dots: true,
   fade: true,
   asNavFor: '.js_main-slider-nav'
 });
 $('.js_main-slider-nav').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   asNavFor: '.js_main-slider',
   // dots: true,
   // centerMode: true,
   focusOnSelect: true
 });

 $('.tabs .tab-links a').on('click', function(event) {
  var currentAttributeValue = $(this).attr('href');

  // Show/Hide Tabs
  $('.tabs ' + currentAttributeValue).show().siblings().hide();

  // Change/remove current tab to active
  $(this).parent('li').addClass('active').siblings().removeClass('active');

  event.preventDefault();

});




 $('.placeholder-fly').focus(function(){
   $(this).parents('.form-group').addClass('focused');
 });

 $('.placeholder-fly').blur(function(){
   var inputValue = $(this).val();
   if ( inputValue == "" ) {
     $(this).removeClass('filled');
     $(this).parents('.form-group').removeClass('focused');
   } else {
     $(this).addClass('filled');
   }
 });

 $('.drop-select__title--drop').on('click', function () {
  $('.links-list--header').toggleClass('links-list--show');
  $('.drop-select__delay').toggleClass('drop-select__delay--show');
 });

$('.drop-select__delay').on('click', function () {
  $('.links-list--header').removeClass('links-list--show');
  $('.drop-select__delay').removeClass('drop-select__delay--show');
});

$('.js_field-tel__input').mask('+7(999)999-99-99');

$('.js_reviews').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 draggable: false,
 arrows: false,
 dots: true,
 autoplay: true,
 autoplaySpeed: 7000
 // fade: true,
});

$('.js_carousel').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  draggable: false,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true
      }
    }
  ]
});


  $("[data-fancybox]").fancybox({
      loop: true
  });


  $(".set > a").on("click", function(evt){
    evt.preventDefault();
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
    }else{
    $(".set > a").removeClass("active");
    $(this).addClass("active");
    $('.content').slideUp(200);
    $(this).siblings('.content').slideDown(200);
    }

  });
  $('.accordion-container .set').first().children('a').trigger('click');
  jQuery("body").on('click', '.main-menu__link', function(e){
    var fixed_offset = 35;
    jQuery('html,body').stop().animate({ scrollTop: jQuery(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  $('a[href="#header-top"]').click(function(){
         $('html, body').animate({scrollTop:0}, 'slow');
         return false;
     });

 $(window).scroll(function () {
   if ($(this).scrollTop() > 600) {
     $('.totop').addClass('show');
   }
   else {
     $('.totop').removeClass('show');
   }
 });

 // mmenu initialization
    $('#mobile-menu').mmenu({
      // "extensions": [
      //       "pagedim-black",
      //       "position-right"
      //    ]
       // options
    // }, {
       // configuration
       offCanvas: {
          pageNodetype: "#wrapper-content",
          position: "right"
       }
    });

var API = $("#mobile-menu").data( "mmenu" );
$("#cross-btn").click(function(evt) {
  evt.preventDefault();
   API.close();
});



});

$(document).ready(function () {
	if(Cookies.get('cookies-popup') != 1) {
		// $('.cookies-popup').fadeIn();
	}
	$('.cookies-popup__btn').on('click', function (evt) {
		evt.preventDefault();
		$('.cookies-popup').fadeOut();
    Cookies.set('cookies-popup', '1', { expires: 365000 * 7 });
	});

  google.maps.event.addDomListener(window, 'load', init);

           function init() {

               var mapOptions = {
                 scrollwheel: false,
                   zoom: 15,

                   center: new google.maps.LatLng(44.055144, 43.038282), // New York

                   styles: [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]}]

               };


               var mapElement = document.getElementById('map');

               var map = new google.maps.Map(mapElement, mapOptions);

               var point1 = new google.maps.LatLng(44.054849, 43.038176);
var point2 = new google.maps.LatLng(44.054031, 43.041116);

var marker = new google.maps.Marker({ position: point1, map: map, title: 'Стационар'});
// var marker2 = new google.maps.Marker({ position: point2, map: map, title: 'Поликлиника'});
           }

});
//
// $(document).ready(function() {
//     // fix by scroll
//       var headerInner = $('.main');
//       var mobileNav = $('.mobile-nav');
//       $(window).scroll(function(){
//            if ( $(this).scrollTop() > headerInner.height() ) {
//                mobileNav.addClass("mobile-nav--fixed");
//                // headerInner.css('margin-bottom', '32px');
//            } else {
//               if ( $(this).scrollTop() <= headerInner.height() && mobileNav.hasClass("mobile-nav--fixed")) {
//               mobileNav.removeClass("mobile-nav--fixed");
//                // headerInner.css('margin-bottom', '0');
//             }
//           }
//
//        });//scroll
//
// });
