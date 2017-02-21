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
  
  //Pricing - Switch monthly / annually and company user select
  if ($('main.Pricing').length > 0) {
    
    /*** Get user count ***/
    $.ajax({url: "https://tc1b6vq6o8.execute-api.eu-west-1.amazonaws.com/dev/customers", success: function(result){
        console.log(result);
        if (result.total_count) {
          $('#Pricing-UserCount').text(result.total_count);
        }
    }});
    /*** / Get user count ***/
    
    var $numberControl = $('.PricingItem-pack-option-usercount .input-number');
    var $companyUserMin = $numberControl.attr('min') || false;
    var $companyUserMax = $numberControl.attr('max') || false;
    var $companyPrice = $('.PricingItem-price-company');
    var $monthlyButton = $('#Pricing-monthly-plan');
    var $yearlyButton = $('#Pricing-yearly-plan');
    var prices = [];
    $('.PricingItem-price').each(function(index, value) {
      var price = $(value).text().split(',');
      prices.push({
        monthly: parseInt(price[1].replace(/\s+/g, ' ').trim()),
        yearly: parseInt(price[0].replace(/\s+/g, ' ').trim())
      })
    });
    var baseCompanyPrice = prices[2].yearly;

    $('.PricingItem-price').each(function(index, value) {
      $(value).text(prices[index].yearly);
      setPrice($numberControl[0].value);
    });

    /*** Switch Monthly / yearly ***/
    $monthlyButton.on('click', function(e) {
      $monthlyButton.addClass('active');
      $yearlyButton.removeClass('active');
      
      $('.PricingItem-price').each(function(index, value) {
        $(value).text(prices[index].monthly);
        baseCompanyPrice = prices[2].monthly;
        setPrice($numberControl[0].value);
      });
      
    });
    
    $yearlyButton.on('click', function(e) {
      $yearlyButton.addClass('active');
      $monthlyButton.removeClass('active');
      
      $('.PricingItem-price').each(function(index, value) {
        $(value).text(prices[index].yearly);
        baseCompanyPrice = prices[2].yearly;
        setPrice($numberControl[0].value);
      });
    });
    /*** /Switch Monthly / yearly ***/
    
    /*** Company user count ***/    
    
    var $controls = {
      dec: $numberControl.prev(),
      inc: $numberControl.next().next()
    }
    
    $numberControl.each(function() {
      init($(this));
      $(this).on('input',function(e){
       setPrice($numberControl[0].value);
      });
    });
    
    function init(el) {

      $controls.dec.on('click', decrement);
      $controls.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!$companyUserMin || value >= $companyUserMin) {
          el[0].value = value;
          setPrice(el[0].value);
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!$companyUserMax || value <= $companyUserMax) {
          el[0].value = value++;
          setPrice(el[0].value);
        }
      }
      
    }
    
    function setPrice(numLicences) {
      if (numLicences < 4) {
        $numberControl[0].value = 4;
        numLicences = 4;
      }
      
      if (numLicences > 100) {
        $numberControl[0].value = 100;
        numLicences = 100;
      }
      
      $companyPrice.text(baseCompanyPrice * numLicences);
      switch ($companyPrice.text().toString().length) {
        case 4:
          $companyPrice.css('width', '140px');
          break;
        case 3:
          $companyPrice.css('width', '110px');
          break;
        default:
          $companyPrice.css('width', '80px');
      }
    }
    
    /*** / Company user count ***/
    
  }

});


