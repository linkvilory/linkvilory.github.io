$(document).ready(function(){

  /*
   * Global variables
   */

  var isMobile = false;
  var isTablet = false;

  /*
   * Función para cambiar el tipo de Template, esta función solo es para escritorio
   */
  $(".icon-responsive span").on("click", function(){

    var $this = this;
    $(".icon-responsive span").each(function(){
      $(this).removeClass("active");
    });

    $($this).addClass("active");
    $(".desktop-bg, .tablet-bg, .mobile-bg").addClass("hidden");
    var id = $($this).attr("id");
    switch(id){
      case 'desktop':
        $(".desktop-bg").removeClass("hidden");
      break;
      case 'tablet':
        $(".tablet-bg").removeClass("hidden");
      break;
      case 'mobile':
        $(".mobile-bg").removeClass("hidden");
      break;
    }

  });

  /*
   * Detect if mobile / Tablet or Desktop via Mobile detect plugin
   * This is for custom iframe banner to specific dimensions
   */
  var md = new MobileDetect(window.navigator.userAgent);

  if(md.mobile()){

    // isMobile

  }else if(md.tablet()){

    // isTablet

  }else{

    // isDesktop

  }

  /*
   * Set banner options on the fly
   */
  if($("#banner-desktop-size").length){
    for(banner in banners){

      var searchBannerID = banners[banner]['id'];
      if(searchBannerID == actualBannerID){
        $("#banner-desktop-size").attr("class", banners[banner]['size']);
        $("#banner-desktop-iframe").attr("src", banners[banner]['source']);
        $("#title-banner").html(banners[banner]['title']);
        $("#description-banner").html(banners[banner]['description']);
      }

    }

  }
  /*
   * Set banner options on the fly
   */
  if($("#banner-tablet-size").length){
    for(banner in banners){

      var searchBannerID = banners[banner]['id'];
      if(searchBannerID == actualBannerID){
        $("#banner-tablet-size").attr("class", banners[banner]['size']);
        $("#banner-tablet-iframe").attr("src", banners[banner]['source']);
      }

    }
  }
  /*
   * Set banner options on the fly
   */
  if($("#banner-mobile-size").length){
    for(banner in banners){

      var searchBannerID = banners[banner]['id'];
      if(searchBannerID == actualBannerID){
        $("#banner-mobile-size").attr("class", banners[banner]['size']);
        $("#banner-mobile-iframe").attr("src", banners[banner]['source']);
      }

    }
  }

});
