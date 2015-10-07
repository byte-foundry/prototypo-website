$(function() {


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

});
