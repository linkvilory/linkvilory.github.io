/*
 * Jquery animations
 */
$(document).ready(function(){

  $(".opacity.top-left, .opacity.bottom-right").css("left",$("#presentation .col-md-8").position().left);
  $(".opacity.top-left, .opacity.bottom-right").css("top",$("#presentation .col-md-8").position().top);


  /*
   * Se recorre el objeto banner para determinar cuantos banners se tienen que mostrar
   * Por el momento se muestran todos sin importar la cantidad y no hay algún tipo de paginación.
   * Se van agregando cada uno de los banners al contenedor para su visualización.
   */
  for(banner in banners){

    var kws = banners[banner]['platform'];
    var kw = kws.replace(/ /g, "").split("|");

    var appendHTML = '<li><a target="_blank" href="visualizador.php?id=' + banners[banner]['id'] + '&platform=' + kw + '">' + banners[banner]['name'] + '</a></li>';

    $("#banner-list").append(appendHTML);

  }

});


/*
 * Detect resize and rellocate all the stuff
 */
$(window).on('resize', function() {
  /* Relocate on resize the bg gray */
  $(".opacity.top-left, .opacity.bottom-right").css("left",$("#presentation .col-md-8").position().left);
  $(".opacity.top-left, .opacity.bottom-right").css("top",$("#presentation .col-md-8").position().top);
});
