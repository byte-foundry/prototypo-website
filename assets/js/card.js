$(function() {
	Taxamo.initialize('public_zb1StvrkVbh8izNkCWapQsgJMvN7xURCQh1QJWQTg3I');
	//Taxamo.initialize('public_test_gkQnEFf8SpuGAijwkX3ustMv5cfAfoWuNdlvPXZsqvg');
	Taxamo.detectCountry();

	// Detect current country
	Taxamo.subscribe('taxamo.country.detected', function(data) {
		$('.countryName').html(data.countries.by_ip.name);
		$('#taxamo-country-select option[value="' + data.countries.by_ip.code + '"]').prop('selected', true);
		window.code = data.countries.by_ip.code;

		if (euCountryCode.indexOf(window.code) !== -1) {
			sessionStorage.payInEuro = sessionStorage.payInEuro || true;
			$('.currency').removeClass('outsideEU');
		}
		else {
			sessionStorage.payInEuro = sessionStorage.payInEuro || false;
			$('.currency').addClass('outsideEU');
		}
	});

	// Validate VAT number
	$('#VAT').on('blur', function() {
		Taxamo.setTaxNumber( $('#VAT').val().replace(/ /g,'') );
		calcTax( parseInt( $('#' + $('#plan').val()).attr('month')), $('#taxamo-country-select').val() )
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
				window.currency = 'USD';
				if ( data.transaction.tax_region === 'EU' ) {
					window.currency ='EUR';
					$('.currency').removeClass('outsideEU');
				}
				else {
					$('.currency').addClass('outsideEU');
				}
			},
			function(data) {
				console.log('Error TAXAMO');
			}
		);
	}

	calcTax( parseInt( $('#' + $('#plan').val()).attr('month') ));
})
