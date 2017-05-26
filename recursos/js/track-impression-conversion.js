var conversionLines = [];
var conversionLinesClean = [];

var option = "";

$(document).ready(function(){

  /*
   * DEMO Conversión trackings submit
   */
  $("#demo-conversion").on("click", function(){
    loadingToogle();
    $('#display-area-conversion').html('');
    option = $("input[name=formato]:checked").attr("data-formato");
    var demoTrackings = "https://google.com.mx\nhttps://facebook.com\nhttps://youtube.com";
    var getConversionLine = demoTrackings.split(/\n/);
    $("#text-area-conversion").val(demoTrackings);
    conversionLines = [];
    conversionLinesClean = [];
    conversionLines.push("<tr><td>Formato IMG</td><td>Formato IFRAME</td><td>Formato SCRIPT</td></tr>");
    for (var i = 0; i < getConversionLine.length; i++) {
      if (/\S/.test(getConversionLine[i])) {
        trackGenerateContent(getConversionLine[i], option);
        trackGenerateContent(getConversionLine[i], option, "clean", "");
      }
    }
    postscribe('#display-area-conversion', conversionLines.join(''));

    /*
     * Generate TXT script via ajax
     */
     $.ajax({
       method: "POST",
       url: "generate-tracking.php",
       data: { conversion: JSON.stringify(conversionLinesClean) }
     }).done(function( msg ) {
       $("#tracking-files").html("<li><a target='_blank' href='"+msg+"' download>Descarga los Trackings en formato TXT</a></li>");
       loadingToogle();
    });

    setLocation($("#display-area-conversion"));
  });

  /*
   * Conversión trackings submit
   */
  $("#conversion").on("click", function(){
    loadingToogle();
    $('#display-area-conversion').html('');
    option = $("input[name=formato]:checked").attr("data-formato");
    var getConversionLine = $('#text-area-conversion').val().split(/\n/);
    conversionLines = [];
    conversionLinesClean = [];
    conversionLines.push("<tr><td>Formato IMG</td><td>Formato IFRAME</td><td>Formato SCRIPT</td></tr>");
    for (var i = 0; i < getConversionLine.length; i++) {
      if (/\S/.test(getConversionLine[i])) {
        trackGenerateContent(getConversionLine[i], option);
        trackGenerateContent(getConversionLine[i], option, "clean", "");
      }
    }
    postscribe('#display-area-conversion', conversionLines.join(''));

    /*
     * Generate TXT script via ajax
     */
     $.ajax({
       method: "POST",
       url: "generate-tracking.php",
       data: { conversion: JSON.stringify(conversionLinesClean) }
     }).done(function( msg ) {
       $("#tracking-files").html("<li><a target='_blank' href='"+msg+"' download>Descarga los Trackings en formato TXT</a></li>");
       loadingToogle();
    });

    setLocation($("#display-area-conversion"));

  });

  function trackGenerateContent(url, format = 'all', coded = 'table', comments = "code-break"){

    var imgConversion = iframeConversion = scriptConversion = "";

    switch(format){
      case 'all':
        if(comments == "code-break"){
          /*
           * Conversion in IMG format
           */
          imgConversion = "<pre><code>&lt;!-- BEGIN IMG TAG TRACKING CODE --&gt;\n";
          imgConversion += "&lt;img src='" + url + "' border='0' height='1' width='1' alt='Advertisement' /&gt;\n";
          imgConversion += "&lt;!-- END IMG TAG TRACKING CODE --&gt;</code></pre>";
          /*
           * Conversion in IFRAME format
           */
          iframeConversion = "<pre><code>&lt;!-- BEGIN IFRAME TAG TRACKING CODE --&gt;\n";
          iframeConversion += "&lt;iframe src='" + url + "' width='1' height='1' marginwidth='0' marginheight='0' hspace='0' vspace='0' frameborder='0' scrolling='no' bordercoor='#000000'&gt;&lt;/iframe&gt;\n";
          iframeConversion += "&lt;!-- BEGIN IFRAME TAG TRACKING CODE --&gt;</code></pre>";
          /*
           * Conversion in SCRIPT format
           */
          scriptConversion = "<pre><code>&lt;!-- BEGIN SCRIPT TAG TRACKING CODE --&gt;\n";
          scriptConversion += "&lt;script language='JavaScript1.1' src='" + url + "'&gt;&lt;/script&gt;\n";
          scriptConversion += "&lt;!-- BEGIN SCRIPT TAG TRACKING CODE --&gt;</code></pre>";
        }else if(comments == "code"){
          imgConversion = "<pre><code>&lt;img src='" + url + "' border='0' height='1' width='1' alt='Advertisement' /&gt;</code></pre>";
          iframeConversion = "<pre><code>&lt;iframe src='" + url + "' width='1' height='1' marginwidth='0' marginheight='0' hspace='0' vspace='0' frameborder='0' scrolling='no' bordercoor='#000000'&gt;&lt;/iframe&gt;</code></pre>";
          scriptConversion = "<pre><code>&lt;script language='JavaScript1.1' src='" + url + "'&gt;&lt;/script&gt;</code></pre>";
        }else{
          imgConversion = "<!-- Tracking "+ url + " -->\n<img src='" + url + "' border='0' height='1' width='1' alt='Advertisement' />\n";
          iframeConversion = "<iframe src='" + url + "' width='1' height='1' marginwidth='0' marginheight='0' hspace='0' vspace='0' frameborder='0' scrolling='no' bordercoor='#000000'</iframe>\n";
          scriptConversion = "<script language='JavaScript1.1' src='" + url + "'</script>\n";
        }
      break;
      case 'img':
        if(comments == "code-break"){
          /*
           * Conversion in IMG format
           */
          imgConversion = "<pre><code>&lt;!-- BEGIN IMG TAG TRACKING CODE --&gt;\n";
          imgConversion += "&lt;img src='" + url + "' border='0' height='1' width='1' alt='Advertisement' /&gt;\n";
          imgConversion += "&lt;!-- END IMG TAG TRACKING CODE --&gt;</code></pre>";

        }else if(comments == "code"){
          imgConversion = "<pre><code>&lt;img src='" + url + "' border='0' height='1' width='1' alt='Advertisement' /&gt;</code></pre>";
        }else{
          imgConversion = "<!-- Tracking "+ url + " -->\n<img src='" + url + "' border='0' height='1' width='1' alt='Advertisement' />\n";
        }
      break;
      case 'iframe':
        if(comments == "code-break"){
          /*
           * Conversion in IFRAME format
           */
          iframeConversion = "<pre><code>&lt;!-- BEGIN IFRAME TAG TRACKING CODE --&gt;\n";
          iframeConversion += "&lt;iframe src='" + url + "' width='1' height='1' marginwidth='0' marginheight='0' hspace='0' vspace='0' frameborder='0' scrolling='no' bordercoor='#000000'&gt;&lt;/iframe&gt;\n";
          iframeConversion += "&lt;!-- BEGIN IFRAME TAG TRACKING CODE --&gt;</code></pre>";
        }else if(comments == "code"){
          iframeConversion = "<pre><code>&lt;iframe src='" + url + "' width='1' height='1' marginwidth='0' marginheight='0' hspace='0' vspace='0' frameborder='0' scrolling='no' bordercoor='#000000'&gt;&lt;/iframe&gt;</code></pre>";
        }else{
          iframeConversion = "<!-- Tracking "+ url + " -->\n<iframe src='" + url + "' width='1' height='1' marginwidth='0' marginheight='0' hspace='0' vspace='0' frameborder='0' scrolling='no' bordercoor='#000000'</iframe>\n";
        }
      break;
      case 'javascript':
        if(comments == "code-break"){
          /*
           * Conversion in SCRIPT format
           */
          scriptConversion = "<pre><code>&lt;!-- BEGIN SCRIPT TAG TRACKING CODE --&gt;\n";
          scriptConversion += "&lt;script language='JavaScript1.1' src='" + url + "'&gt;&lt;/script&gt;\n";
          scriptConversion += "&lt;!-- BEGIN SCRIPT TAG TRACKING CODE --&gt;</code></pre>";
        }else if(comments == "code"){
          scriptConversion = "<pre><code>&lt;script language='JavaScript1.1' src='" + url + "'&gt;&lt;/script&gt;</code></pre>";
        }else{
          scriptConversion = "<!-- Tracking "+ url + " -->\n<script language='JavaScript1.1' src='" + url + "'</script>\n";
        }
      break;
    }
    /*
     * Push in array
     */
    if(coded == "table"){
      conversionLines.push("<tr><td>" + imgConversion + "</td><td>" + iframeConversion + "</td><td>" + scriptConversion + "</td></tr>");
    }else{
      conversionLinesClean.push(imgConversion + iframeConversion + scriptConversion);
    }

    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

});
