$(function() {

	Stripe.setPublishableKey('pk_test_PkwKlOWOqSoimNJo2vsT21sE');

	/* Get email from the homepage pre-fill input */
	$('#get-app-submit').on('click', function(e) {
		sessionStorage.setItem("get-app-email", $('#get-app-email').val() );
	});
	if ( sessionStorage.getItem("get-app-email") ) {
		$('#quick-email').val( sessionStorage.getItem("get-app-email") );
		$('#email').val( sessionStorage.getItem("get-app-email") );
	}

	/* Get recurrence and plan from pricing page */
	$('.PricingSwitch-item').on('click', function(e) {
		sessionStorage.setItem("recurrence", $(this).attr('name') );
	});
	$('.choose-plan').on('click', function(e) {
		sessionStorage.setItem("plan", $(this).attr('name') );
	});
	/* pre-fill inputs with sessionStorage */
	if ( $("body").hasClass("pricing/subscribe") || $("body").hasClass("account") ) {
		// plan selector
		$('#plan').find('option').each( function() {
			if( $(this).val() === sessionStorage.getItem('plan') ) {
				$(this).prop('selected', true);
			};
		});
		// radio button recurrence
		$('#recurrence-selector').find('input').each( function() {
			if( $(this).val() === sessionStorage.getItem('recurrence') ) {
				$(this).prop('checked', true);
			};
		});
	}


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

	// window.hoodie = new Hoodie('http://localhost:6007');
	window.hoodie = new Hoodie('https://prototypo-dev.appback.com');

	// If user is logged in, redirect to account Page
	var subscriptionPage = 'pricing/subscribe';
	if ( hoodie.account.username && $(".subscribe-page")[0] ) {
		subscriptionPage = $('.subscribe-page').attr('href').replace('pricing/subscribe', 'account');
		$('.subscribe-page').attr('href', subscriptionPage);
	}

	$('.js_annualBilling').on('mousedown', function() {
		sessionStorage.recurrence = 'annual';
		$('.Pricing').removeClass('showMonthlyBilling').addClass('showAnnualBilling');
		if (!hoodie.account.username) {
			$('.billing').each(function() {
				$( this ).attr('href', '/pricing/subscribe?plan=' + $( this ).attr('plan') + '&billing=annual');
			});
		}
	});

	$('.js_monthlyBilling').on('mousedown', function() {
		sessionStorage.recurrence = 'monthly';
		$('.Pricing').removeClass('showAnnualBilling').addClass('showMonthlyBilling');
		if (!hoodie.account.username) {
			$('.billing').each(function() {
				$( this ).attr('href', '/pricing/subscribe?plan=' + $( this ).attr('plan') + '&billing=monthly');
			});
		}
	});

	window.euCountryCode = [
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

	var recurrence = 'monthly';

	window.selectedPlan = function( plan, recurrence ) {
		var selectedPlan;
		var coupon;
		if ( plan === 'free') {
			selectedPlan = "free_monthly_USD_taxfree";
		} else {
			var currency = sessionStorage.payInEuro === "true" ? 'EUR' : 'USD';
			selectedPlan = "personal_" + recurrence + "_" + currency + "_taxfree";
			coupon = "launch_" + recurrence + "_" + currency;
		}
		return {
			plan:selectedPlan,
			coupon: coupon,
		}
	}

	function pad(number) {
		return (number < 10) ? '0' + number.toString() : number.toString();
	}


	window.getHoodieInfo = function() {
		window.Intercom('shutdown');
		hoodie.account.fetch()
			.then(function(user) {
				if ( $("body").hasClass("pricing/subscribe") ) {
					location.href = '/account';
				}

				$('.subscribe-page').attr('href','/account');

				$('.hoodie-account').show();
				$('.no-hoodie-account').hide();
				$('#logged-in-email').text(hoodie.account.username);
				$('#hoodieUsername').text(hoodie.account.username);

				var plan = user.roles[user.roles.length - 1];
				if (plan.indexOf('stripe') === -1 || plan.indexOf('free_') !== -1) {
					plan = 'Free plan';
				}
				$('#logged-in-subscription').text(plan);
				window.hoodieUser = user;
				window.Intercom('boot', {
					  app_id: "mnph1bst",
					  email: user.name.split('/')[1], // TODO: The current logged in user's email address.
				});
				hoodie.stripe.customers.retrieve()
					.then(function(response) {
						$('#last-four').text(response.sources.data[0].last4);
						$('#card-month').text(pad(response.sources.data[0].exp_month));
						$('#card-year').text(response.sources.data[0].exp_year);

						if (!(plan.indexOf('stripe') === -1 || plan.indexOf('free_') !== -1)) {
							$('.subscription-date').show();
							$('#subscription-date').text(moment.unix(response.subscriptions.data[0].current_period_end).format('L'));
						} else {
							$('.subscription-date').hide();
						}

						sessionStorage.payInEuro = euCountryCode.indexOf(response.sources.data[0].country) !== -1 ? true : false;

						if (sessionStorage.payInEuro === "true") {
							$('.currency').removeClass('outsideEU');
						}
						else {
							$('.currency').addClass('outsideEU');
						}
						$('#card-details').show();
						$('#no-card').hide();
						$('#no-card-plan').hide();
						$('#change-subscription').show();
					})
					.catch(function(err) {
						$('#card-details').hide();
						$('#no-card').show();
						$('#no-card-plan').show();
						$('#change-subscription').hide();
					});
			})
			.catch(function(err) {
				$('.hoodie-account').hide();
				$('.no-hoodie-account').show();
				window.notLoggedIn = true;
				window.Intercom('boot', {
					  app_id: "mnph1bst"
				});
			});
	}
	getHoodieInfo();

	$('.logout').on('click', function() {
		hoodie.account.signOut()
			.done(function() {
				window.Intercom('shutdown');
				$('.not-logged-in-form').css('display', 'none');
				getHoodieInfo();
				window.notLoggedIn = true;
			});
	});

	if ( '_hoodie_config' in localStorage ) {
		var bt = JSON.parse( localStorage._hoodie_config )['_account.bearerToken'];
		if ( bt ) {
			$('a[href$="app.prototypo.io"]').each(function() {
				$(this).attr('href', $(this).attr('href') + '?bt=' + encodeURIComponent(bt));
			});
		}
	}

});
