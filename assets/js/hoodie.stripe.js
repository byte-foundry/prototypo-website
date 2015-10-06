function stripeAPI(hoodie) {
	return hoodie.stripe = {
		apiUrl: '/_plugins/stripe-taxamo/_api',
		ping: function( data ) {
			return hoodie.request('post', hoodie.stripe.apiUrl, {
					contentType: 'application/json',
					dataType: 'json',
					data: JSON.stringify({
						method: 'ping',
						data: data,
					}),
				});
		},
		customers: {
			create: function(args) {
				return hoodie.request('post', hoodie.stripe.apiUrl, {
						contentType: 'application/json',
						dataType: 'json',
						data: JSON.stringify({
							method: 'customers.create',
							args: [ args ],
						}),
					});
			},
			updateSubscription: function(args) {
				return hoodie.request('post', hoodie.stripe.apiUrl, {
						contentType: 'application/json',
						dataType: 'json',
						data: JSON.stringify({
							method: 'customers.update',
							args: [ args ],
						}),
					});
			},
		},
	};
}

if ( typeof Hoodie !== 'undefined' ) {
	Hoodie.extend(stripeAPI);
}
else if ( typeof global !== 'undefined' ) {
	module.exports = global.Hoodie.extend(stripeAPI);
}
