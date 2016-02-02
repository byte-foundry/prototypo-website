$(function() {

	/* Get email from the homepage pre-fill input */
	$('#get-app-submit').on('click', function(e) {
		sessionStorage.setItem("get-app-email", $('#get-app-email').val() );
	});
	if ( sessionStorage.getItem("get-app-email") ) {
		$('#quick-email').val( sessionStorage.getItem("get-app-email") );
		// $('#email').val( sessionStorage.getItem("get-app-email") );
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

	// window.hoodie = new Hoodie('http://localhost:6007');
	// If user is logged in, redirect to account Page

	$('.js_annualBilling').on('mousedown', function() {
		sessionStorage.recurrence = 'annual';
		$('.totalAnnual').slideDown();
		$('.Pricing').removeClass('showMonthlyBilling').addClass('showAnnualBilling');
		if (!hoodie.account.username) {
			$('.billing').each(function() {
				$( this ).attr('href', '/pricing/subscribe#/signup');
			});
		}
	});

	$('.js_monthlyBilling').on('mousedown', function() {
		sessionStorage.recurrence = 'monthly';
		$('.totalAnnual').hide();
		$('.Pricing').removeClass('showAnnualBilling').addClass('showMonthlyBilling');
		if (!hoodie.account.username) {
			$('.billing').each(function() {
				$( this ).attr('href', '/pricing/subscribe#/signup');
			});
		}
	});

	function pad(number) {
		return (number < 10) ? '0' + number.toString() : number.toString();
	}

});
