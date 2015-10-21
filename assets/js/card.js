$(function() {
	Taxamo.initialize('public_test_gkQnEFf8SpuGAijwkX3ustMv5cfAfoWuNdlvPXZsqvg');
	Taxamo.detectCountry();

	// Detect current country
	Taxamo.subscribe('taxamo.country.detected', function(data) {
		$('.countryName').html(data.countries.by_ip.name);
		$('#taxamo-country-select option[value="' + data.countries.by_ip.code + '"]').prop('selected', true);
		window.code = data.countries.by_ip.code;
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
		        window.taxRate = 0;
		        if (data.transaction.buyer_tax_number_valid) {
		            window.taxRate = data.transaction.transaction_lines[0].tax_rate;
		        }
				$('.priceMonth').html( $('#' + $('#plan').val()).attr('month') / ( ( 100 + window.taxRate ) / 100 ) );
				$('.priceAnnual').html( $('#' + $('#plan').val()).attr('annual') / ( ( 100 + window.taxRate ) / 100 ) );

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
