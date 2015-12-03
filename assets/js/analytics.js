$(function() {
	/* Analytics events */
	// track users subscribing to the newsletter
	$(document.body).on('submit', '[action$="subscribe"]', function(e) {
		ga( 'send', 'event', 'newsletter', 'subscribe' );
	});

	// track subscribtions once user is redirected (just to make sure)
	if ( window.location.hash === '#subscribed' ) {
		ga( 'send', 'event', 'newsletter', 'subscribed' );
	}

	// track clicks on outbount links
	$(document.body).on('click', '[target="_blank"]', function(e) {
		ga( 'send', 'event', 'outbound', 'click', e.target.href );
	});

	// track users playing with the demo
	$(document.body).one('input', '.DemoControls input', function() {
		ga( 'send', 'event', 'try-demo', 'click' );
	});

	// track users playing the video
	$('.switchAction').one('click', function() {
		ga( 'send', 'event', 'play-video', 'click' );
	});

	if (window.location.hash === '#/card' ) {
		ga( 'send', 'event', 'app', 'subscribed' );
	}

	if (window.location.pathname.indexOf('subscribe') !== -1 && window.location.hash === '#/card' ) {
		ga( 'send', 'event', 'app', 'paying' );
	}

});
