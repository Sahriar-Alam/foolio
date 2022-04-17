(function ($) {
    "use strict";
    $(document).on('ready', function () {

        $(".scroll-top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 2000);
            return true;
        });

        $('.service-slider, .slider-blog').slick({
            dots: false,
            arrows: true,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-long-arrow-alt-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fas fa-long-arrow-alt-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 777,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 667,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });


        $('.sponsor-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $('.slider2').jdSlider({
            wrap: '.slide-inner',
            isAuto: true,
            isLoop: true,
            slideShow: 3,
            slideToScroll: 1,
            responsive: [
                {
                    viewSize: 500, // break point(0~768)
                    settings: { // 해당 영역 options 설정
                        isUse: true,
                        slideShow: 1,
                        slideToScroll: 1
                    }
        }, {
                    viewSize: 600, // break point(769~1024)
                    settings: { // 해당 영역 options 설정
                        isUse: true,
                        slideShow: 2,
                        slideToScroll: 1
                    }
              }, {
                    viewSize: 992, // break point(0~768)
                    settings: { // 해당 영역 options 설정
                        isUse: true,
                        slideShow: 2,
                        slideToScroll: 1
                    }
        }, {
                    viewSize: 1170, // break point(769~1024)
                    settings: { // 해당 영역 options 설정
                        isUse: true,
                        slideShow: 3,
                        slideToScroll: 3
                    }
              }
           ]
        });

        $(document).ready(function () {
            $('.icon-2').click(function () {
                if ($('.menu-search-bar').hasClass('menu-search-bar') == true) {
                    $('.sopping-box').removeClass('sopping-box-collapse');
                    $('.menu-search-bar').toggleClass('menu-search-bar-collapse');
                } else {
                    $('.menu-search-bar').toggleClass('menu-search-bar');
                }
            });
        });

        $(document).ready(function () {
            $('.icon-1').click(function () {
                if ($('.sopping-box').hasClass('sopping-box') == true) {
                    $('.menu-search-bar').removeClass('menu-search-bar-collapse');
                    $('.sopping-box').toggleClass('sopping-box-collapse');
                } else {
                    $('.sopping-box').toggleClass('sopping-box');
                }
            });
        });
        $(document).ready(function () {
            $('.div, section').click(function () {
                $('.sopping-box').addClass('sopping-box');
                $('.sopping-box').removeClass('sopping-box-collapse');
                $('.menu-search-bar').addClass('menu-search-bar');
                $('.menu-search-bar').removeClass('menu-search-bar-collapse');
            });
        });


        $('.testing').progressBar({
            value: "70",
            height: "35",
        });

        $("#video").videoPopup({
            autoplay: 1,
            controlsColor: 'white',
            showVideoInformations: 0,
            width: 1000,
            customOptions: {
                rel: 0,
                end: 60
            }
        });
        $("#video1").videoPopup();

        $('.slider3').jdSlider({
            wrap: '.slide-inner',
            isAuto: true,
            isLoop: true,
            slideShow: 1,
            slideToScroll: 1,
            responsive: [{
                viewSize: 768,
                settings: {
                    slideShow: 1,
                    slideToScroll: 1
                }
                }]
        });

        /*-- Mobile-Menu-Active --*/

        $('.menu-triger').on('click', function () {
            $(this).toggleClass('active');
        });

        $('.js-preloader').preloadinator({
            minTime: 500
        });

        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="fa fa-angle-right"></i>',
            openedSymbol: '<i class="fa fa-angle-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '.menu-triger',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });


        /*-- WoW-Animation-JS --*/
        new WOW().init();



        $(document).on('scroll', function () {
            if ($(window).scrollTop() > 10) {
                $('#container-header').addClass('change-color');
            } else {
                $('#container-header').removeClass('change-color');
            }
        });

        $('.percent').percentageLoader({
            valElement: 'p',
            strokeWidth: 15,
            bgColor: '#F7F7F7',
            ringColor: '#7FB432',
        });


    });


})(jQuery);
