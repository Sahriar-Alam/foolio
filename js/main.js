;
(function ($) {
    "use strict";
    $(document).on('ready', function () {



        $('.menu-triger').on('click', function () {
            $(this).toggleClass('active');
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

        function myFunction() {
            location.reload();
        }

        /*-- WoW-Animation-JS --*/
        new WOW().init();

        $('.testimonial-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: true,
            prevArrow: '<div class="slick-prev arrows"></div>',
            nextArrow: '<div class="slick-next arrows"></div>',
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
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


        $('.blog-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
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


        $(document).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('#container-header').addClass('change-color');
            } else {
                $('#container-header').removeClass('change-color');
            }
        });

        $(".scroll-top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return true;
        });

        // Portfolio Image Loded with Masonry
        if (typeof imagesLoaded == 'function') {
            imagesLoaded($('.work-items'), function () {
                setTimeout(function () {
                    $('.work-items').isotope({
                        itemSelector: '.work-items .work-item',
                        resizesContainer: false,
                        layoutMode: 'masonry',
                        filter: '*'
                    });
                }, 500);

            });
        };


        // Set Active Class for Portfolio filter
        $('.work-filter li').on('click', function (event) {
            $('.work-filter li').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });



        // Filter JS for Porrtfolio
        $('.work-filter').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $('.work-items').isotope({
                filter: filterValue
            });
        });


        var options = {
            strings: ['I am Nik Smith', 'I am Nik Smith'],
            typeSpeed: 100,
            cursorChar: '',
            backSpeed: 100,
        };

        var typed = new Typed('#typed', options);


        // progress bar//

        $('#one').LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#558bff',
            backgroundColor: '#ededed',
            radius: '0px',
            height: '15px',
            width: '300px'
        });




        $('#two').LineProgressbar({
            percentage: 90,
            fillBackgroundColor: '#fecc90',
            backgroundColor: '#ededed',
            radius: '0px',
            height: '15px',
            width: '300px'
        });


        $('#three').LineProgressbar({
            percentage: 30,
            fillBackgroundColor: '#ff885e',
            backgroundColor: '#ededed',
            radius: '0px',
            height: '15px',
            width: '300px'
        });

        $('#four').LineProgressbar({
            percentage: 95,
            fillBackgroundColor: '#282828',
            backgroundColor: '#ededed',
            radius: '0px',
            height: '15px',
            width: '300px'
        });

        $('#five').LineProgressbar({
            percentage: 95,
            fillBackgroundColor: '#190844',
            backgroundColor: '#ededed',
            radius: '0px',
            height: '15px',
            width: '300px'
        });

        $('#six').LineProgressbar({
            percentage: 60,
            fillBackgroundColor: '#9dd3ff',
            backgroundColor: '#ededed',
            radius: '0px',
            height: '15px',
            width: '300px'
        });



    });

})(jQuery);
