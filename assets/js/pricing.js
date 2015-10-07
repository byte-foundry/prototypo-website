$(function() {
	if ( !$("body").hasClass("pricing") ) {
		return;
	}

	function showError(error) {
		$('#signup-error').show();
		$('#signup-error').text(error);
	}

	function hideError() {
		$('#signup-error').hide();
		$('#signup-error').text('');
	}

	$('#quick-signup input[type!=submit]').val('');

	$('#quick-signup').on('submit', function(event) {
		event.preventDefault();

		if ( $('#quick-password1').val() === '' ) {
			return showError('password empty');
		}

		if ( $('#quick-password1').val() !== $('#quick-password2').val() ) {
			return showError('password mismatch');
		}

		if ( !/.*@.*/.test($('#quick-email').val()) ) {
			return showError('invalid email');
		}

		if ( hoodie.account.username ) {
			return showError('already logged in');
		}

		hoodie.account.signUp($('#quick-email').val(), $('#quick-password1').val())
			.done(function() {
				tryCustomerCreate(function( data ) {
					window.location =
						'http://app.prototypo.io?bt=' +
						data.authorization.replace(/^.*? +/, '');
				}, 0);
			})
			.fail(function(err) {
				if ( err.status === 409 && err.message.indexOf('already exists') !== -1 ) {
					return alert('Username already in use');
				}

				ga( 'send', 'event', 'js-error', err.message, err.status );
			});
	});

	function tryCustomerCreate( cb, count ) {
		hoodie.stripe.customers.create({
			plan: 'free_monthly_USD_taxfree',
		})
		.then(function( data ) {
			cb( data );
		})
		.catch(function(err) {
			ga( 'send', 'event', 'js-error', err.message, err.status + ': ' + hoodie.account.username );

			if ( count < 4 ) {
				tryCustomerCreate( cb, count + 1 );
			}
		});
	}
});
