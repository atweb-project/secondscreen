/**
 * Created by Dimitris.
 */
$(function () {
    $('video').mediaelementplayer(
        {
            /* Options */
            timerRate: 10,
            //AndroidUseNativeControls: true,
            features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume', 'fullscreen']

        });

});