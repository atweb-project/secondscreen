<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head lang="en">
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>Sockets test!</title>
<link rel="stylesheet" type="text/css" media="screen" href="site.css" />
<link rel="stylesheet" type="text/css" href="embedded-player/mediaelementplayer.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="embedded-player/mediaelement-and-player.min.js" type="text/javascript"></script>
<script type="text/javascript" src="desktop.js"></script>
<script type="text/javascript">
$(function() {
	$('video').mediaelementplayer(
		{/* Options */
			timerRate: 10,
			AndroidUseNativeControls: true,
			features : [ 'playpause','progress','current','duration','tracks','volume','fullscreen' ],
	
	});
});
</script>
</head>

<body id="desktop">
	<div class="videocontent" style="margin-left: auto;margin-right: auto;margin-top: 50px;text-align: center;width: 50%;">
			<video style="width: 50%; height: 50%;" controls="controls" width="100%" height="100%" preload="none" poster="embedded-player/media/echo-hereweare.jpg"> 
				<source type="video/mp4" src="embedded-player/media/echo-hereweare.mp4" /> 
				<source type="video/webm" src="embedded-player/media/echo-hereweare.webm" />
				<source type="video/ogg" src="embedded-player/media/echo-hereweare.ogv" /> 
				<object width="640" height="360" type="application/x-shockwave-flash" data="embedded-player/flashmediaelement.swf">
				<param name="movie" value="flashmediaelement.swf" />
				<param name="flashvars" value="controls=true&amp;file=embedded-player/media/echo-hereweare.mp4" />
				<!-- Image fall back for non-HTML5 browser with JavaScript turned off and no Flash player installed -->
				<img src="embedded-player/media/echo-hereweare.jpg" width="640" height="360" alt="Here we are" title="No video playback capabilities" />
				</object> 
			</video>
	</div>
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
		<p>
			Visit <span>http://<?php print $_SERVER['HTTP_HOST']; ?>/workspace/secondscreen/mobile.php?id=%id</span>
			on your mobile device for a second screen experience, or use the
			following QR code: <img
				src="https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2F<?php print $_SERVER['HTTP_HOST']; ?>/workspace/secondscreen%2Fmobile.php%3Fid%3D%id&choe=UTF-8&chs=150x150" />
		</p>
		<a id="close" href="#">X</a>
	</div>

	<div id="status-message">
		<p>THIS IS A STATUS MESSAGE</p>
	</div>

</body>
</html>
