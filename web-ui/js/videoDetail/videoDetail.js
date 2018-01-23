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

    $(".cont-scroll .border").css("width","150px");

    // $(".cont-scroll li:eq("+i+")").live(onclick(function () {
    //     console.log("sssss");
    //     if(i==0){
    //         $(".cont-scroll .border").css("width","150px");
    //     }else if(i==1){
    //         $(".cont-scroll .border").css("width","150px");
    //         $(".cont-scroll .border").css("margin-left","150px");
    //     }
    // }))
    // $(".rsThumbsVer").show();
    $(".cont-scroll li:eq(0)").live("click",function () {
        // $(".cont-scroll .border").css("width","150px");
        $(".cont-scroll .border").css("margin-left","0px");
        $(".rsThumbsVer").show();
        $(".commentAll").hide();
    });
    var i=0;
    $(".cont-scroll li:eq(1)").live("click",function () {

        $(".rsThumbsVer").hide();
        $(".commentAll").show();
        $(".cont-scroll .border").css("margin-left","150px");
        var p="<div class=\"rsNav rsThumbs comment-all\">\n" +
            "        <div class=\"commentAll\">\n" +
            "        <!--评论区域 begin-->\n" +
            "        <div class=\"reviewArea clearfix\">\n" +
            "            <textarea class=\"content comment-input\" placeholder=\"Please enter a comment&hellip;\" onkeyup=\"keyUP(this)\"></textarea>\n" +
            "            <a href=\"javascript:;\" class=\"plBtn\">评论</a>\n" +
            "        </div>\n" +
            "        <!--评论区域 end-->\n" +
            "        <!--回复区域 begin-->\n" +
            "        <div class=\"comment-show\">\n" +
            "            <div class=\"comment-show-con clearfix\">\n" +
            "                <div class=\"comment-show-con-img pull-left\"><img src=\"img/header-img-comment_03.png\" alt=\"\"></div>\n" +
            "                <div class=\"comment-show-con-list pull-left clearfix\">\n" +
            "                    <div class=\"pl-text clearfix\">\n" +
            "                        <a href=\"#\" class=\"comment-size-name\">张三 : </a>\n" +
            "                        <span class=\"my-pl-con\">&nbsp;来啊 造作啊!</span>\n" +
            "                    </div>\n" +
            "                    <div class=\"date-dz\">\n" +
            "                        <span class=\"date-dz-left pull-left comment-time\">2017-5-2 11:11:39</span>\n" +
            "                        <div class=\"date-dz-right pull-right comment-pl-block\">\n" +
            "                            <a href=\"javascript:;\" class=\"removeBlock\">删除</a>\n" +
            "                            <a href=\"javascript:;\" class=\"date-dz-pl pl-hf hf-con-block pull-left\">回复</a>\n" +
            "                            <span class=\"pull-left date-dz-line\">|</span>\n" +
            "                            <a href=\"javascript:;\" class=\"date-dz-z pull-left\"><i class=\"date-dz-z-click-red\"></i>赞 (<i class=\"z-num\">666</i>)</a>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"hf-list-con\"></div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <!--回复区域 end-->\n" +
            "    </div>\n" +
            "    </div>"

        if(i==0){
            $("#video-gallery").append(p);
            i++;
            console.log(i);
        }



    })


});
