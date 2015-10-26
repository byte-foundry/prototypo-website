$(function() {

	if ( !$("body").hasClass("pricing/subscribe") ) {
		return;
	}

	var recurrence = 'monthly';

	// Default load prices
	$('.priceMonth').html( $('#' + $('#plan').val()).attr('month') );
	$('.priceAnnual').html( $('#' + $('#plan').val()).attr('annual') );

	if( $('#plan').val() === 'free' ) {
		$('#card-form').css('display', 'none');
		$('#select-plan-wrap').css('display', 'none');
	}

	function createToken() {
		if (selectedPlan( $('#plan').val(), recurrence ).indexOf('free') === 0) {
			subscribe(null, {id: undefined});
		}
		else {

			Stripe.card.createToken({
				number: $('#cardNumberInput').val(),
				cvc: $('#cvcInput').val(),
				exp_month: $('#creditCardExpMonthInput').val(),
				exp_year: $('#creditCardExpYearInput').val()
			}, subscribe);
		}
	};

	var euCountryCode = [
		"AT",
		"BE",
		"BG",
		"CY",
		"CZ",
		"DE",
		"DK",
		"EE",
		"EL",
		"GR",
		"ES",
		"FI",
		"FR",
		"HR",
		"HU",
		"IE",
		"IT",
		"LT",
		"LU",
		"LV",
		"MT",
		"NL",
		"PL",
		"PT",
		"RO",
		"SE",
		"SI",
		"SK",
		"UK",
		"GB"
	]

	function subscribe(status, response) {

		if (response.error) {
			$('#stripe-error').text(response.error.message);
			$('#stripe-error').show();
		}
		else {
			$('#stripe-error').text('');
			$('#stripe-error').hide();

			if (response.card && euCountryCode.indexOf(response.card.country) !== -1 && currency === 'USD') {
				return alertShouldPayInEuro();
			}

			hoodie.stripe.customers.create({
				'source': response.id,
				'buyer_tax_number': undefined,
				'buyer_credit_card_prefix': $('#cardNumberInput').val().substr(0,9),
				'currency_code': 'EUR',
				'plan': selectedPlan( $('#plan').val() , recurrence),
			})
			.then(function() {
				getHoodieInfo();
			})
			.catch(function(err) {
				$('#stripe-error').text(err.message);
				$('#stripe-error').show();
			});
		}
	}

	function alertShouldPayInEuro() {
		$("#alert-wrong-country").show();
	}

	function showStripeError(condition, message) {
		if (condition) {
			$('#stripe-error').text(message);
			$('#stripe-error').show();
			return true;
		}
	}

	$('#submit').on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();

		$('#stripe-error').text("");
		$('#stripe-error').hide();
		$('#signin-error').text("");
		$('#signin-error').hide();

		if ($('#password').val().length < 6) {
			$('#signin-error').text('Your password must be at least 6 characters long');
			$('#signin-error').show();
			return;
		}

		if (!/^.*?@.*?\..*?/.test($('#email').val())) {
			$('#signin-error').text('Your email is not a valid email address');
			$('#signin-error').show();
			return;
		}

		if (!$('#tos-checkbox').prop('checked')) {
			$('#signin-error').text('You have to agree with the term of services');
			$('#signin-error').show();
			return;
		}

		if (selectedPlan( $('#plan').val(), recurrence ).indexOf('free_') === -1) {
			var error = false;
			error = error || showStripeError($('#cardNumberInput').val().length < 13, "Your card number seems too short");
			error = error || showStripeError(!$('#creditCardExpMonthInput').val(), "You did not choose an expiration month");
			error = error || showStripeError(($('#creditCardExpMonthInput').val() || "dirtydatehere").length > 2 , "Your expiration month is invalid");
			error = error || showStripeError(!$('#creditCardExpYearInput').val(), "You did not choose an expiration year");
			error = error || showStripeError(($('#creditCardExpYearInput').val() || "dirtydatehere").length  > 4 , "Your expiration year is invalid");
			error = error || showStripeError(moment("01/" + $('#creditCardExpMonthInput').val() + "/" + $('#creditCardExpYearInput')
				.val(), 'DD/MM/YYYY')
				.endOf('month')
				.isBefore(moment()), "Your expiration date is earlier than today");
			error = error || showStripeError($('#cvcInput').val().length < 3 , "Your cvc seems too short");

			if (error) {
				return;
			}
		}

		if (hoodie.account.username) {
			createToken();
		}
		else {
			hoodie.account.signUp($('#email').val(), $('#password').val())
				.done(function() {
					$('#signin-error').text('');
					$('#signin-error').hide();
					getHoodieInfo();
					createToken();
				})
				.fail(function(err) {
					console.log(err);
					$('#signin-error').text(err.message);
					$('#signin-error').show();
				});
		}

	});

	$('.listCountry').on('click', function() {
	    calcTax( parseInt( $('#' + $('#plan').val()).attr('month')), window.code );
		$('.taxamo-country').slideToggle();
	});

	$('.monthYearSwitch').on('click', function() {
	    recurrence = $(this).val();
	});

	// if user change country
	$('#validateCountry').on('click', function() {
		var country = $('#taxamo-country-select').val();
		calcTax( parseInt( $('#' + $('#plan').val()).attr('month')), country );
		$('.taxamo-country').slideToggle();
	});

	$('#outsideEU').on('click', function() {
		var country = 'US';
		calcTax( parseInt( $('#' + $('#plan').val()).attr('month')), country );
		$('.taxamo-country').slideToggle();
	});


	$('#plan').on('change', function() {
		$('.priceMonth').html( $('#' + $('#plan').val()).attr('month') / ( ( 100 + window.taxRate ) / 100 ) );
		$('.priceAnnual').html( $('#' + $('#plan').val()).attr('annual') / ( ( 100 + window.taxRate ) / 100 ) );

		if ($('#plan').val() === 'free') {
			$('#card-form').css('display', 'none');
			$('#select-plan-wrap').css('display', 'none');
		}
		else {
			$('#card-form').css('display', 'block');
			$('#select-plan-wrap').css('display', 'block');
		}
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

	$('#no-account').on('click', function() {
		$(this).css('display','none');
		$('#already-account').css('display','block');
		$('.register').css('display','block');
		$('.signin').css('display','none');
	});

});
