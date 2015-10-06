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

	/* Demo/Video switch */
	$('.switchAction').on('click', function(e) {
		$videoplayer = $('#videoplayer');
		$('.toggleSwitch').toggle();
		$videoplayer.attr('src', $videoplayer.attr('src') ?
			'' : $videoplayer.attr('data-src') );
	});

	$('#toggleMainNav').on('click', function() {
		$('body').toggleClass('js-showMainNav');
		$(this).toggleClass('active');
	});

	/* FAQ Code */
	$('.Question-header').not('.Question-anchor').on('click', function() {
		$(this).parent().find('.Question-content').slideToggle(200);
	});

	// What's the point of this reload?
	// $('.Question-anchor').on('click', function() {
	//	 window.location.reload();
	// });

	function FAQ__checkIfAnchorToQuestion() {
		if (window.location.hash) {
			if (!$(window.location.hash).hasClass('focus')) {
				$('.Question').removeClass('focus');
				$(window.location.hash).addClass('focus').find('.Question-header').trigger('click');
			}
		}
	}

	FAQ__checkIfAnchorToQuestion();

	$('.js_annualBilling').on('mousedown', function() {
		$('.Pricing').removeClass('showMonthlyBilling').addClass('showAnnualBilling');
		$('.billing').each(function() {
			$( this ).attr('href', '/pricing/subscribe?plan=' + $( this ).attr('plan') + '&billing=annual');
		});
	});

	$('.js_monthlyBilling').on('mousedown', function() {
		$('.Pricing').removeClass('showAnnualBilling').addClass('showMonthlyBilling');
		$('.billing').each(function() {
			$( this ).attr('href', '/pricing/subscribe?plan=' + $( this ).attr('plan') + '&billing=monthly');
		});
	});

	/* Prototypo Demo in Canvas */
	var instance = new PrototypoCanvas({
			canvas: document.querySelector('#DemoCanvas'),
			jQueryListeners: false,
			fontObj: window.fontObj
		}),
		params = {
			xHeight: 500,
			capDelta: 250,
			ascender: 250,
			descender: -250,
			crossbar: 1,
			width: 1,
			roundness: 0.65,
			thickness: 85,
			_contrast: -1,
			breakPath: 0,
			aperture: 1,
			axis: 0,
			serifMedian: 1,
			serifWidth: 65,
			serifHeight: 20,
			serifCurve: 15,
			serifArc: 0,
			serifTerminal: 0,
			serifRotate: 1,
			serifRoundness: 1,
			midWidth: 1,
			serifTerminalCurve: 1,
			spurHeight: 1,
			overshoot: 10,
			slant: 0,
			curviness: 0.6,
			opticThickness: 1,
			serifBall: 1
		};

	instance.update(params);

	instance.displayChar('A');
	instance.currGlyph.fillColor = '#444';
	instance.zoom = 0.29;
	instance.view.center = [ 200, -350];

	// retrieve the colors used in the stylesheet.
	var colors =
		$('.DemoControls-Potentiometer')
		.css('background-image')
		.replace(/^.*?(rgb\(.*?\)).*?(rgb\(.*?\)).*$/, ' $1 | $2 ')
		.split('|'),
		updateSliderBg = function(el) {
			var amplitude = el.max - el.min,
				// the amplitude correction is empirical
				percent = 100 * (el.value - el.min + 0.05 * amplitude) / (el.max - el.min + 0.10 * amplitude);

			el.style['background-image'] =
				'linear-gradient( to right,' +
				colors[0] + percent + '%,' +
				colors[1] + (percent + 0.01) + '%)';
		};

	$('.DemoControls').on('input', '.DemoControls-Potentiometer', function(e) {
		updateSliderBg(e.target);
		params[e.target.getAttribute('data-param')] = +e.target.value;
		instance.update(params);
	});
	$('.DemoControls-Potentiometer').each(function() {
		updateSliderBg(this);
	});
});

function calcTax( amount, country ) {
	var transaction = Taxamo.transaction()
		.forceCountryCode( country || window.code || 'FR')
		.buyerTaxNumber( Taxamo.defaultTransaction.buyer_tax_number )
		.currencyCode('EUR')
		.transactionLine('line1') //first line
			.amount(amount)
		.done(); //go back to transaction context

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
}


var hoodie = new Hoodie('http://127.0.0.1:6007');
var recurrence = 'monthly';

function getHoodieInfo() {
	hoodie.account.fetch()
		.then(function(user) {
			$('.logged-in-form').show();
			$('.not-logged-in-form').hide();
			$('#logged-in-email').text(hoodie.account.username);
			$('#hoodieUsername').text(hoodie.account.username);
			$('#logged-in-subscription').text(user.roles[user.roles.length - 1]);
			$('#already-account').hide();
			$('#no-account').hide();
			window.hoodieUser = user;
		})
		.catch(function(err) {
			$('.logged-in-form').hide();
			$('.not-logged-in-form').show();
			$('#already-account').show();
			$('#no-account').hide();
			window.notLoggedIn = true;
		});
}

function selectedPlan( plan ) {
	var selectedPlan;
	if ( plan === 'free') {
		selectedPlan = "free_" + recurrence + "_USD_taxfree";
	} else {
		selectedPlan = "launch_" + recurrence + "_USD_taxfree";
	}
	return selectedPlan;
}

getHoodieInfo();

$( window ).load(function() {

	if ( $("body").hasClass("pricing/subscribe") ) {

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

		// Validate VAT number
		$('#VAT').on('blur', function() {
			Taxamo.setTaxNumber( $('#VAT').val().replace(/ /g,'') );
            calcTax( parseInt( $('#' + $('#plan').val()).attr('month')), $('#taxamo-country-select').val() )
		});

		function createToken() {
			Stripe.card.createToken({
				number: $('#cardNumberInput').val(),
				cvc: $('#cvcInput').val(),
				exp_month: $('#creditCardExpMonthInput').val(),
				exp_year: $('#creditCardExpYearInput').val()
			}, subscribe);
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
