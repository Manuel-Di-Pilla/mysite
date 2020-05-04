 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });
 //var ProgressBar = require('progressbar.js');
 
 jQuery(document).ready(function($) {
	 
	//var line = new ProgressBar.Line('#container');

	"use strict";

	$(window).on('scroll', function () {
		if ($(window).scrollTop()){
			$('.nav').addClass('navblack');
		} else{
			$('.nav').removeClass('navblack');
		}
	});

	$('.link0').click(function (){
		$('html, body').animate({ scrollTop: $('#home').offset().top + 1 }, 1000, 'linear');
	});
	$('.link1').click(function (){
		$('html, body').animate({ scrollTop: $('#about').offset().top + 1 }, 500, 'linear');
	});
	$('.link2').click(function (){
		$('html, body').animate({ scrollTop: $('#skills').offset().top + 50 }, 1000, 'linear');
	});
	$('.link3').click(function (){
		$('html, body').animate({ scrollTop: $('#mywork').offset().top + 1 }, 1000, 'linear');
	});
	$('.link4').click(function (){
		$('html, body').animate({ scrollTop: $('#contatti').offset().top + 1 }, 1000, 'linear');
	});

	$(document).on('click', '.burger', function () {
		$('.burger-nav').removeClass('hidden');
		$('.fa-bars').addClass('hidden');
		$('.nav').addClass('hidden');
	});
	 $('.pippo').click(function () {
		 $('.burger-nav').addClass('hidden');
		 $('.fa-bars').removeClass('hidden');
		 $('.nav').removeClass('hidden'); 
	 });
	 $(window).on('resize', function () {
		 if ($(window).width() > 610 && !$('.burger-nav').hasClass('hidden')) {
			 $('.burger-nav').addClass('hidden');
			 $('.nav').removeClass('hidden');
		 }
		 if ($(window).width() < 610 && $('.fa-bars').hasClass('hidden')) {
			 $('.fa-bars').removeClass('hidden');
		 }
	 });

	(function highlightNav() {
		var prev; //keep track of previous selected link
		var isVisible = function (el) {
			el = $(el);

			if (!el || el.length === 0) {
				return false
			};

			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

			var elemTop = el.offset().top;
			var elemBottom = elemTop + el.height();
			return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
		}

		$(window).scroll(function () {
			$('.listnav a').each(function (index, el) {
				el = $(el);
				if (isVisible(el.attr('href'))) {
					if (prev) {
						prev.removeClass('active');
					}
					el.addClass('active');
					prev = el;

					//break early to keep highlight on the first/highest visible element
					//remove this you want the link for the lowest/last visible element to be set instead
					return false;
				}
			});
		});

		//trigger the scroll handler to highlight on page load
		$(window).scroll();
	})();



	function isElementInViewport(elem) {
		var $elem = $(elem);

		// Get the scroll position of the page.
		var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
		var viewportTop = $(scrollElem).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		// Get the position of the element on the page.
		var elemTop = Math.round($elem.offset().top);
		var elemBottom = elemTop + $elem.height();

		return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
	}

	// Check if it's time to start the animation.
	function checkAnimation() {
		var $elem = $('.progressi');

		// If the animation has already been started
		if ($elem.hasClass('start')) return;

		if (isElementInViewport($elem)) {
			// Start the animation
			console.log('ciao');
		}
	}

	// Capture scroll events
	$(window).scroll(function () {
		checkAnimation();
	});








	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	

	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 20,
		    smartSpeed: 1000,
		    autoplay: true,
		    nav: true,
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
			$('.custom-next').click(function(e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('next.owl.carousel');
			})
			$('.custom-prev').click(function(e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('prev.owl.carousel');
			})

			
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    pauseOnHover: false,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  if ( $('.owl-all').length > 0 ) {
			$('.owl-all').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
				stagePadding: 0,
		    margin: 0,
		    autoplay: false,
		    nav: false,
		    dots: true,
		    touchDrag: true,
  			mouseDrag: true,
  			smartSpeed: 1000,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        768:{
	        	margin: 30,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	          items: 1
	        },
	        992:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        }
		    }
			});
		}
		
	};
	siteCarousel();

	

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	// siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');

   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top - 50
      }, 600, 'easeInOutExpo', function() {
        // window.location.hash = hash;

      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();

  // Stellar
  $(window).stellar({
  	horizontalScrolling: false,
    responsive: true,
  });


  var counter = function() {
		
		$('#about-section').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number > span').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	 var siteIstotope = function() {
  	/* activate jquery isotope */
	  var $container = $('#posts').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	    // filter items on button click
	  $('#filters').on( 'click', 'button', function(e) {
	  	e.preventDefault();
	    var filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters button').removeClass('active');
	    $(this).addClass('active');
	  });
  }

  siteIstotope();

});