<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">
    <title>Sockets test!</title>
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" media="screen" href="site.css"/>
    <link rel="stylesheet" type="text/css" href="embedded-player/mediaelementplayer.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="embedded-player/mediaelement-and-player.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="desktop/desktop.js"></script>
    <script type="text/javascript" src="desktop/videocall.js"></script>
</head>
<body id="desktop">
<div class="container">
    <div class="row">
        <div id="unique-url" class="col-md-4 alert alert-info alert-dismissable" role="alert">
            <p>
                Visit: <span>http://<?php print $_SERVER['HTTP_HOST']; ?>/workspace/secondscreen/mobile.php?id=%id</span>
                on your mobile device for a second screen experience, or use the
                following QR code:
                <img
                    src="https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2F<?php print $_SERVER['HTTP_HOST']; ?>/workspace/secondscreen%2Fmobile.php%3Fid%3D%id&choe=UTF-8&chs=150x150"/>

            </p>
            <a id="close" class="close" data-dismiss="alert" href="#">X</a>
        </div>
        <div class="col-md-8">
            <div class="videocontent" style="margin-left: auto;margin-right: auto;margin-top: 50px;text-align: center;">
                <video controls="controls" width="100%" height="100%" preload="none"
                       poster="embedded-player/media/echo-hereweare.jpg">
                    <source type="video/mp4" src="embedded-player/media/echo-hereweare.mp4"/>
                    <source type="video/webm" src="embedded-player/media/echo-hereweare.webm"/>
                    <source type="video/ogg" src="embedded-player/media/echo-hereweare.ogv"/>
                    <object width="640" height="360" type="application/x-shockwave-flash"
                            data="embedded-player/flashmediaelement.swf">
                        <param name="movie" value="flashmediaelement.swf"/>
                        <param name="flashvars"
                               value="controls=true&amp;file=embedded-player/media/echo-hereweare.mp4"/>
                        <!-- Image fall back for non-HTML5 browser with JavaScript turned off and no Flash player installed -->
                        <img src="embedded-player/media/echo-hereweare.jpg" width="640" height="360" alt="Here we are"
                             title="No video playback capabilities"/>
                    </object>
                </video>
            </div>
        </div>
    </div>

    <div id="status-message">
        <p>THIS IS A STATUS MESSAGE</p>
    </div>
</div>
</body>
</html>
