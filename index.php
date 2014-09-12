<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head lang="en">
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Sockets test!</title>
	<link rel="stylesheet" type="text/css" media="screen" href="site.css" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script type="text/javascript" src="desktop.js"></script>
</head>

<body id="desktop">

	<div class="page" id="page-1">
		<p>Page 1</p>
	</div>

	<div class="page" id="page-2">
		<p>Page 2</p>
	</div>

	<div class="page" id="page-3">
		<p>Page 3</p>
	</div>

	<div id="unique-url">
		<p>Visit <span>http://<?php print $_SERVER['HTTP_HOST']; ?>/workspace/secondscreen/mobile.php?id=%id</span> on your mobile device for a second screen experience, or use the following QR code: <img src="https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2F<?php print $_SERVER['HTTP_HOST']; ?>/workspace/secondscreen%2Fmobile.php%3Fid%3D%id&choe=UTF-8&chs=150x150" /></p>
		<a id="close" href="#">X</a>
	</div>

	<div id="status-message">
		<p>THIS IS A STATUS MESSAGE</p>
	</div>

</body>
</html>
