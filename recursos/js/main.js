/*
 * Jquery animations
 */
$(document).ready(function(){

  $(".opacity.top-left, .opacity.bottom-right").css("left",$("#presentation .col-md-8").position().left);
  $(".opacity.top-left, .opacity.bottom-right").css("top",$("#presentation .col-md-8").position().top);

});


/*
 * Detect resize and rellocate all the stuff
 */
$(window).on('resize', function() {
  /* Relocate on resize the bg gray */
  $(".opacity.top-left, .opacity.bottom-right").css("left",$("#presentation .col-md-8").position().left);
  $(".opacity.top-left, .opacity.bottom-right").css("top",$("#presentation .col-md-8").position().top);
});
