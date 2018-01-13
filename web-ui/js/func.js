$(document).ready(function(){
	"use strict";
    
	var scrollingAnimations = $('body').data("scrolling-animations");
	if(scrollingAnimations){
		new WOW().init();
	}

    /* home slider */
    $("#owl-home").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        pagination:false

    });

    /* Search Field Animation */
    $(".iconSearch").on('click', function(e){
        e.preventDefault();
        $(this).parent('.search').toggleClass('active');
    });

    /* mobile menu */
    $("#toggle-nav").click(function () {
        $(this).toggleClass('active');
        $('.nav-box .nav-container').toggle().toggleClass("menu-show");
    });

    $("#left-olw").owlCarousel({

        //navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true


    });


    /////////////////////////////////////
    //  Chars Start
    /////////////////////////////////////


    if ($('body').length) {
        $(window).on('scroll', function() {
            var winH = $(window).scrollTop();

            $('.percent-blocks').waypoint(function() {
                $('.chart').each(function() {
                    CharsStart();
                });
            }, {
                offset: '80%'
            });


        });
    }

    function CharsStart() {


        $('.chart').easyPieChart({

            barColor: false,
            trackColor: false,
            scaleColor: false,
            scaleLength: false,
            lineCap: false,
            lineWidth: false,
            size: false,
            animate: 4000,


            onStep: function(from, to, percent) {

                $(this.el).find('.percent').text(Math.round(percent));



            }
        });

    }


    /////////////////////////////////////////////////////////////////
    // Popup Settings
    /////////////////////////////////////////////////////////////////

    $(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({});
    });

    /* accordion */
    $(function() {
        $( "#accordion" ).accordion({
            heightStyle: "content",
            collapsible: true
        });
    });

    /* slider-range */
    $(function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 665,
            values: [ 65, 600 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    });

    $("#owl-brends").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 5,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });

    $("#post-owl").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

    $("#owl-team").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });

    $("#quote-olw").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 2,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet : [768,1]

    });

    $("#quote-olw-h1").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet : [768,1]

    });

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })

    /* shp grid view */
    $(function() {
        $("#type-of-display li .toogle-view").click(function(e) {
            e.preventDefault();
            $("#type-of-display li .toogle-view").removeClass('active-view');
            $(this).addClass('active-view');
        })

        $("#type-of-display .grid-3").click(function(e) {
            e.preventDefault();
            $(".shop-grid").removeClass('grid-list');
        })

        $("#type-of-display .grid-list").click(function(e) {
            e.preventDefault();
            $(".shop-grid").addClass('grid-list');
        })
    });

    (function ($) {
        $('.spinner .btn:first-of-type').on('click', function() {
            $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
        });
        $('.spinner .btn:last-of-type').on('click', function() {
            $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
        });
    })(jQuery);

});