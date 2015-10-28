$(function() {

	if ( !$("body").hasClass("pricing/subscribe") ) {
		return;
	}

	var recurrence = sessionStorage.recurrence || 'annual';

	// Default load prices
	$('.priceMonth').html( $('#' + $('#plan').val()).attr('month') );
	$('.priceAnnual').html( $('#' + $('#plan').val()).attr('annual') );

	if( $('#plan').val() === 'free' ) {
		$('#card-form').css('display', 'none');
		$('#select-plan-wrap').css('display', 'none');
	}

	function createToken(cb) {
		if (!selectedPlan( $('#plan').val(), recurrence ).plan) {
			cb(null, {id: undefined});
		}
		else {

			Stripe.card.createToken({
				number: $('#cardNumberInput').val(),
				cvc: $('#cvcInput').val(),
				exp_month: $('#creditCardExpMonthInput').val(),
				exp_year: $('#creditCardExpYearInput').val()
			}, cb);
		}
	};

	function subscribe(response) {


		var subInfo = selectedPlan( $('#plan').val() , recurrence);

		if (subInfo.plan) {

			hoodie.stripe.customers.create({
				'source': response.id,
				'buyer_tax_number': $('#VAT').val(),
				'buyer_credit_card_prefix': $('#cardNumberInput').val().substr(0,9),
				'currency_code': currency,
				'plan': subInfo.plan,
				'coupon': subInfo.coupon
			})
			.then(function() {
				getHoodieInfo();
			})
			.catch(function(err) {
				hoodie.stripe.customers.create({
					'buyer_tax_number': undefined,
					'plan': selectedPlan( 'free' , recurrence).plan,
				})
				.then(function() {
					sessionStorage.errorCreateCustomer = true;
					getHoodieInfo();
				})
				.catch(function(err) {
					showStripeError(true,err.message);
				});
			});
		}
		else {
				hoodie.stripe.customers.create({
					'buyer_tax_number': undefined,
					'plan': selectedPlan( 'free' , recurrence).plan,
				})
				.then(function() {
					getHoodieInfo();
				})
				.catch(function(err) {
					showStripeError(true,err.message);
				});
		}
	}

	function alertShouldPayInEuro() {
		currency = 'EUR';
		sessionStorage.payInEuro = true;
		$("#alert-wrong-country-eu").show();
		$('.currency').removeClass('outsideEU');
	}

	function alertShouldPayInUSD() {
		currency = 'USD';
		sessionStorage.payInEuro = false;
		$("#alert-wrong-country-us").show();
		$('.currency').addClass('outsideEU');
	}

	function showStripeError(condition, message) {
		window.Intercom('update',{error:1});
		if (condition) {
			$('#stripe-error').text(message);
			$('#stripe-error').show();
			return true;
		}
	}

	function signUp(status, response) {

		if (response.error) {
			window.Intercom('update',{error:1});
			$('#stripe-error').text(response.error.message);
			$('#stripe-error').show();
		}
		else {
			$('#stripe-error').text('');
			$('#stripe-error').hide();

			sessionStorage.payInEuro = currency === 'USD' ? false : true;

			if (response.card && euCountryCode.indexOf(response.card.country) !== -1 && currency === 'USD') {
				return alertShouldPayInEuro();
			}
			else if (response.card && euCountryCode.indexOf(response.card.country) === -1 && currency === 'EUR') {
				return alertShouldPayInUSD();
			}

			hoodie.account.signUp($('#email').val().toLowerCase(), $('#password').val())
				.done(function() {
					$('#signin-error').text('');
					$('#signin-error').hide();
					subscribe(response);
				})
				.fail(function(err) {
					window.Intercom('update',{error:1});
					console.log(err);
					$('#signin-error').text(err.message);
					$('#signin-error').show();
				});
		}
	}

	$('#subscribe-form').on('submit', function(e) {
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

		// if (!$('#tos-checkbox').prop('checked')) {
		// 	$('#signin-error').text('You have to agree with the term of services');
		// 	$('#signin-error').show();
		// 	return;
		// }

		if (selectedPlan( $('#plan').val(), recurrence ).plan) {
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
			createToken(signUp);
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
