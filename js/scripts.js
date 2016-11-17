$(document).ready(function() {


	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});

	/***************** Initiate Flexslider ******************/
	$('.flexslider').flexslider({
		animation: "slide", slideshowSpeed: 9000
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
	});

	/***************** Tooltips ******************/
  $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"border-bottom": "none",
					"padding": "15px 0"
				});
				$('header .member-actions').css({
					"top": "7px",
				});
				$('header .navicon').css({
					"top": "15px",
				});
				$('header .logo').css({
					"font-size": "16px",
				});
			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
					"padding": "50px 0"
				});
				$('header .member-actions').css({
					"top": "41px",
				});
				$('header .navicon').css({
					"top": "48px",
				});
				$('header .logo').css({
					"font-size": "24px",
				});
			}
		});
	});
	/***************** Smooth Scrolling ******************/

	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

	});

});

$(document).ready(function(){
    var $ppc = $('.progress-pie-chart'),
      percent = parseInt($ppc.data('percent')),
      deg = 360*percent/100;
    if (percent > 50) {
      $ppc.addClass('gt-50');
    }
    $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.progress-pie-chart1'),
      percent = parseInt($ppc.data('percent')),
      deg = 360*percent/100;
    if (percent > 50) {
      $ppc.addClass('gt-50');
    }
    $('.progress-pie-chart1 .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.progress-pie-chart2'),
      percent = parseInt($ppc.data('percent')),
      deg = 360*percent/100;
      $ppc.removeClass('gt-50');
    $('.progress-pie-chart2 .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.progress-pie-chart3'),
      percent = parseInt($ppc.data('percent')),
      deg = 360*percent/100;
      $ppc.removeClass('gt-50');
    $('.progress-pie-chart3 .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    //––––––––––––––––– EFFECT SCROLL GO TO SECTION ––––––––––––––––––
    //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    $(window).scroll(function() {
      // var seccion = document.getElementById("navegacion").offsetTop;
      var seccion = $("#Projects").offset().top; //2447
      var end_seccion = $("#blog").offset().top - $("#navegacion").height(); //6785
      var position = $(window).scrollTop();

      if (position > seccion-53){
        $("#navegacion").addClass("nav_fixed");
        $("#navegacion").css("margin-top", "-21px");
      }else{
        $("#navegacion").removeClass("nav_fixed");
      }

      if (position > end_seccion-53){
        $("#Testing").html(position);
        $("#navegacion").removeClass("nav_fixed");
        $("#navegacion").css("margin-top", (((parseInt($("#blog").offset().top) - parseInt($("#Projects").offset().top)) - $("#navegacion").height())-20) + "px");
      }
    });
    //****************************************************************

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });


    /* ---- particles.js config ---- */

    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#8ac7ff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });


    /* ---- stats.js config ---- */

    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

// //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// //–––––––––––––––––   BACKGROUND FIXED EFFECT   ––––––––––––––––––
// //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//  $window = $(window);

//  $('li[data-type="background"]').each(function(){
//    // declare the variable to affect the defined data-type
//    var $scroll = $(this);
                 
//     $(window).scroll(function() {
//       // HTML5 proves useful for helping with creating JS functions!
//       // also, negative value because we're scrolling upwards                            
//       var yPos = -($window.scrollTop() / $scroll.data('speed'));
     
//       // window.alert(yPos)

//       // background position
//       var coords = parseInt($scroll.attr('ref')) + (yPos*.1) + 'px';


//       // window.alert(coords);
//       coords = coords + " !important;";
//       // window.alert(coords);

//       // move the background
//       $scroll.css('cssText', 'top: '+coords);
//     }); // end window scroll
//  });  // end section function
// //****************************************************************


$("#main-options a").on("click", irA);

function irA(){

    var seccion = $(this).attr("href");
    var div = document.getElementById(seccion);
    var scroltop = div.offsetTop;

    $("body, html").animate({
        scrollTop: scroltop-125 }, 100);
    return false;
} 