$(document).ready(function(){

  /*
   * Script unicamente para la aplicación web Script-banner-test
   * En esta aplicación se pretende pedir al usuario el script del banner para después visualizarlo y pueda comprobar
   * que funciona el banner correctamente y en el caso de que quiera tomar una impresión de pantalla.
   */
  $("#demo").on("click", function(){

     // demo btn
     $('#display-area').html('');
     postscribe('#display-area', '<img class="img-responsive" src="/recursos/banners/displayads/aaa/c-amplificacion/300x600.png"/>');

     setLocation($("#display-area"));

  });
  $("#test").on("click", function(){

    // Test btn
    $('#display-area').html('');
    var getTextArea = $("#text-area").val();
    postscribe('#display-area', getTextArea);

    setLocation($("#display-area"));

  });

  $("#vast-demo").on("click", function(){

    // demo btn
    $('#text-area-vast').val("http://leads.cerebro.agency/VPAID/cerebro-VPAID.xml");
    var vastUrl = $('#text-area-vast').val();
    $.ajax({
      method: "POST",
      url: "text-area-vast.php",
      data: { vastUrl: vastUrl }
    }).done(function( msg ) {
      $('#display-video-area').html('');
      var videoScript = "<video controls autoplay><source class='embed-responsive-item' src='" + msg + "' type='video/mp4'/></video>"
      postscribe('#display-video-area', videoScript);
    });
    setLocation($("#display-video-area"));

  });

  $("#vast").on("click", function(){

    // demo btn
    var vastUrl = $('#text-area-vast').val();
    $.ajax({
      method: "POST",
      url: "text-area-vast.php",
      data: { vastUrl: vastUrl }
    }).done(function( msg ) {
      $('#display-video-area').html('');
      var videoScript = "<video controls autoplay><source class='embed-responsive-item' src='" + msg + "' type='video/mp4'/></video>"
      postscribe('#display-video-area', videoScript);
    });
    setLocation($("#display-video-area"));

  });

  $("#form-zip").submit(function(e){
    /*
    e.preventDefault();
    $.ajax({
      url: "upload-banner.php",
      type: "POST",
      //dataType: "JSON",
      data: new FormData($("#form-zip")[0]),
      processData: false,
      contentType: false,
      success: function (data, status)
      {
        console.log("Data: " + data + " Status: " + status);
        if(data == 1){
          window.location.href = 'verify-html.php'; //Will take you to Google.
        }
      },
      error: function (xhr, desc, err)
      {
        console.log("Error en el envio, XHR: " + xhr + " DESC: " + desc + " ERR:" + err);
      }
    });*/

  });

  /*
   * Init Highlighter Code plugin
   */
  if($("pre code").length){
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  /*
   * Visualizer implementation for ad into website insertion
   */
  $("a.visualizar").on("click", function(e){
    e.preventDefault();
    var site = $("#url-site-web").val();
    if(site != null || site != ""){
      var href = $(this).attr("href");
      $("#link-site-web").val(href);
      $("#vis-form").submit();
    }else{
      $("#link-site-web").val("http%3A%2F%2Ftools.cerebro.agency%2Fsitios-web-red-de-display%2Fads.html");
      $("#vis-form").submit();
    }
  });

});


function loadingToogle(){
  setTimeout(function(){
    $(".loading").toggleClass("hidden");
  }, 500);
}

function setLocation(tgt){
  var target = tgt;
  var scrollAnimationTime = 1200,
       scrollAnimation = 'swing';
   $('html, body').stop().animate({
       'scrollTop': $(target).offset().top
   }, scrollAnimationTime, scrollAnimation, function () {
       //window.location.hash = target;
   });
}
