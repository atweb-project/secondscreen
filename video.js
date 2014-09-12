/**
 * Video Player call
 */

 $(function() {

	var AutoPlay = $(window.frameElement).attr('autostart');
	var allowPlay = $(window.frameElement).attr('paramplay');
	var allowFullScreen = $(window.frameElement).attr('videofullscreen');
	var StartVolume = $(window.frameElement).attr('volume');
	var LOOP = $(window.frameElement).attr('allowloop');
	var URL = $(window.frameElement).attr('url');
	var URLIE = $(window.frameElement).attr('urlie');
	var URLOGG = $(window.frameElement).attr('urlogg');
	var PosTer = $(window.frameElement).attr('poster');
	
	//alert(LOOP)
	
	//alert(URLOGG)
	// var typeOfFile = URL

	//var extension = typeOfFile.split('.').pop();
	//alert(extension)

	if (URL != null && URLIE != null && URLOGG != null) {
		// MP4 source must come first for iOS 
		// MP4 for Safari, IE9, iPhone, iPad, Android, and Windows Phone 7 
		$('video').append('<source type="video/mp4" src="' + URL + '" />')
		
		//WebM/VP8 for Firefox4, Opera, and Chrome 
		$('video').append('<source type="video/webm" src="' + URLIE + '" />')
		
		//Ogg/Vorbis for older Firefox and Opera versions
		$('video').append('<source type="video/ogg" src="' + URLOGG + '" />')

		//Fallback flash player for no-HTML5 browsers with JavaScript turned off
		$('video').append('<object width="640" height="360" type="application/x-shockwave-flash" data="flashmediaelement.swf">'
								+ '<param name="movie" value="flashmediaelement.swf" />'
								+ '<param name="flashvars" value="controls=true&amp;file='+ URL	+ '" />'
								+ '<!-- Image fall back for non-HTML5 browser with JavaScript turned off and no Flash player installed -->'
								+ '<img src="'+PosTer+'" width="640" height="360" alt="Here we are" title="No video playback capabilities" />'
								+ '</object>')
	}
	
	$('video').attr('poster',PosTer)

	//alert(StartVolume)

	function AutoPlayValue() {

		if (AutoPlay == 'false') {

			Start = false

		} else {

			Start = true

			if ((Start == true) && allowPlay == 0) {

				$('video').prop('autoplay', false)

			} else {

				$('video').prop('autoplay', true)
			}
		}
	}
	

	function AllowFullscreen() {

		if (allowFullScreen == 'true')
			return 'fullscreen'

		return ''
	}
	

	function AllowLoop() {

		if (LOOP == 'true'){
		//	alert(LOOP)
			return true
		}
		//alert(LOOP)
		return false
	}

	AutoPlayValue()

	$('video').mediaelementplayer(
					{/* Options */
						features : [ 'playpause', 'progress', 'current', 'duration', 'tracks', 'volume', AllowFullscreen(), 'sourcechooser' ],
						startVolume : StartVolume,
						loop : AllowLoop()

	});

});