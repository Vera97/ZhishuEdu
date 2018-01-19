jQuery(document).ready(function ($) {

    $('#video-gallery').royalSlider({

        arrowsNav: false,

        fadeinLoadedSlide: true,

        controlNavigationSpacing: 0,

        controlNavigation: 'thumbnails',



        thumbs: {

            autoCenter: false,

            fitInViewport: true,

            orientation: 'vertical',

            spacing: 0,

            paddingBottom: 0

        },

        keyboardNavEnabled: true,

        imageScaleMode: 'fill',

        imageAlignCenter: true,

        slidesSpacing: 0,

        loop: false,

        loopRewind: true,

        numImagesToPreload: 3,

        video: {

            autoHideArrows: true,

            autoHideControlNav: false,

            autoHideBlocks: true

        },

        autoScaleSlider: true,

        autoScaleSliderWidth: 960,

        autoScaleSliderHeight: 450

    });

});
