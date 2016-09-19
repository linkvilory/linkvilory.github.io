<?php

$id = $_GET["id"];
$platform = $_GET["platform"];
$platform = explode(",",$platform);

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

	<header>

		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Cambiar navegación</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="/">@linkvilory</a>
				</div>

				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<!--<li class="active"><a href="#">INICIO</a></li>-->
					</ul>

					<span class="navbar-right actualizacion">Última actualización 19 de Septiembre de 2016</span>
				</div>
			</div>
		</nav>

	</header>

	<section>

		<div class="container">

			<div class="row">

				<div class="col-md-12">

					<h1>Visualizador de banners</h1>
					<p id="title-banner"></p>
					<p id="description-banner"></p>

				</div>

			</div>

			<div class="row">

				<div class="col-md-12">

					<div class="row">

						<?php
							if(in_array("Desktop", $platform)){
						?>
						<div class="hidden-xs hidden-sm hidden-md icon-responsive col-xs-4">
							<span id="desktop" class="fa-stack fa-3x active">
								<i class="fa fa-circle fa-stack-2x"></i>
								<i class="fa fa-desktop fa-stack-1x fa-inverse"></i>
							</span>
						</div>
						<?php
							}
						?>

						<?php
							if(in_array("Tablet", $platform)){
						?>
						<div class="hidden-xs hidden-sm hidden-md icon-responsive col-xs-4">
							<span id="tablet" class="fa-stack fa-3x">
								<i class="fa fa-circle fa-stack-2x"></i>
								<i class="fa fa-tablet fa-stack-1x fa-inverse"></i>
							</span>
						</div>
						<?php
							}
						?>

						<?php
							if(in_array("Mobile", $platform)){
						?>
						<div class="hidden-xs hidden-sm hidden-md icon-responsive col-xs-4">
							<span id="mobile" class="fa-stack fa-3x">
								<i class="fa fa-circle fa-stack-2x"></i>
								<i class="fa fa-mobile fa-stack-1x fa-inverse"></i>
							</span>
						</div>
						<?php
							}
						?>

					</div>

				</div>

			</div>

			<div class="row desktop-bg">

				<div class="clearfix divider double"></div>

				<div class="col-sm-7 col-md-8">

					<div class="row">

						<div class="col-sm-12 col-md-5">
							<div class="img-dummy x-lg"></div>
							<div class="img-dummy x-xs"></div>
							<div class="img-dummy x-xs"></div>
							<div class="img-dummy x-xs"></div>
						</div>

						<div class="col-sm-12 col-md-7">
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
							<div class="p-dummy">
								<div class="txt-dummy full"></div>
								<div class="txt-dummy full"></div>
								<div class="txt-dummy full"></div>
								<div class="txt-dummy small"></div>
							</div>

						</div>

					</div>

					<div class="row hidden-xs">

						<div class="col-sm-6 col-md-4">

							<div class="clearfix divider"></div>

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

						<div class="col-sm-6 col-md-4">

							<div class="clearfix divider"></div>

							<div class="img-dummy y-md"></div>

							<div class="img-dummy y-sm"></div>

							<div class="clearfix divider"></div>

							<div class="img-dummy y-md"></div>

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

						</div>

						<div class="col-sm-6 col-md-4">

							<div class="clearfix divider"></div>

							<div class="img-dummy y-md"></div>

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

						</div>

					</div>

				</div>

				<div class="col-sm-5 col-md-4">

					<div id="banner-desktop-size" class="">
						<iframe id="banner-desktop-iframe" src="" frameborder="0" scrolling="no" ></iframe>
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

			<div class="row">

				<div class="tablet-bg hidden">

						<iframe width="768px" height="914px" src="ipad.php?id=<?php echo $id; ?>" frameborder="0" scrolling="no" ></iframe>

				</div>

			</div>

			<div class="row">

				<div class="mobile-bg hidden">

						<iframe width="320px" height="435px" src="iphone.php?id=<?php echo $id; ?>" frameborder="0" scrolling="no" ></iframe>

				</div>

			</div>

		</div>

	</section>

	<footer>

		<div class="container">

			<div class="row">

				<div class="col-md-4">

					<h6 class="footer">Redes Sociales</h6>

					<ul class="social-network">
						<li><a href="https://twitter.com/linkvilory" target="_blank"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
						<li><a href="https://www.facebook.com/linkvilory" target="_blank"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
						<li><a href="https://mx.linkedin.com/in/jonathanviloria" target="_blank"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
						<li><a href="https://es.pinterest.com/linkvilory/" target="_blank"><i class="fa fa-pinterest-p fa-2x" aria-hidden="true"></i></a></li>

					</ul>

				</div>

				<div class="col-md-4">

					<h6 class="footer">Sitios de Interés</h6>

					<ul class="websites">
						<li><a href="https://www.packtpub.com/" target="_blank">Packt Publishing</a></li>
						<li><a href="https://teamtreehouse.com/" target="_blank">Team Three House</a></li>
						<li><a href="https://developertea.com" target="_blank">Developer Tea</a></li>
						<li><a href="http://www.codecademy.com/" target="_blank">Codecademy</a></li>

					</ul>

				</div>

				<div class="col-md-4">

					<h6 class="footer">Contacto</h6>

					<p>Si deseas más información de los proyectos o requieres de mis servicios en TI contactame en mi correo <a href="mailto:linkvilory@hotmail.com">linkvilory@hotmail.com</a>. Espero poder tener contacto contigo.</p>

				</div>

			</div>

		</div>

	</footer>

	<!-- End Bootstrap Template -->

	<!-- Javascript -->
	<script type="text/javascript" src="recursos/js/jquery-1.11.2.js"></script>
	<script type="text/javascript" src="recursos/js/bootstrap.js"></script>
	<script type="text/javascript" src="recursos/js/mobile-detect.js"></script>
	<script type="text/javascript" src="recursos/js/banners.js"></script>
	<script type="text/javascript" src="recursos/js/visualizador.js"></script>

</body>
<html>
