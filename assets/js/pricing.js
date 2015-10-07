$(function() {
	if ( !$("body").hasClass("pricing") ) {
		return;
	}

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

		var hoodie = new Hoodie('http://127.0.0.1:6022');

		hoodie.account.signUp($('#quick-email').val(), $('#quick-password1').val())
			.then(function() {
				hoodie.stripe.customers.create({
					plan: 'free_monthly_USD_taxfree',
				})
				.then(function() {
					window.location = 'http://app.prototypo.io';
				})
				.catch(function(err) {
					ga( 'send', 'event', 'js-error', err.message, err.status );
				});
			})
			.catch(function(err) {
				if ( err.status === 409 && err.message.indexOf('already exists') !== -1 ) {
					return alert('Username already in use');
				}

				ga( 'send', 'event', 'js-error', err.message, err.status );
			});
	});
});
