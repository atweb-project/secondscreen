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
  <script type="text/javascript" src="mobile/mobile.js"></script>
  <script type="text/javascript" src="mobile/videocall.js"></script>
</head>
<body id="mobile">
<div class="videocontent" style="margin-left: auto;margin-right: auto;margin-top: 50px;text-align: center;width: 50%;">
    <video id="player" style="" controls="controls" width="640" height="360" preload="none"
           poster="embedded-player/media/echo-hereweare.jpg">
        <source type="video/mp4" src="embedded-player/media/echo-hereweare.mp4"/>
        <source type="video/webm" src="embedded-player/media/echo-hereweare.webm"/>
        <source type="video/ogg" src="embedded-player/media/echo-hereweare.ogv"/>
        <object width="640" height="360" type="application/x-shockwave-flash"
                data="embedded-player/flashmediaelement.swf">
            <param name="movie" value="flashmediaelement.swf"/>
            <param name="flashvars" value="controls=true&amp;file=embedded-player/media/echo-hereweare.mp4"/>
            <!-- Image fall back for non-HTML5 browser with JavaScript turned off and no Flash player installed -->
            <img src="embedded-player/media/echo-hereweare.jpg" width="640" height="360" alt="Here we are"
                 title="No video playback capabilities"/>
        </object>
    </video>
</div>
<span id="events" style="display: none;"></span>
<span id="current-time" style="display: none;"></span>
</body>
</html>
