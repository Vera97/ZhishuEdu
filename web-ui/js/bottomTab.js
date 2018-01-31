$(document).ready(function () {
    if (!isPC()) {
        $("#owl-home").hide();
    }

    $("#tabHome").on('click', function () {
        $(".aui-bar-tab-item.aui-active").removeClass("aui-active");
        $(this).addClass("aui-active");
        window.location.href = "index.html";
    })

    $("#tabRecommend").on('click', function () {
        $(".aui-bar-tab-item.aui-active").removeClass("aui-active");
        $(this).addClass("aui-active");
        window.location.href = "recommend.html";
    })

    $("#tabTab").on('click', function () {
        $(".aui-bar-tab-item.aui-active").removeClass("aui-active");
        $(this).addClass("aui-active");
        window.location.href = "tag.html";
    })

    $("#tabCommunity").on('click', function () {
        $(".aui-bar-tab-item.aui-active").removeClass("aui-active");
        $(this).addClass("aui-active");
        window.location.href = "community.html";
    })

    $("#tabMine").on('click', function () {
        $(".aui-bar-tab-item.aui-active").removeClass("aui-active");
        $(this).addClass("aui-active");
        window.location.href = "shop.html";
    })
});

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
