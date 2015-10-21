$(function() {

	if ( !$("body").hasClass("account") ) {
		return;
	}

	var recurrence = 'monthly';

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

	$('.change-card-toggle').on('click', function() {
		$('.account-card-form-toggle-target').toggle();
	});

	$('.monthYearSwitch').on('click', function() {
	    recurrence = $(this).val();
	});

	$('.change-subscription-toggle').on('click', function() {
		$('.account-plan-toggle-target').toggle();
	});

	$('#plan').on('change', function() {
		$('.priceMonth').html( $('#' + $('#plan').val()).attr('month') / ( ( 100 + window.taxRate ) / 100 ) );
		$('.priceAnnual').html( $('#' + $('#plan').val()).attr('annual') / ( ( 100 + window.taxRate ) / 100 ) );

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
	});

	$('#submit-subscription').on('click', function() {
		hoodie.stripe.customers.updateSubscription({
			plan: selectedPlan($('#plan').val(), recurrence)
		}).then(function() {
			getHoodieInfo();
			$('.account-plan-toggle-target').toggle();

			$('#success-message').css('display', 'flex').css('opacity', 1).animate({
				opacity: 0
			}, 3000, function() {
				$('#success-message').hide().css('opacity', 1);
			});

		}).catch(function(err) {

		});
	})

	$("#change-card-submit").on('click', function() {
		Stripe.card.createToken({
			number: $('#cardNumberInput').val(),
			cvc: $('#cvcInput').val(),
			exp_month: $('#creditCardExpMonthInput').val(),
			exp_year: $('#creditCardExpYearInput').val()
		}, function( status, response ) {
			hoodie.stripe.customers.update({
				source: response.id,
				cardPrefix: $('#cardNumberInput').val().substr(0,9)
			}).then(function(response) {
					getHoodieInfo();
			})
		});
	})
});
