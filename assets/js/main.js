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
		$('.Pricing').removeClass('showMonthlyBilling').addClass('showAnnualBilling');
		if (!hoodie.account.username) {
			$('.billing').each(function() {
				$( this ).attr('href', '/pricing/subscribe?plan=' + $( this ).attr('plan') + '&billing=annual');
			});
		}
	});

	$('.js_monthlyBilling').on('mousedown', function() {
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
		if ( plan === 'free') {
			selectedPlan = "free_monthly_USD_taxfree";
		} else {
			selectedPlan = "launch_" + recurrence + "_USD_taxfree";
		}
		return selectedPlan;
	}


	window.getHoodieInfo = function() {
		hoodie.account.fetch()
			.then(function(user) {
				// if ( $("body").hasClass("pricing/subscribe") ) {
				// 	location.href = '/account';
				// }

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
				hoodie.stripe.customers.retrieve()
					.then(function(response) {
						$('#last-four').text(response.sources.data[0].last4);
						$('#card-month').text(response.sources.data[0].exp_month);
						$('#card-year').text(response.sources.data[0].exp_year);

						if (!(plan.indexOf('stripe') === -1 || plan.indexOf('free_') !== -1)) {
							$('.subscription-date').show();
							$('#subscription-date').text(moment.unix(response.subscriptions.data[0].current_period_end).format('L'));
						} else {
							$('.subscription-date').hide();
						}
					});
			})
			.catch(function(err) {
				$('.hoodie-account').hide();
				$('.no-hoodie-account').show();
				window.notLoggedIn = true;
			});
	}
	getHoodieInfo();

	$('.logout').on('click', function() {
		hoodie.account.signOut()
			.done(function() {
				$('.not-logged-in-form').css('display', 'none');
				getHoodieInfo();
				window.notLoggedIn = true;
			});
	});

});
