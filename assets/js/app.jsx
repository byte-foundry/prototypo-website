require('babel-polyfill');
import React from 'react';
import {render} from 'react-dom';
import Remutable from 'remutable';
import {Router, Route, IndexRoute} from 'react-router';
import _ from 'lodash';

import {LocalClient, LocalServer} from './stores/local-client-server.stores.jsx';

import currencyService from './services/currency.services.jsx';
import {UserValues} from './services/values.services.jsx';

import SignupPanel from './payment/signup.components.jsx';
import BreadCrumb from './payment/breadcrumb.components.jsx';
import CardPanel from './payment/card.components.jsx';
import AddressPanel from './payment/address.components.jsx';
import PlanPanel from './payment/plan.components.jsx';
import SuccessPanel from './payment/success.components.jsx';
import ConfirmationPanel from './payment/confirmation.components.jsx';

import Header from './account/header.components.jsx';
import Account from './account/account.components.jsx';
import UserPanel from './account/user.components.jsx';
import SubscriptionPanel from './account/subscription.components.jsx';
import FontPanel from './account/font.components.jsx';
import AccountSuccessPanel from './account/success.components.jsx';
import ChangeCardPanel from './account/change-card-panel.components.jsx';
import ChangeSubPanel from './account/change-sub-panel.components.jsx';
import ChangeSubConfirmationPanel from './account/change-sub-confirmation-panel.components.jsx';
import ChangeInvoiceAddress from './account/change-invoice-address.components.jsx';
import ChangePassword from './account/change-password.components.jsx';

Stripe.setPublishableKey('pk_test_PkwKlOWOqSoimNJo2vsT21sE');
window.hoodie = new Hoodie('https://prototypo-dev.appback.com/');

const stores = {};
const localServer = new LocalServer(stores).instance;
LocalClient.setup(localServer);

const plans = stores['/plans'] = new Remutable({
	monthly: {
		launch: {
			amount: 8,
			realAmount: 15,
			total: 8,
			realTotal: 15,
			recurrence: 'month',
		},
	},
	annual: {
		launch: {
			amount: 8,
			realAmount: 12,
			total: 96,
			realTotal: 144,
			recurrence: 'year',
		}
	}
});

const plansInfos = stores['/plansInfos'] = new Remutable({
	'personal_annual_USD_taxfree': {
		name: 'Prototypo professional annual subscription',
		recurrence: 'year',
		realAmount: '$96.00',
		discount: -4800,
	},
	'personal_annual_EUR_taxfree': {
		name: 'Prototypo professional annual subscription',
		recurrence: 'year',
		realAmount: '96.00€',
		discount: -4800,
	},
	'personal_monthly_USD_taxfree': {
		name: 'Prototypo professional monthly subscription',
		recurrence: 'month',
		realAmount: '$8.00',
		discount: -700,
	},
	'personal_monthly_EUR_taxfree': {
		name: 'Prototypo professional monthly subscription',
		recurrence: 'month',
		realAmount: '8.00€',
		discount: -700,
	}
});

const paymentStore = stores['/paymentStore'] = new Remutable({});

const breadcrumbStore = stores['/breadcrumb'] = new Remutable({});

const errors = stores['/errors'] = new Remutable({});

const success = stores['/success'] = new Remutable({});

const userInfos = stores['/userInfos'] = new Remutable({});

const upcomingInvoice = stores['/upcomingInvoice'] = new Remutable({});

const loading = stores['/loading'] = new Remutable({});

const tabs = stores['/tabs'] = new Remutable({
	current: 'user',
});

function saveUserValues(newValues, cb, err) {
	const oldValues = {
		firstName: userInfos.get('firstName'),
		lastName: userInfos.get('lastName'),
		website: userInfos.get('website'),
		twitter: userInfos.get('twitter'),
		'invoice_address': userInfos.get('invoice_address'),
		'buyer_name': userInfos.get('buyer_name'),
	}

	const values = _.assign(oldValues, newValues);
	UserValues.save({values, typeface: 'default'})
		.then(cb)
		.catch(err);
}

const actions = {
	'/set-breadcrumb': (state) => {
		const patch = breadcrumbStore.set('state', state).commit();

		localServer.dispatchUpdate('/breadcrumb', patch);
	},
	'/sign-up': ({username, password}) => {
		if (!/\S+?@\S+?\.\S+?/.test(username)) {
			const patch = errors.set('signup', {message: 'You have to enter an email address'}).commit();
			return localServer.dispatchUpdate('/errors', patch);
		}

		const loadPatch = loading.set('loading', true).commit();
		localServer.dispatchUpdate('/loading', loadPatch);

		hoodie.account.signUp(username, password)
			.done((data) => {
				const patch = userInfos.set('username', hoodie.account.username).commit();
				localServer.dispatchUpdate('/userInfos', patch);

				hoodie.stripe.customers.create({
						email: hoodie.account.username,
						'buyer_email': hoodie.account.username,
					})
					.then(() => {
						const patch = errors.set('signup', undefined).commit();
						localServer.dispatchUpdate('/errors', patch);

						const loadedPatch = loading.set('loading', false).commit();
						localServer.dispatchUpdate('/loading', loadedPatch);

						location.hash = '#/card';
					})
					.catch((err) => {
						const patch = errors.set('signup', err).commit();
						localServer.dispatchUpdate('/errors', patch);

						const loadedPatch = loading.set('loading', false).commit();
						localServer.dispatchUpdate('/loading', loadedPatch);
					});
			})
			.fail((err) => {
				const patch = errors.set('signup', err).commit();
				localServer.dispatchUpdate('/errors', patch);

				const loadedPatch = loading.set('loading', false).commit();
				localServer.dispatchUpdate('/loading', loadedPatch);
			});
	},
	'/sign-in': ({username, password}) => {
		hoodie.account.signIn(username, password)
			.done((username) => {

				hoodie.stripe.customers.retrieve({includeCharges:true})
					.then((data) => {
						const patch = userInfos
							.set('card', data.sources.data ? data.sources.data[0] : undefined)
							.set('plan',``)
							.set('username', hoodie.account.username)
							.set('charges', data.charges.data ? data.charges.data : undefined)
							.set('subscription', data.subscriptions ? data.subscriptions.data[0] : undefined)
							.commit();
						localServer.dispatchUpdate('/userInfos', patch);
					})
					.catch((err) => {
						const patch = errors.set('signin', err).commit();
						localServer.dispatchUpdate('/errors', patch);
					});

				UserValues.get({typeface: 'default'})
					.then(({values}) => {
						const patch = userInfos
							.set('firstName', values.firstName)
							.set('lastName', values.lastName)
							.set('website', values.website)
							.set('twitter', values.twitter)
							.commit();

						localServer.dispatchUpdate('/userInfos', patch);
				});
			})
			.fail((err) => {
				const patch = errors.set('signin', err).commit();
				localServer.dispatchUpdate('/errors', patch);
			});
	},
	'/reset-password': ({username}) => {
		hoodie.account.resetPassword(username)
		.then(() => {
			const patchError = errors.set('passwordReset', undefined).commit();
			localServer.dispatchUpdate('/errors', patchError);
			const patch = userInfos.set('passwordReset', true).commit();
			localServer.dispatchUpdate('/userInfos', patch);
		})
		.catch((err) => {
			const patch = errors.set('passwordReset', err).commit();
			localServer.dispatchUpdate('/errors', patch);
		});
	},
	'/logout': () => {
		hoodie.account.signOut()
			.done(() => {
				const patch = userInfos
					.set('username', undefined)
					.set('card', undefined)
					.set('plan', undefined)
					.commit();
				localServer.dispatchUpdate('/userInfos', patch);
			})
			.fail(() => {
			});
	},
	'/add-card': ({card, invoice_address, buyer_name, cb}) => {
		const loadPatch = loading.set('loading', true).commit();
		localServer.dispatchUpdate('/loading', loadPatch);

		Stripe.card.createToken(card , (status, data) => {
			if (data.error) {
				const patch = errors.set('card', data.error).commit();
				localServer.dispatchUpdate('/errors', patch);

				const loadedPatch = loading.set('loading', false).commit();
				return localServer.dispatchUpdate('/loading', loadedPatch);
			}

			hoodie.stripe.customers.retrieve()
				.then((dataCustomer) => {
					hoodie.stripe.customers.update({
						source: data.id,
						invoice_address,
						buyer_name,
						buyer_credit_card_prefix: card.number.substr(0,9),
					})
					.then((dataUpdate) => {
						const patchCard = userInfos
							.set('card', data.card)
							.set('plan', dataUpdate.plan)
							.set('subscription', dataCustomer.subscriptions ? dataCustomer.subscriptions.data[0] : undefined)
							.commit();
						localServer.dispatchUpdate('/userInfos', patchCard);

						saveUserValues({
							invoice_address,
							buyer_name,
						}, () => {}, (err) => {
								const patch = errors.set('invoiceAddress', err).commit();
								localServer.dispatchUpdate('/errors', patch);
							});


						const patch = errors.set('card', undefined).commit();
						localServer.dispatchUpdate('/errors', patch);

						const patchSuccess = success.set('message', `You successufully changed your card`).commit();
						localServer.dispatchUpdate('/success', patchSuccess);

						const loadedPatch = loading.set('loading', false).commit();
						localServer.dispatchUpdate('/loading', loadedPatch);

						return cb();
					})
					.catch((err) => {
						const patch = errors.set('card', err).commit();
						localServer.dispatchUpdate('/errors', patch);

						const loadedPatch = loading.set('loading', false).commit();
						localServer.dispatchUpdate('/loading', loadedPatch);
					});
				})
				.catch((err) => {
					hoodie.stripe.customers.create({
						email: hoodie.account.username,
						'buyer_email': hoodie.account.username,
						source: data.id,
						invoice_address,
						buyer_name,
						buyer_credit_card_prefix: card.number.substr(0,9),
					})
					.then((data) => {
						const patchCard = userInfos
							.set('card', data.card)
							.set('invoice_address', invoice_address)
							.set('buyer_name', buyer_name)
							.commit();
						localServer.dispatchUpdate('/userInfos', patchCard);

						const patch = errors.set('card', undefined).commit();
						localServer.dispatchUpdate('/errors', patch);

						const patchSuccess = success.set('message', `You successufully changed your card`).commit();
						localServer.dispatchUpdate('/success', patchSuccess);

						const loadedPatch = loading.set('loading', false).commit();
						localServer.dispatchUpdate('/loading', loadedPatch);

						return cb();
					})
					.catch((err) => {
						const patch = errors.set('card', err).commit();
						localServer.dispatchUpdate('/errors', patch);

						const loadedPatch = loading.set('loading', false).commit();
						localServer.dispatchUpdate('/loading', loadedPatch);
					});
				});

		});
	},
	'/to-the-app': () => {
		const bearerToken = JSON.parse(localStorage['_hoodie_config'])['_account.bearerToken'];

		location.href = `http://app.prototypo.io?bt=${bearerToken}`;
	},
	'/choose-plan': ({plan, coupon}) => {
		const patch = userInfos
			.set('plan',plan)
			.set('coupon',coupon)
			.commit();
		localServer.dispatchUpdate('/userInfos', patch);
	},
	'/confirm-plan': () => {
		if (userInfos.get('plan')) {
			location.hash = '#/confirmation';
			const patch = errors.set('plan', undefined).commit();
			localServer.dispatchUpdate('/errors', patch);
		}
		else {
			const patch = errors.set('plan', {message: 'Choose a plan before confirming'}).commit();
			localServer.dispatchUpdate('/errors', patch);
		}
	},
	'/subscribe': () => {
		const loadPatch = loading.set('loading', true).commit();
		localServer.dispatchUpdate('/loading', loadPatch);

		hoodie.stripe.customers.updateSubscription({
			plan: userInfos.get('plan'),
			coupon: userInfos.get('coupon'),
		})
		.then(() => {
			
			hoodie.stripe.customers.retrieve()
				.then((data) => {
					const patch = userInfos
						.set('subscription', data.subscriptions ? data.subscriptions.data[0] : undefined)
						.commit();
					localServer.dispatchUpdate('/userInfos', patch);

					const patchSuccess = success.set('message', `You successufully changed your subscription`).commit();
					localServer.dispatchUpdate('/success', patchSuccess);

					const loadedPatch = loading.set('loading', false).commit();
					localServer.dispatchUpdate('/loading', loadedPatch);

					location.hash = '#/success';
				});
		})
		.catch((err) => {
			const patch = errors.set('confirmation', err).commit();
			localServer.dispatchUpdate('/errors', patch);

			const loadedPatch = loading.set('loading', false).commit();
			localServer.dispatchUpdate('/loading', loadedPatch);
		});
	},
	'/update-user': (values) => {
		const loadPatch = loading.set('loading', true).commit();
		localServer.dispatchUpdate('/loading', loadPatch);

		saveUserValues(values, () => {
				const patch = success.set('accountUser', true).commit();
				localServer.dispatchUpdate('/success', patch);
				setTimeout(() => {
					const patch = success.set('accountUser', false).commit();
					localServer.dispatchUpdate('/success', patch);
				},2000);
				const patchError = errors.set('accountUser', undefined).commit();
				localServer.dispatchUpdate('/errors', patchError);

				const patchUser = userInfos
					.set('firstName', values.firstName)
					.set('lastName', values.lastName)
					.set('website', values.website)
					.set('twitter', values.twitter)
					.commit();

				localServer.dispatchUpdate('/userInfos', patchUser);

				const loadedPatch = loading.set('loading', false).commit();
				localServer.dispatchUpdate('/loading', loadedPatch);
			}, (err) => {
				const patch = errors.set('accountUser', err).commit();
				localServer.dispatchUpdate('/errors', patch);

				const loadedPatch = loading.set('loading', false).commit();
				localServer.dispatchUpdate('/loading', loadedPatch);
			});
	},
	'/calc-invoice': ({plan}) => {
		const loadPatch = loading.set('loading', true).commit();
		localServer.dispatchUpdate('/loading', loadPatch);

		if (userInfos.get('subscription') && plan === userInfos.get('subscription').plan.id) {
			const patch = upcomingInvoice.set('invoice', undefined).commit();
			localServer.dispatchUpdate('/upcomingInvoice', patch);

			location.hash = '#/change-sub-confirmation';
		}
		else {
			hoodie.stripe.invoices.retrieveUpcoming({
				'subscription_plan':plan,
			})
			.then((data) => {
				const patch = upcomingInvoice.set('invoice', data).commit();
				localServer.dispatchUpdate('/upcomingInvoice', patch);

				const loadedPatch = loading.set('loading', false).commit();
				localServer.dispatchUpdate('/loading', loadedPatch);

				location.hash = '#/change-sub-confirmation';
			})
			.catch((err) => {
				const loadedPatch = loading.set('loading', false).commit();
				localServer.dispatchUpdate('/loading', loadedPatch);
			});
		}
	},
	'/change-address': ({invoice_address, buyer_name, cb}) => {
		if (!buyer_name) {
			const patch = errors.set('addressError', {
				message: 'You have to supply a corporate name or your full name'
			}).commit();
			return localServer.dispatchUpdate('/errors', patch);
		}
		
		let valid = true;
		['street_name', 'city', 'postal_code', 'country'].forEach((field) => {
			if (!invoice_address[field]) {
				const patch = errors.set('addressError', {
					message: `You have to supply a ${field.replace('_', ' ')}`
				}).commit();
				localServer.dispatchUpdate('/errors', patch);

				valid = false;
			}
		});

		if (valid) {

			hoodie.stripe.customers.update({
				invoice_address,
				buyer_name,
			})
			.then((data) => {
				const patch = userInfos
					.set('invoice_address', invoice_address)
					.set('buyer_name', buyer_name)
					.commit();

				localServer.dispatchUpdate('/userInfos', patch);

				const patchSuccess = success.set('message', `You successufully changed your address`).commit();
				localServer.dispatchUpdate('/success', patchSuccess);

				saveUserValues({
					invoice_address,
					buyer_name,
				}, () => {}, (err) => {
						const patch = errors.set('invoiceAddress', err).commit();
						localServer.dispatchUpdate('/errors', patch);
					});

				if (cb) {
					cb();
				}
			})
			.catch((err) => {
				const patch = errors.set('addressError', err).commit();
				localServer.dispatchUpdate('/errors', patch);
			});
		}
	},
	'/current-tab': (name) => {
		const patch = tabs.set('current', name).commit();
		localServer.dispatchUpdate('/tabs', patch);
	},
	'/change-password': ({newPassword, oldPassword}) => {
		hoodie.account.changePassword(oldPassword, newPassword)
			.then(() => {
				const patch = errors.set('changePassword', undefined).commit();
				localServer.dispatchUpdate('/errors', patch);
				const patchSuccess = success.set('message', `You're password has been changed`).commit();
				localServer.dispatchUpdate('/success', patchSuccess);
				location.hash = '#/success';
			})
			.catch((err) => {
				const patch = errors.set('changePassword', err).commit();
				localServer.dispatchUpdate('/errors', patch);
			});
	},
}

if (hoodie.account.username) {
		const patch = userInfos.set('username', hoodie.account.username).commit();
		localServer.dispatchUpdate('/userInfos', patch);
}

localServer.on('action',({path, params}) => {

	if ( actions[path] !== void 0 ) {
		actions[path](params);
	}

}, localServer.lifespan);


class App extends React.Component {
	render() {
		return (
			<div className="paymentApp">
				<BreadCrumb />
				{this.props.children}
			</div>
		)
	}
}

hoodie.stripe.customers.retrieve({includeCharges:true})
	.then((data) => {
		const patch = userInfos
			.set('card', data.sources.data[0])
			.set('plan',`personal_${sessionStorage.recurrence}_${ currencyService.getCurrency(data.sources.data[0])}_taxfree`)
			.set('subscription', data.subscriptions.data[0])
			.set('charges', data.charges.data ? data.charges.data : undefined)
			.commit();
		localServer.dispatchUpdate('/userInfos', patch);
	});

UserValues.get({typeface: 'default'})
	.then(({values}) => {
		const patch = userInfos
			.set('firstName', values.firstName)
			.set('lastName', values.lastName)
			.set('website', values.website)
			.set('twitter', values.twitter)
			.set('invoice_address', values.invoice_address)
			.set('buyer_name', values.buyer_name)
			.commit();

		localServer.dispatchUpdate('/userInfos', patch);
	});

render(<Header />, document.getElementById('header-container'));

window.setupPayment = () => {

	const patch = paymentStore
		.set('plan', sessionStorage.plan)
		.set('recurrence', sessionStorage.recurrence)
		.commit();

	localServer.dispatchUpdate('/paymentStore', patch);

	render((
		<Router>
			<Route path="/" component={App}>
				<IndexRoute component={SignupPanel}/>
				<Route path="signup" component={SignupPanel}/>
				<Route path="card" component={CardPanel}/>
				<Route path="address" component={AddressPanel}/>
				<Route path="plan" component={PlanPanel}/>
				<Route path="confirmation" component={ConfirmationPanel}/>
				<Route path="success" component={SuccessPanel}/>
			</Route>
		</Router>
	), document.getElementById('payment-container'));
}

window.setupAccount = () => {
	render((
		<Router>
			<Route path="/" component={Account}>
				<IndexRoute component={UserPanel}/>
				<Route path="user" component={UserPanel}/>
				<Route path="change-password" component={ChangePassword}/>
				<Route path="account" component={SubscriptionPanel}/>
				<Route path="app" component={FontPanel}/>
				<Route path="change-sub" component={ChangeSubPanel}/>
				<Route path="change-sub-confirmation" component={ChangeSubConfirmationPanel}/>
				<Route path="change-card" component={ChangeCardPanel}/>
				<Route path="change-invoice-address" component={ChangeInvoiceAddress}/>
				<Route path="success" component={AccountSuccessPanel}/>
			</Route>
		</Router>
	), document.getElementById('account-container'));
}
