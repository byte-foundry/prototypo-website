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

	$('.account-tabs-list li').on('click', function() {
		var target = $(this).attr('id');
		$('.account-tabs-list-item').removeClass('active');
		$(this).addClass('active');
		console.log(target);
		$('.target-tab').hide();
		$('#target-' + target).show();
	});


	$('.reset-password-toggle').on('click', function() {
		$('#wrap-reset-password').slideToggle();
		$('#wrap-sign-in').slideToggle();
	});

	$('#reset-password').on('click', function() {
		hoodie.account.resetPassword($('#email-reset-password').val())
			.done(function(success) {
				$('#hoodie-error').hide();
				$('#reset-password-actions').hide();
				$('#hoodie-error').text('');
				$('#hoodie-success').show();
				$('#user-email').text($('#email-reset-password').val());
			})
			.fail(function(error) {
				$('#hoodie-error').show();
				$('#hoodie-error').text(error.message);
			})
	});

	$('.change-password-toggle').on('click', function() {
		$('.change-password-toggle-target').slideToggle();
	});

	$('#change-password').on('click', function() {
		$('#password-error').hide();
		if ($('#new-password-1').val() === $('#new-password-2').val()) {
			if ($('#new-password-1').val().length < 6) {
				$('#password-error').show();
				$('#password-error').text('Password must be at least 6 characters.');
			} else {
				hoodie.account.changePassword($('#current-password').val(), $('#new-password-1').val())
					.done(function(success) {
						$('#password-error').hide();
						$('#password-error').text('');
						$('#password-success').show();
						$('#password-success').text('Your password was successfully changed.');
						$('.change-password-actions').toggle();
						hoodie.email.send({
							from: "Prototypo <contact@prototypo.io>",
							to: hoodie.account.username,
							subject: "Your password was successfully changed.",
							html: '<div style="font-size: 20px; margin-bottom: 50px;"><img src="https://pbs.twimg.com/profile_images/378800000637635122/9c0c585b61aed84d4f2684b9a455024a.png" width="100" height="100"/><br/><br/><br/><b>You’ve successfully changed your Prototypo password.</b><br/><br/>If you hadn’t request this change, please contact us.</div>'
						});
					})
					.fail(function(error) {
						$('#password-success').hide();
						$('#password-error').show();
						$('#password-error').text(error.message);
					});
			}
		} else {
			$('#password-error').show();
			$('#password-error').text('Passwords do not match, please try again.');
		}
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
		var subInfo = selectedPlan($('#plan').val(), recurrence, sessionStorage.payInEuro);
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
				buyer_credit_card_prefix: $('#cardNumberInput').val().substr(0,9),
				currency_code: sessionStorage.payInEuro ? 'EUR' : 'USD'
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

	$('#no-account').on('click', function() {
		$(this).css('display','none');
		$('#already-account').css('display','block');
		$('.register').css('display','block');
		$('.signin').css('display','none');
	});

	$('#sign-me-in').on('click', function() {
		hoodie.account.signIn($('#email-sign-in').val(), $('#password-sign-in').val())
			.done(function() {
				getHoodieInfo();
				$('#signin-error').hide();
				$('#signin-error').text('');
			})
			.fail(function(error) {
				$('#signin-error').show();
				$('#signin-error').text(error.message);
			});
	});

	$('#already-account').on('click', function() {
		$(this).css('display','none');
		$('#no-account').css('display','block');
		$('.signin').css('display','block');
		$('.register').css('display','none');
	});
});
