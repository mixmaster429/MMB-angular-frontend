// Index of jQuery Active Code

// :: 1.0 STICKY HEADER ACTIVE CODE
// :: 2.0 SCROLL TO TOP ACTIVE CODE
// :: 3.0 SCROLL LINK ACTIVE CODE
// :: 4.0 SMOOTH SCROLLING ACTIVE CODE
// :: 5.0 TOOLTIP ACTIVE CODE
// :: 6.0 BRANDING SLIDER ACTIVE CODE
// :: 7.0 TESTIMONIALS ACTIVE CODE
// :: 8.0 TEAM SLIDER ACTIVE CODE
// :: 9.0 APP SCREENSHOTS ACTIVE CODE
// :: 10.0 WORK SLIDER ACTIVE CODE
// :: 11.0 LOGIN SLIDER ACTIVE CODE
// :: 12.0 COUNTERUP ACTIVE CODE
// :: 13.0 FANCYBOX IMAGE GALLERY

$( document ).ready(function() {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // function navMenu() {

    //     // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
    //     $('[data-toggle="navbarToggler"]').click(function () {
    //         $('.navbar').toggleClass('active');
    //         $('body').toggleClass('canvas-open');
    //     });
    //     // MAIN MENU TOGGLER ICON
    //     $('.navbar-toggler').click(function () {
    //         $('.navbar-toggler-icon').toggleClass('active');
    //     });

    //     // NAVBAR STICKY
    //     var $stickyNav = $(".navbar-sticky");

    //     $(window).on("scroll load", function () {
    //         var scroll = $(window).scrollTop();
    //         if (scroll >= 120) {
    //             $stickyNav.addClass("navbar-sticky-moved-up");
    //         } else {
    //             $stickyNav.removeClass("navbar-sticky-moved-up");
    //         }
    //         // apply transition
    //         if (scroll >= 250) {
    //             $stickyNav.addClass("navbar-sticky-transitioned");
    //         } else {
    //             $stickyNav.removeClass("navbar-sticky-transitioned");
    //         }
    //         // sticky on
    //         if (scroll >= 500) {
    //             $stickyNav.addClass("navbar-sticky-on");
    //         } else {
    //             $stickyNav.removeClass("navbar-sticky-on");
    //         }

    //     });
    // }
    // navMenu();

    // :: 1.0 STICKY HEADER ACTIVE CODE
    $window.on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.main-header-area').addClass('navbar-sticky');
        } else {
            $('.main-header-area').removeClass('navbar-sticky');
        }
    });

    $window.on('scroll', function () {
        $('.navbar-sticky').toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    })

    // :: 2.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    // :: 3.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // SCROLLSPY ACTIVE CODE
    $('body').scrollspy({
        target: '#appo-header'
    });

    // :: 4.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 5.0 TOOLTIP ACTIVE CODE
    $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });

    // :: 6.0 BRANDING SLIDER ACTIVE CODE
    $('.branding-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });

    // :: 11.0 FEATURES SLIDER ACTIVE CODE
    $('.features-slider.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 6000,
        dotsContainer: '.features-content'
    });

    // :: 7.0 TESTIMONIALS ACTIVE CODE
    var testimonialSlider = $('.testimonials');
    testimonialSlider.owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    });

    testimonialSlider.on("translate.owl.carousel", function () {
        $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").removeClass("animated zoomIn").css("opacity", "0");
    });
    testimonialSlider.on("translated.owl.carousel", function () {
        $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").addClass("animated zoomIn").css("opacity", "1");
    });
    $('.thumb-next').on('click', function () {
        testimonialSlider.trigger('next.owl.carousel', [300]);
        return false;
    });
    $('.thumb-prev').on('click', function () {
        testimonialSlider.trigger('prev.owl.carousel', [300]);
        return false;
    });

    // :: 8.0 TEAM SLIDER ACTIVE CODE
    $('.team-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    // :: 9.0 APP SCREENSHOTS ACTIVE CODE
    // $('.app-screenshots').slick({
    //     dots: true,
    //     arrows: false,
    //     speed: 2000,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 dots: false
    //             }
    //         }
    //       ]
    // });

    // :: 10.0 WORK SLIDER ACTIVE CODE
    $('.work-slider.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        dotsContainer: '.work-content'
    });

    // :: 11.0 LOGIN SLIDER ACTIVE CODE
    $('.login-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // :: 12.0 COUNTERUP ACTIVE CODE
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    // :: 13.0 FANCYBOX IMAGE GALLERY
    $('[data-fancybox="images"]').fancybox({
        afterLoad: function (instance, current) {
            var pixelRatio = window.devicePixelRatio || 1;

            if (pixelRatio > 1.5) {
                current.width = current.width / pixelRatio;
                current.height = current.height / pixelRatio;
            }
        }
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

});