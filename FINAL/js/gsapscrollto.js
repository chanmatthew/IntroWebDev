$(document).ready(function() {
    var $floor1Btn = $('#floor1Btn'),
    $floor2Btn = $('#floor2Btn'),
    $floor3Btn = $('#floor3Btn'),
    $floor4Btn = $('#floor4Btn'),
    $navButtons = $('.floorbutton');

    $floor1Btn.attr('data-scrollPos', $('#floor1Panel').offset().top);
    $floor2Btn.attr('data-scrollPos', $('#video-container').offset().top);
    $floor3Btn.attr('data-scrollPos', $('#facts-container').offset().top);
    $floor4Btn.attr('data-scrollPos', $('#map-container').offset().top);

    $navButtons.click(function() {
        var myScrollPosition = $(this).attr('data-scrollPos');
        TweenLite.to(window, 1, { scrollTo: myScrollPosition, ease: Back.easeOut});
    });
});