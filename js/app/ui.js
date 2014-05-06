$(function() {
    initSideBar(420);
});

function initSideBar(width) {
    $('.sidebar-nav').css("width", width + "px");
    $(".side-bar-slide-control").css("left", width + "px");
    $(".leaflet-control-zoom").css("margin-left", (width + 12) + "px");
    $(".leaflet-control-scale").css("margin-left", (width + 12) + "px");
    $("#hide-nav").click(function(e) {
        e.preventDefault();
        $(".leaflet-control-zoom").toggle('fade', {}, 175, function() {
            $(".leaflet-control-zoom").toggle('fade', {}, 175);
        });
        $(".side-bar-slide-control").toggle('fade', {}, 175, function() {
            $(".side-bar-slide-control").toggle('fade', {}, 175, function() {
                $('.hide-sidebar a').toggleClass("hide-sidebar-closed");
            });
        });
        $("#nav").toggle('slide', {}, 175, function() {
            $(".side-bar-slide-control").toggleClass("slide-toggle");
            $(".leaflet-control-zoom").toggleClass("zoomControl-toggle");
            $(".leaflet-control-scale").toggleClass("zoomControl-toggle");
        });
    });
}