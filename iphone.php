<?php

$id = $_GET["id"];

?>
<!DOCTYPE html>
<html lang="es">
<head>

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Description -->
	<title>Galería de Jonathan</title>
	<meta content="" name="description">
  <meta content="" name="keywords">

	<!-- Social -->

	<!-- Facebook -->
	<meta property="og:url" content="" />
  <meta property="og:title" content="" />
  <meta property="og:description" content="" />
  <meta property="og:site_name" content="" />
  <meta property="og:image" content="" />

	<!-- Twitter -->
	<meta content="summary_large_image" name="twitter:card">
  <meta content="" name="twitter:title">
  <meta content="" name="twitter:description">
  <meta content="@" name="twitter:site">
  <meta content="@" name="twitter:creator">
  <meta content="" name="twitter:domain">
  <meta content="" name="twitter:image:src">

	<!-- Stylesheets -->
	<link type="text/css" rel="stylesheet" href="recursos/css/font-awesome.css"/>
	<link type="text/css" rel="stylesheet" href="recursos/css/bootstrap.css"/>
	<link type="text/css" rel="stylesheet" href="recursos/css/animate.css"/>
	<link type="text/css" rel="stylesheet" href="recursos/css/main.css"/>

	<!-- Stylesheets for older browsers -->
	<!-- IE6/7 micro clearfix -->
	<!--[if lte IE 7]>
		<style>
			.grouping {
				*zoom: 1;
			}
		</style>
	<![endif]-->
	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<!-- Javascript -->

	<!-- Inline javascript to determine the id of the banner and specifications -->
	<script type="text/javascript">

		var actualBannerID = "<?php echo $id; ?>";

	</script>

</head>
<body>

	<section>

		<div class="container">

			<div class="row">

				<div class="col-sm-7 col-md-8">

					<div class="row">

						<div class="col-sm-6 col-md-4">

							<div class="clearfix divider"></div>

							<div class="p-dummy">
								<div class="txt-dummy full"></div>
								<div class="txt-dummy full"></div>
								<div class="txt-dummy full"></div>
								<div class="txt-dummy small"></div>
							</div>

						</div>

						<div class="col-sm-6 col-md-4">

							<div class="clearfix divider"></div>

						</div>

					</div>

				</div>

				<div class="col-sm-5 col-md-4">

					<div id="banner-mobile-size" class="">
						<iframe id="banner-mobile-iframe" src="" frameborder="0" scrolling="no" ></iframe>
					</div>

					<div class="p-dummy">
						<div class="txt-dummy full"></div>
						<div class="txt-dummy full"></div>
						<div class="txt-dummy full"></div>
						<div class="txt-dummy small"></div>
					</div>

					<div class="p-dummy">
						<div class="txt-dummy full"></div>
						<div class="txt-dummy full"></div>
						<div class="txt-dummy full"></div>
						<div class="txt-dummy small"></div>
					</div>

					<div class="clearfix divider"></div>

					<div class="img-dummy y-md"></div>

					<div class="img-dummy y-sm"></div>

				</div>

			</div>

		</div>

	</section>

	<!-- End Bootstrap Template -->

	<!-- Javascript -->
	<script type="text/javascript" src="recursos/js/jquery-1.11.2.js"></script>
	<script type="text/javascript" src="recursos/js/bootstrap.js"></script>
	<script type="text/javascript" src="recursos/js/mobile-detect.js"></script>
	<script type="text/javascript" src="recursos/js/banners.js"></script>
	<script type="text/javascript" src="recursos/js/visualizador.js"></script>

</body>
<html>
