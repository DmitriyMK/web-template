// $(document).ready(function() {


//   if (document.documentElement.clientWidth > 1240) {


//     // IE FALSE
//     var isIE = false;
//     var ua = window.navigator.userAgent;
//     var old_ie = ua.indexOf('MSIE ');
//     var new_ie = ua.indexOf('Trident/');

//     if ((old_ie > -1) || (new_ie > -1)) {
//       isIE = true;
//     }

//     if (!isIE) {

//     }


//     // GSAP MOUSE ROTATE ANIMATION
//     $(document).ready(function () {

//       var cardWrap = document.getElementsByClassName('saltImg');


//       document.body.addEventListener('mousemove', cursorPositionHandler);

//       function cursorPositionHandler(e) {
//         var decimalX = e.clientX / window.innerWidth - 0.5;
//         var decimalY = e.clientY / window.innerHeight - 0.5;

//         TweenMax.to(cardWrap, 0.5, {
//           rotationY: 20 * decimalX,
//           rotationX: -20 * decimalY,
//           ease: Quad.easeOut,
//           transformPerspective: 500,
//           transformOrigin: "center"
//         });
//       }
//     });


//     // GSAP ANIMATION
//     $('[data-scrollmagic1]').each(function(index, elem) {

//   // Init ScrollMagic Controller
//   var scrollMagicController = new ScrollMagic();

//   // Create Animations
//   var title = $(elem).find('.proposal__title');
//   var subtitle = $(elem).find('.proposal__subtitle');
//   var list1 = $(elem).find('.proposal__item-left');
//   var list2 = $(elem).find('.proposal__item-right');
//   var img1 = $(elem).find('.proposal__img1');
//   var img2 = $(elem).find('.proposal__img2');
//   var titles1 = $(elem).find('.titles1');
//   var titles2 = $(elem).find('.titles2');


//   var tl = new TimelineMax({
//     pause: true
//   });


//   tl.add("start") // add timeline label


//   .fromTo(title, 0.6, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power4.easeOut}, 0.4)
//   .fromTo(subtitle, 0.8, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power4.easeOut}, 0.6)
//   .fromTo(img1, 1, {x: '60px', opacity: 0}, {x: 0, opacity: 1, ease: Power4.easeOut}, 1)
//   .fromTo(img2, 1.2, {x: '60px', opacity: 0}, {x: 0, opacity: 1, ease: Power4.easeOut}, 1.4)
//   .fromTo(list1, 1.2, {x: '80px', opacity: 0}, {x: 0, opacity: 1,  ease: Power4.easeOut}, 1.2)
//   .fromTo(list1, 1.6, {y: '60px'}, {y: 0,  ease: Power4.easeOut}, 1.6)
//   .fromTo(list2, 1.4, {x: '80px', opacity: 0}, {x: 0, opacity: 1,  ease: Power4.easeOut}, 1.4)
//   .fromTo(list2, 1.8, {y: '60px'}, {y: 0,  ease:Power4.easeOut}, 1.6)
//   .fromTo(titles1, 1.6, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power4.easeOut}, 1.6)
//   .fromTo(titles2, 1.8, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power4.easeOut}, 1.8)


//   // Create the Scene and trigger when visible
//   var scene = new ScrollScene({
//     triggerElement: elem,
//     reverse: false,
//     offset: 0
//   })


//   .setTween(tl)
//   .addTo(scrollMagicController);
//   scene.addIndicators();
//     });

//   };
// });




// var options = {
//   paths: '#round',
//   pointsNumber: 12,
//   maxDistance: 50,
//   color: '#eef3f5',
// };


// var jelly = new Jelly('.jelly', options);


// objectFitImages();



  // $(".scrolling__link").on("click", function (event) {
  //   event.preventDefault();
  //   var id  = $(this).attr('href'),

  //   top = $(id).offset().top;
      
  //   $('body,html').animate({scrollTop: top}, 1000);
  // });


  // var position = $("#works").offset();
  // $(document).scroll(function() {
  //   var y = $(this).scrollTop();
  //   if (y >= position.top) {
  //     $("#scroll-block").fadeIn(300);
  //   } else {
  //     $("#scroll-block").fadeOut(300);
  //   }
  // });


  // var bLazy = new Blazy();

  // $('.phone-mask').mask('+38(999)999-99-99');



  /*  $('.slider-for-recipe').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      asNavFor: '.slider-nav-recipe',
      fade: true,
      draggable: false,
      infinite: true,

    });*/


  /*  $('.slider-nav-recipe').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for-recipe',
      arrows: false,
      dots: false,
      focusOnSelect: true,
      infinite: true,
      centerMode: false,

      responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,

        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          arrows: true,
        }
      },

      ]

    });
    */

  // $('[data-fancybox]').fancybox({
  //   loop: true,
  //   animationEffect: "zoom",
  //   transitionEffect: "tube",
  //   transitionDuration: 600,
  //   clickOutside: "close",
  //   protect: true,
  //   modal: false,

  //   touch: {
  //     vertical: true,
  //     momentum: true
  //   },
  // });

// });


// MENU
// $(document).ready(function() {

	// BURGER RESPONSIVE < 992px
	// var $menu = $('.nav');

	// $('.burger').click(function() {
	// 	$(this).toggleClass('active');
	// 	$('.overlay').toggleClass('open').show;
	// });


	// $('.header__link').click(function() {
	// 	$('.overlay').removeClass('open');
	// 	$('.burger').removeClass('active');
	// });



	// $(document).mouseup(function(e) {
	// 	if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {

	// 		$('.overlay').removeClass('open');
	// 		$('.burger').removeClass('active');
	// 	}
	// });


// });



// $(window).on('resize orientationchange', function() {
//   $('.slider').slick('resize');
// });



// $(".form").submit(function() {
//   var th = $(this);
//   $.ajax({
//     type: "POST",
//     url: "mail.php",
//     data: th.serialize()
//   }).done(function() {

//     var inst = $('[data-remodal-id=modal-thanks]').remodal();
//     inst.open();

//     setTimeout(function() {
//       th.trigger("reset");
//     }, 1000);
//   });
//   return false;
// });