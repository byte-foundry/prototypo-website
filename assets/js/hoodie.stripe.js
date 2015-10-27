function stripeAPI(hoodie) {
	return hoodie.stripe = {
		apiUrl: '/_plugins/stripe-subscriptions/_api',
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
			create: requester('customers.create'),
			update: requester('customers.update'),
			retrieve: requester('customers.retrieve'),
			updateSubscription: requester('customers.updateSubscription'),
		},
	};

	function requester( method ) {
		return function() {
			return hoodie.request('post', hoodie.stripe.apiUrl, {
					contentType: 'application/json',
					dataType: 'json',
					data: JSON.stringify({
						method: method,
						args: Array.prototype.slice.call( arguments, 0 ),
					}),
				});
		}
	}
}

if ( typeof Hoodie !== 'undefined' ) {
	Hoodie.extend(stripeAPI);
}
else if ( typeof global !== 'undefined' ) {
	module.exports = global.Hoodie.extend(stripeAPI);
}
