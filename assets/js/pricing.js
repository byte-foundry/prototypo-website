$(function() {
	if ( !$("body").hasClass("pricing") ) {
		return;
	}

	var hoodie = new Hoodie('https://prototypo-dev.appback.com');

	$('#quick-signup input[type!=submit]').val('');

	$('#quick-signup').on('submit', function(event) {
		event.preventDefault();

		if ( $('#quick-password1').val() === '' ) {
			return alert('password empty');
		}

		if ( $('#quick-password1').val() !== $('#quick-password2').val() ) {
			return alert('password mismatch');
		}

		if ( !/.*@.*/.test($('#quick-email').val()) ) {
			return alert('invalid email');
		}

		if ( hoodie.account.username ) {
			return alert('already logged in');
		}

		hoodie.account.signUp($('#quick-email').val(), $('#quick-password1').val())
			.done(function() {console.log('here');
				hoodie.stripe.customers.create({
					plan: 'free_monthly_USD_taxfree',
				})
				.then(function() {console.log(arguments);
					window.location = 'http://dev.prototypo.io';
				})
				.catch(function(err) {
					ga( 'send', 'event', 'js-error', err.message, err.status );
				});
			})
			.fail(function(err) {console.log(err.stack);
				if ( err.status === 409 && err.message.indexOf('already exists') !== -1 ) {
					return alert('Username already in use');
				}

				console.log(err.message);
				ga( 'send', 'event', 'js-error', err.message, err.status );
			});
	});
});
