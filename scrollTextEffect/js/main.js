$(function() {
var text = $(".text");

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    var animationPosition = 100;
    if (scroll >= animationPosition) {
    text.removeClass("hidden");
    } else {
    text.addClass("hidden");
    }
});

});
  