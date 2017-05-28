$(document).ready(function(){

  /*
   * Scrool down animation
   */
  $("a.anchor").on("click", function(event){

    var target = this.hash;
    event.preventDefault();
    var target = this.hash;
    var height = $(target).offset().top;
    $('html, body').stop().animate({ scrollTop: height }, 400, function(e) {
      window.location.hash = target;
    });

  });

  $(".phrase").fitText(1.2, { minFontSize: '20px', maxFontSize: '60px' });

});
