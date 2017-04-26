;( function( window ) {
	
	'use strict';

	var document = window.document;

	if (!String.prototype.trim) {
		String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
	}

	function NLForm( el ) {	
		this.el = el;
		this.overlay = this.el.querySelector( '.nl-overlay' );
		this.fields = [];
		this.fldOpen = -1;
		this._init();
	}

	NLForm.prototype = {
		_init : function() {
			var self = this;
			Array.prototype.slice.call( this.el.querySelectorAll( 'select' ) ).forEach( function( el, i ) {
				self.fldOpen++;
				self.fields.push( new NLField( self, el, 'dropdown', self.fldOpen ) );
			} );
			Array.prototype.slice.call( this.el.querySelectorAll( 'input' ) ).forEach( function( el, i ) {
				self.fldOpen++;
				self.fields.push( new NLField( self, el, 'input', self.fldOpen ) );
			} );
			this.overlay.addEventListener( 'click', function(ev) { self._closeFlds(); } );
			this.overlay.addEventListener( 'touchstart', function(ev) { self._closeFlds(); } );
		},
		_closeFlds : function() {
			if( this.fldOpen !== -1 ) {
				this.fields[ this.fldOpen ].close();
			}
		}
	}

	function NLField( form, el, type, idx ) {
		this.form = form;
		this.elOriginal = el;
		this.pos = idx;
		this.type = type;
		this._create();
		this._initEvents();
	}

	NLField.prototype = {
		_create : function() {
			if( this.type === 'dropdown' ) {
				this._createDropDown();	
			}
			else if( this.type === 'input' ) {
				this._createInput();	
			}
		},
		_createDropDown : function() {
			var self = this;
			this.fld = document.createElement( 'div' );
			this.fld.className = 'nl-field nl-dd';
			this.toggle = document.createElement( 'a' );
			this.toggle.innerHTML = this.elOriginal.options[ this.elOriginal.selectedIndex ].innerHTML;
			this.toggle.className = 'nl-field-toggle';
			this.optionsList = document.createElement( 'ul' );
			var ihtml = '';
			Array.prototype.slice.call( this.elOriginal.querySelectorAll( 'option' ) ).forEach( function( el, i ) {
				ihtml += self.elOriginal.selectedIndex === i ? '<li class="nl-dd-checked">' + el.innerHTML + '</li>' : '<li>' + el.innerHTML + '</li>';
				// selected index value
				if( self.elOriginal.selectedIndex === i ) {
					self.selectedIdx = i;
				}
			} );
			this.optionsList.innerHTML = ihtml;
			this.fld.appendChild( this.toggle );
			this.fld.appendChild( this.optionsList );
			this.elOriginal.parentNode.insertBefore( this.fld, this.elOriginal );
			this.elOriginal.style.display = 'none';
		},
		_createInput : function() {
			var self = this;
			this.fld = document.createElement( 'div' );
			this.fld.className = 'nl-field nl-ti-text';
			this.toggle = document.createElement( 'a' );
			this.toggle.innerHTML = this.elOriginal.getAttribute( 'placeholder' );
			this.toggle.className = 'nl-field-toggle';
			this.optionsList = document.createElement( 'ul' );
			this.getinput = document.createElement( 'input' );
			this.getinput.setAttribute( 'type', this.elOriginal.getAttribute( 'type') );
      this.getinput.setAttribute( 'name', this.elOriginal.getAttribute( 'name') );
			this.getinput.setAttribute( 'placeholder', this.elOriginal.getAttribute( 'placeholder' ) );
			this.getinputWrapper = document.createElement( 'li' );
			this.getinputWrapper.className = 'nl-ti-input';
			this.inputsubmit = document.createElement( 'button' );
			this.inputsubmit.className = 'nl-field-go';
			this.inputsubmit.innerHTML = '';
			this.getinputWrapper.appendChild( this.getinput );
			this.getinputWrapper.appendChild( this.inputsubmit );
			this.example = document.createElement( 'li' );
			this.example.className = 'nl-ti-example';
			this.example.innerHTML = this.elOriginal.getAttribute( 'data-subline' );
			this.optionsList.appendChild( this.getinputWrapper );
			this.optionsList.appendChild( this.example );
			this.fld.appendChild( this.toggle );
			this.fld.appendChild( this.optionsList );
			this.elOriginal.parentNode.insertBefore( this.fld, this.elOriginal );
			this.elOriginal.style.display = 'none';
		},
		_initEvents : function() {
			var self = this;
			this.toggle.addEventListener( 'click', function( ev ) { ev.preventDefault(); ev.stopPropagation(); self._open(); } );
			this.toggle.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); ev.stopPropagation(); self._open(); } );

			if( this.type === 'dropdown' ) {
				var opts = Array.prototype.slice.call( this.optionsList.querySelectorAll( 'li' ) );
				opts.forEach( function( el, i ) {
					el.addEventListener( 'click', function( ev ) { ev.preventDefault(); self.close( el, opts.indexOf( el ) ); } );
					el.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); self.close( el, opts.indexOf( el ) ); } );
				} );
			}
			else if( this.type === 'input' ) {
				this.getinput.addEventListener( 'keydown', function( ev ) {
					if ( ev.keyCode == 13 ) {
						self.close();
					}
				} );
				this.inputsubmit.addEventListener( 'click', function( ev ) { ev.preventDefault(); self.close(); } );
				this.inputsubmit.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); self.close(); } );
			}

		},
		_open : function() {
			if( this.open ) {
				return false;
			}
			this.open = true;
			this.form.fldOpen = this.pos;
			this.fld.className += ' nl-field-open';
			$('input', this.fld).focus();
		},
		close : function( opt, idx ) {
			if( !this.open ) {
				return false;
			}
			this.open = false;
			this.form.fldOpen = -1;
			this.fld.className = this.fld.className.replace(/\b nl-field-open\b/,'');

			if( this.type === 'dropdown' ) {
				if( opt ) {
					// remove class nl-dd-checked from previous option
					var selectedopt = this.optionsList.children[ this.selectedIdx ];
					selectedopt.className = '';
					opt.className = 'nl-dd-checked';
					this.toggle.innerHTML = opt.innerHTML;
					// update selected index value
					this.selectedIdx = idx;
					// update original select element´s value
					this.elOriginal.value = this.elOriginal.children[ this.selectedIdx ].value;
				}
			}
			else if( this.type === 'input' ) {
				this.getinput.blur();
				this.toggle.innerHTML = this.getinput.value.trim() !== '' ? this.getinput.value : this.getinput.getAttribute( 'placeholder' );
				this.elOriginal.value = this.getinput.value;
			}
		}
	}

	// add to global namespace
	window.NLForm = NLForm;

} )( window );


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
	
	$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
  
  //Pricing - Switch monthly / annually and company user select
  if ($('main.Pricing').length > 0) {
    
    /*** Get user count ***/
    $.ajax({url: "https://e4jpj60rk8.execute-api.eu-west-1.amazonaws.com/prod/customers", success: function(result){
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
    var $baseCompanyCtaUrl = $('.callToAction-Company').attr('href');
		var $baseProCtaUrl = $('.callToAction-Pro').attr('href');
    var prices = [];
    var baselines = [];
    $('.PricingItem-price').each(function(index, value) {
      var price = $(value).text().split(',');
      prices.push({
        monthly: parseFloat(price[1].replace(/\s+/g, ' ').trim()),
        yearly: parseFloat(price[0].replace(/\s+/g, ' ').trim())
      })
    });
    $('.PricingItem-baseline').each(function(index, value) {
      var baseline = $(value).text().split(',');
      baselines.push({
        monthly: baseline[0].replace(/\s+/g, ' ').trim(),
        yearly: baseline[1].replace(/\s+/g, ' ').trim()
      })
    });
    var baseCompanyPrice = prices[2].yearly;
		
		
		if ($.urlParam('billing') && $.urlParam('billing') === 'monthly') {
			$monthlyButton.addClass('active');
      $yearlyButton.removeClass('active');
      
      $('.PricingItem-price').each(function(index, value) {
        let priceSplit = prices[index].monthly.toString().split('.');
        if (priceSplit.length > 1) {
          $(value).html(priceSplit[0] + '<div class="PricingItem-price-small">.' + priceSplit[1] + '</div>');
        } else {
          $(value).text(prices[index].monthly);
        }
        baseCompanyPrice = prices[2].monthly;
        setPrice($numberControl[0].value);
      });
      $('.PricingItem-baseline').each(function(index, value) {
        $(value).text(baselines[index].monthly);
      });
			
			$('.PricingItem-offerRibbon').show();
      $('.callToAction-Pro').text('Try it for $1!');
			let urlsplit = $baseProCtaUrl.split('?');
			$('.callToAction-Pro').attr('href', urlsplit[0] + '?subscribe=personal_monthly');
		}
		else {
			$('.PricingItem-price').each(function(index, value) {
	      let priceSplit = prices[index].yearly.toString().split('.');
	      if (priceSplit.length > 1) {
	        $(value).html(priceSplit[0] + '<span class="PricingItem-price-small">.' + priceSplit[1] + '</span>');
	      } else {
	        $(value).text(prices[index].yearly);
	      }
	      setPrice($numberControl[0].value);
	    });
	    $('.PricingItem-baseline').each(function(index, value) {
	      $(value).text(baselines[index].yearly);
	    });
			$('.PricingItem-offerRibbon').hide();
	    $('.callToAction-Pro').text('Go pro!');
	    $('.callToAction-Company').text('Get a quote!');
		}

    /*** Switch Monthly / yearly ***/
    $monthlyButton.on('click', function(e) {
      $monthlyButton.addClass('active');
      $yearlyButton.removeClass('active');
      
      $('.PricingItem-price').each(function(index, value) {
        let priceSplit = prices[index].monthly.toString().split('.');
        if (priceSplit.length > 1) {
          $(value).html(priceSplit[0] + '<div class="PricingItem-price-small">.' + priceSplit[1] + '</div>');
        } else {
          $(value).text(prices[index].monthly);
        }
        baseCompanyPrice = prices[2].monthly;
        setPrice($numberControl[0].value);
      });
      $('.PricingItem-baseline').each(function(index, value) {
        $(value).text(baselines[index].monthly);
      });
			
			$('.PricingItem-offerRibbon').show();
      $('.callToAction-Pro').text('Try it for $1!');
			let urlsplit = $baseProCtaUrl.split('?');
			$('.callToAction-Pro').attr('href', urlsplit[0] + '?subscribe=personal_monthly');
      
    });
    
    $yearlyButton.on('click', function(e) { 
      $yearlyButton.addClass('active');
      $monthlyButton.removeClass('active');
      
      $('.PricingItem-price').each(function(index, value) {
        let priceSplit = prices[index].yearly.toString().split('.');
        if (priceSplit.length > 1) {
          $(value).html(priceSplit[0] + '<span class="PricingItem-price-small">.' + priceSplit[1] + '</span>');
        } else {
          $(value).text(prices[index].yearly);
        }
        
        baseCompanyPrice = prices[2].yearly;
        setPrice($numberControl[0].value);
        
      });
      $('.PricingItem-baseline').each(function(index, value) {
        $(value).text(baselines[index].yearly);
      });
			
			$('.PricingItem-offerRibbon').hide();
      $('.callToAction-Pro').text('Go pro!');
			let urlsplit = $baseProCtaUrl.split('?');
			$('.callToAction-Pro').attr('href', urlsplit[0] + '?subscribe=personal_annual_99');
			
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
      
      let price = baseCompanyPrice * numLicences;
      let priceSplit = price.toString().split('.');
      if (priceSplit.length > 1) {
        $companyPrice.html(priceSplit[0] + '<span class="PricingItem-price-small">.' + priceSplit[1] + '</span>');
      } else {
        $companyPrice.text(price);
      }
      
      
      /*if (numLicences <= 10) {
        $('.callToAction-Company').text('Create your team!');
        $('.callToAction-Company').attr('href', $baseCompanyCtaUrl);
      } else {
        $('.callToAction-Company').text('Get a quote!');
        $('.callToAction-Company').attr('href', 'mailto:contact@prototypo.io');
      }*/
      $('.callToAction-Company').text('Get a quote!');
      $('.callToAction-Company').attr('href', 'mailto:contact@prototypo.io');
    }
    
    /*** / Company user count ***/   
    
  }
  
  //Education contact form
  if ($('main.Education').length > 0) {
    var nlform = new NLForm( document.getElementById( 'nl-form' ) );
  }

	$('#nl-form').on('submit', function(e) {
		e.preventDefault();

		var form = e.target;

		var name = form.name[0].value || undefined;
		var job = form.job.value || undefined;
		var school = form.school[0].value || undefined;
		var audience = form.audience.value || undefined;
		var email = form.email[0].value || undefined;
		var phone = form.phone[0].value || undefined;

		var text = $('#nl-form .nl-form-content')[0].innerText.replace(/(\r\n|\n|\r)/gm, '');

		if (Intercom) {
			Intercom('trackEvent', 'asked-educational-pricing', {
				school: school,
				job: job,
				audience: audience,
			});

			Intercom('update', {
				// email: email, // creates a user instead of a lead
				name: name,
				job_title: job,
				company: school,
				phone: phone,
			});

			Intercom('showNewMessage', text);

			return;
		}

	  document.location.href = "mailto:education@prototypo.io?subject=School / Student discount request" + "&body=" + encodeURIComponent(text);
		setTimeout(function () {
			$('#Education-contactForm-error').text('Something went wrong. Please contact us at education@prototypo.io while we are fixing this.')
		}, 4000);
	});
});


