$(function() {

	if ( !$("body").hasClass("account") ) {
		return;
	}

	var recurrence = sessionStorage.recurrence || 'annual';

	getHoodieInfo();

	$('#sign-me-in').on('click', function() {
		hoodie.account.signIn($('#email-sign-in').val(), $('#password-sign-in').val())
			.done(function() {
				getHoodieInfo();
				$('#signin-error').hide();
				$('#signin-error').text('');
				$('.priceMonth').html( $('#free').attr('month') );
				$('.priceAnnual').html( $('#free').attr('annual') );

			})
			.fail(function(error) {
				$('#signin-error').show();
				$('#signin-error').text(error.message);
			});
	});

	if (sessionStorage.errorCreateCustomer) {
		delete sessionStorage.errorCreateCustomer;
		$('#error-create-customer').show();
	}

	$('.change-card-toggle').on('click', function() {
		$('.account-card-form-toggle-target').toggle();
	});

	$('.monthYearSwitch').on('click', function() {
	    recurrence = $(this).val();
	});

	$('.change-subscription-toggle').on('click', function() {
		$('.account-plan-toggle-target').toggle();
		if (sessionStorage.payInEuro === "true") {
			$('.currency').removeClass('outsideEU');
		}
		else {
			$('.currency').addClass('outsideEU');
		}
	});

	$('#plan').on('change', function() {
		if ($('#plan').val() === 'free') {
			$('#card-form').css('display', 'none');
			$('#select-plan-wrap').css('display', 'none');
			$('#free-plan-infos').show();
		}
		else {
			$('#card-form').css('display', 'block');
			$('#select-plan-wrap').css('display', 'block');
			$('#free-plan-infos').hide();
		}
		$('.priceMonth').html( $('#' + $('#plan').val()).attr('month') );
		$('.priceAnnual').html( $('#' + $('#plan').val()).attr('annual') );
	});
	$('.priceMonth').html( $('#' + $('#plan').val()).attr('month') );
	$('.priceAnnual').html( $('#' + $('#plan').val()).attr('annual') );

	$('#submit-subscription').on('click', function() {
		var subInfo = selectedPlan($('#plan').val(), recurrence);
		hoodie.stripe.customers.updateSubscription({
			plan: subInfo.plan,
			coupon: subInfo.coupon
		}).then(function() {
			getHoodieInfo();
			$('.account-plan-toggle-target').toggle();
			$('#success-plan-message').show();
		}).catch(function(err) {
			window.Intercom('update',{email:hoodie.account.username, error:1});
		});
	})

	$("#change-card-submit").on('click', function() {
		Stripe.card.createToken({
			number: $('#cardNumberInput').val(),
			cvc: $('#cvcInput').val(),
			exp_month: $('#creditCardExpMonthInput').val(),
			exp_year: $('#creditCardExpYearInput').val()
		}, function( status, response ) {
			if (response.error) {
				return window.Intercom('update',{email:hoodie.account.username, error:1});
			}

			hoodie.stripe.customers.update({
				source: response.id,
				buyer_credit_card_prefix: $('#cardNumberInput').val().substr(0,9)
			}).then(function(response) {
				$('#success-card-message').show();
				$('.account-card-form-toggle-target').hide();
				getHoodieInfo();
				$('.priceMonth').html( $('#' + $('#plan').val()).attr('month') );
				$('.priceAnnual').html( $('#' + $('#plan').val()).attr('annual') );
			}).catch(function(err) {
				window.Intercom('update',{email:hoodie.account.username, error:1});
			});
		});
	})
});
