<!DOCTYPE html>
<!--[if lte IE 9]><html class="lte-ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en"> <!--<![endif]-->
<head>
    <title>videojs-vast-vpaid plugin</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">

    <!-- VideoJs required styles-->
    <link rel="stylesheet" type="text/css" href="video-js.css"/>

    <!-- VideoJs.vast.vpaid required styles-->
    <link rel="stylesheet" type="text/css" href="videojs.vast.vpaid.css"/>

    <!-- DEMO required styles-->
    <link rel="stylesheet" type="text/css" href="demo.css"/>

    <!-- Web Fonts -->
    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">


    <script type="text/javascript">
        // this is mandatory for IE8 !!!!!
        document.createElement('video');
        document.createElement('audio');
        document.createElement('track');
    </script>

    <!-- VideoJs required scripts-->
    <script type="text/javascript" src="video.js"></script>

    <!-- VideoJs.vast.vpaid required scripts-->
    <script type="text/javascript" src="es5-shim.js"></script>
    <script type="text/javascript" src="ie8fix.js"></script>
    <script type="text/javascript" src="videojs_4.vast.vpaid.js"></script>

    <!-- DEMO required scripts -->
    <script type="text/javascript" src="demo.js"></script>

</head>
<body>
    <div class="container">
        <div class="row">
            <div class="twelve columns">
                <div class="vast-container">
                    <form id="vast-vpaid-form">
                        <div class="row">
                            <div class="hidden one-third column">
                                <input type="radio" name="vast-type" class="tag-type-radio" id="vast-tag-radio">
                                <label for="vast-tag-radio">VAST/VPAID tag</label>
                            </div>
                            <div class="hidden one-third column">
                                <input type="radio" name="vast-type" class="xml-type-radio" checked="checked" id="vast-sample-radio">
                                <label for="vast-sample-radio">VAST/VPAID sample tags</label>
                            </div>
                            <div class="hidden one-third column">
                                <input type="radio" name="vast-type" class="custom-type-radio" id="vast-custom-radio">
                                <label for="vast-custom-radio">VAST/VPAID custom XML</label>
                            </div>
                        </div>
                        <div class="hidden row tag-type">
                            <div class="twelve columns">
                                <label for="vast-tag">VAST Tag</label>
                                <input id="vast-tag" type="text" name="vast-type" class="u-full-width tag-el">
                            </div>
                        </div>
                        <div class="hidden row xml-type">
                            <div class="twelve columns">
                                <label for="vast-samples">VAST/VPAID sample tags</label>
                                <select id="vast-samples" class="u-full-width xml-el">

                                    <option selected="selected" value="http://servedby.flashtalking.com/imp/1/31714;812030;208;xml;DailyMail;640x360VASTHTML5/?cachebuster=%%CACHEBUSTER%%">VAST flashtalking Preroll Linear</option>

                                    <option  value="http://search.spotxchange.com/vast/2.00/79391?VPAID=1&content_page_url=test.com&cb=3202405928168446&player_width=300&player_height=250">VPAID Flash spotX Preroll Test Tag</option>

                                    <option  value="http://vast.bp3863356.btrll.com/vast/3863356?n=1426410433&br_w=300&br_h=250&br_pageurl=blah">VPAID Flash Brightroll Preroll test tag</option>

                                    <option  value="https://ad3.liverail.com/?LR_PUBLISHER_ID=1331&LR_CAMPAIGN_ID=229&LR_SCHEMA=vast2-vpaid">VPAID Flash LiveRail Preroll test tag</option>

                                    <option  value="http://cdn-tags.brainient.com/1228/cba8794a-38a5-448b-ad31-e3f6169645c1/vast.xml?platform=vpaid&v=v6&proto=http">VPAID Flash Brainient Preroll Linear Expand</option>

                                    <option  value="http://cdn-tags.brainient.com/1228/34f8e4e6-e83c-46da-8bf6-a37ae9ed5134/vast.xml?platform=vpaid&v=v6&proto=http">VPAID Flash Brainient Preroll Linear Button</option>

                                    <option  value="http://asv.tubemogul.com/vast/CK6HN2uZ3ULMo7rOR4rE?ad_id=eVQayxudgvnI1TJGXf5X">VPAID Flash Tubemogul Preroll Linear</option>

                                    <option  value="http://rtr.innovid.com/r1.5554946ab01d97.36996823;cb=%25%CACHEBUSTER%25%25">VPAID Html5 Innovid test tag</option>

                                </select>
                            </div>
                        </div>
                        <div class="hidden row custom-type">
                            <div class="twelve columns">
                                <textarea class="u-full-width custom-el" placeholder="Sample VAST XMl"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="twelve columns">
                                <a class="hidden button button-primary" href="#">Update</a>
                                <a class="button button-info pause" style="display:none;" href="#">Pausar Ad</a>
                                <a class="button button-info resume" style="display:none;" href="#">Resumir Ad</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="twelve columns">
                                <div class="vjs-video-container">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
