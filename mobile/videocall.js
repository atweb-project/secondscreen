/**
 * Created by Dimitris
 */
$(function () {
    $('video').mediaelementplayer(
        {
            /* Options */
            timerRate: 10,
            features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume', 'fullscreen']

        });

    $('<div class="mejs-button mejs-volume-button mejs-mute">' +
    '<button aria-label="Mute Toggle" title="Mute Toggle" aria-controls="mep_0" type="button"></button>' +
    '<div class="mejs-volume-slider" style="display: none;">' +
    '<div class="mejs-volume-total"></div>' +
    '<div class="mejs-volume-current" style="height: 80px; top: 28px;"></div>' +
    '<div class="mejs-volume-handle" style="top: 25px;"></div></div></div>').insertAfter('.mejs-time');
    $('.mejs-volume-button').on({
        mouseenter: function () {
            $('.mejs-volume-slider').css('display', 'block');
        }, mouseleave: function () {
            $('.mejs-volume-slider').css('display', 'none');
        }
    });
});