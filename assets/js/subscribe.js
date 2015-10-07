$(function() {

	if ( !$("body").hasClass("pricing/subscribe") ) {
		return;
	}

	function calcTax( amount, country ) {
		var transaction = Taxamo.transaction()
			.forceCountryCode( country || window.code || 'FR')
			.buyerTaxNumber( Taxamo.defaultTransaction.buyer_tax_number )
			.currencyCode('EUR')
			.transactionLine('line1') //first line
				.amount(amount)
			.done(); //go back to transaction context
		}

	Taxamo.calculateTax(
		transaction,
		function(data) {
	        console.log(data);
	        window.currency = 'USD';
	        if ( data.transaction.tax_region === 'EU' ) {
	            currency = 'EUR';
	        }
	        window.taxRate = 0;
	        if (data.transaction.buyer_tax_number_valid) {
	            window.taxRate = data.transaction.transaction_lines[0].tax_rate;
	        }
			$('.priceMonth').html( $('#' + $('#plan').val()).attr('month') / ( ( 100 + window.taxRate ) / 100 ) );
			$('.priceAnnual').html( $('#' + $('#plan').val()).attr('annual') / ( ( 100 + window.taxRate ) / 100 ) );

	        if ( data.transaction.tax_region === 'EU' ) {
	            $('.price').removeClass('outsideEU');
	        }
	        else {
	            $('.price').addClass('outsideEU');
	        }
		},
		function(data) {
	        console.log(data);
			console.log('Error TAXAMO');
		}
	);

	var recurrence = 'monthly';

	function selectedPlan( plan ) {
		var selectedPlan;
		if ( plan === 'free') {
			selectedPlan = "free_" + recurrence + "_USD_taxfree";
		} else {
			selectedPlan = "launch_" + recurrence + "_USD_taxfree";
		}
		return selectedPlan;
	}

	Stripe.setPublishableKey('pk_test_PkwKlOWOqSoimNJo2vsT21sE');

	setTimeout(function(){
		$('#taxamo-confirm-country-overlay').css('opacity', '.3');
	}, 1000);

	// Load taxamo
	Taxamo.initialize('public_test_gkQnEFf8SpuGAijwkX3ustMv5cfAfoWuNdlvPXZsqvg');
	Taxamo.detectCountry();

	calcTax( parseInt( $('#' + $('#plan').val()).attr('month') ));

	// Detect current country
	Taxamo.subscribe('taxamo.country.detected', function(data) {
		$('.countryName').html(data.countries.by_ip.name);
		$('#taxamo-country-select option[value="' + data.countries.by_ip.code + '"]').prop('selected', true);
		window.code = data.countries.by_ip.code;
	});

	selectedPlan();

	// Default load prices
	$('.priceMonth').html( $('#' + $('#plan').val()).attr('month') );
	$('.priceAnnual').html( $('#' + $('#plan').val()).attr('annual') );

	if( $('#plan').val() === 'free' ) {
		$('#card-form').css('display', 'none');
	}

	// Validate VAT number
	$('#VAT').on('blur', function() {
		Taxamo.setTaxNumber( $('#VAT').val().replace(/ /g,'') );
		calcTax( parseInt( $('#' + $('#plan').val()).attr('month')), $('#taxamo-country-select').val() )
	});

	function createToken() {
		if (selectedPlan( $('#plan').val() ).indexOf('free') !== -1) {
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

	function subscribe(status, response) {
		if (response.error) {
			$('#stripe-error').text(response.error.message);
			$('#stripe-error').show();
		}
		else {
			$('#stripe-error').text('');
			$('#stripe-error').hide();
			hoodie.stripe.customers.create({
				source: response.id,
				taxNumber: undefined,
				cardPrefix: $('#cardNumberInput').val().substr(0,9),
				currencyCode: 'EUR',
				plan: selectedPlan( $('#plan').val() ),
			})
			.then(function() {
				getHoodieInfo();
			});
		}
	}

	$('#submit').on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		if (hoodie.account.username) {
			createToken();
		}
		else {
			hoodie.account.signUp($('#email').val(), $('#password').val())
				.done(createToken)
				.fail(function(err) {
					console.log(err);
				});
		}

	});

	$('.logout').on('click', function() {
		hoodie.account.signOut()
			.done(function() {
				$('.not-logged-in-form').css('display', 'none');
				getHoodieInfo();
				window.notLoggedIn = true;
			});
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
		}
		else {
			$('#card-form').css('display', 'block');
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
