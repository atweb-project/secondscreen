/**
 * @file
 * JS for desktop devices.
 *
 */

/*global jQuery, window, WebSocket */

/**
 * On document ready.
 */
jQuery(document).ready(function ($) {

  // Get the domain.
  var host = window.location.hostname;

  // Create a websocket object. TODO: Make it work in IE.
  window.WebSocket = window.WebSocket || window.MozWebSocket;

  // Create a connection to the server.
  var connection = new WebSocket('ws://' + host + ':1337');

  // When a connection is opened for the first time.
  connection.onopen = function () {

    // Send a message to the server telling it the desktop is connecting.
    var msg = JSON.stringify({ type: 'connect', data: 'desktop' });
    connection.send(msg);
  };

  // When the connection errors.
  connection.onerror = function (error) {
    // TODO: Implement error notifications when sending/receiving data.
  };

  // When a message is received from the server.
  connection.onmessage = function (message) {

    // Decode the message from the server.
    try {
      var received = JSON.parse(message.data);

      // After the desktop has connected to the server it sends back a unique ID.
      if (received.type === 'uniqueID') {

        // Update the mobile connection message and show it to the user.
        var uniqueID = received.data;
        $('#unique-url p').html($('#unique-url p').html().replace(/%id/g, uniqueID));
        $('#unique-url').fadeIn(100);
        return;
      }

      // When a module device connects with the same unique URL, the
      // server sends a notification to the desktop.
      if (received.type === 'mobile_device_connected') {

        // Remove the mobile connection message, and tell the user
        // that the mobile device has connected successfully.
        $('#unique-url').fadeOut(100);
        $('#status-message')
          .html('<p>Mobile device connected!</p>')
          .fadeIn(100, function () {
            setTimeout(function () {
              $('#status-message').fadeOut(100);
            }, 3000);
          });

        return;
      }

      // A scroll request has been received.
      if (received.type === 'video_request') {

        // First work out the previous and next elements to scroll to.
    	var player = new MediaElementPlayer('video', {timerRate: 10});
    	
    	
    	
    	
        var prev = null;
        var next = null;

        // For each page.
      /*  $('.page').each(function () {

          // If the browser aligns exactly to a page, previous and
          // next are obvious.
          if ($(this).position().top === $(window).scrollTop()) {
            prev = $(this).prev();
            next = $(this).next();

            return false;
          }

          // If we have scrolled half way through a page, previous
          // should be the current page.
          if ($(this).position().top < $(window).scrollTop()) {
            prev = $(this);
            next = $(this).next();
          }
        });

        // If previous and next have not been found.
        if (prev.length) {
          prev = prev.position().top;
        } else {
          prev = 0;
        }

        if (next.length) {
          next = next.position().top;
        } else {
          next = $(document).height();
        }*/

        // Scroll the page to the correct place.
        switch (received.data) {
        case 'play':
        	player.play();
        	//alert('play');
        //  $('body,html').animate({ scrollTop: next });
          break;
        case 'paused':
        	player.pause();
        //  $('body,html').animate({ scrollTop: prev });
          break;
        case 'progress':
        	console.log('progress');
        	alert('progress');
        //  $('body,html').animate({ scrollTop: prev });
          break;
        case 'ended':
        	console.log('ended');
        	//alert('ended');
        //  $('body,html').animate({ scrollTop: prev });
          break;
        }
        
        if(!isNaN(parseInt(received.data)))
        {
        	//console.log(received.data);
        	player.setCurrentTime(received.data);
        	//player.setCurrentRail(received.data);
        }
        
        console.log(received.data)
      }


    } catch (e) {
      console.log('This doesn\'t look like a valid JSON: ', message.data);
      return;
    }
  };


  // Close button for Unique URL popup
  $('#unique-url #close').bind('click', function (e) {
    e.preventDefault();
    $(this).closest('#unique-url').fadeOut(100);
  });

});
