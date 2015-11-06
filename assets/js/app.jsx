require('babel-polyfill');
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import SignupPanel from './payment/signup.components.jsx';
import BreadCrumb from './payment/breadcrumb.components.jsx';
import CardPanel from './payment/card.components.jsx';
import PlanPanel from './payment/plan.components.jsx';
import SuccessPanel from './payment/success.components.jsx';
import ConfirmationPanel from './payment/confirmation.components.jsx';
import Remutable from 'remutable';
import {LocalClient, LocalServer} from './stores/local-client-server.stores.jsx';
import Header from './account/header.components.jsx';
import currencyService from './services/currency.services.jsx';
import Account from './account/account.components.jsx';
import UserPanel from './account/user.components.jsx';
import SubscriptionPanel from './account/subscription.components.jsx';
import FontPanel from './account/font.components.jsx';

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
		name: 'Prototypo professional annual USD subscription',
		recurrence: 'year',
		realAmount: '$96.00',
	},
	'personal_annual_EUR_taxfree': {
		name: 'Prototypo professional annual EUR subscription',
		recurrence: 'year',
		realAmount: '96.00€',
	},
	'personal_monthly_USD_taxfree': {
		name: 'Prototypo professional monthly USD subscription',
		recurrence: 'month',
		realAmount: '$8.00',
	},
	'personal_monthly_EUR_taxfree': {
		name: 'Prototypo professional monthly EUR subscription',
		recurrence: 'month',
		realAmount: '8.00€',
	}
});

const paymentStore = stores['/paymentStore'] = new Remutable({});

const breadcrumbStore = stores['/breadcrumb'] = new Remutable({});

const errors = stores['/errors'] = new Remutable({});

const userInfos = stores['/userInfos'] = new Remutable({});

const actions = {
	'/set-breadcrumb': (state) => {
		const patch = breadcrumbStore.set('state', state).commit();

		localServer.dispatchUpdate('/breadcrumb', patch);
	},
	'/sign-up': ({username, password}) => {
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
						location.hash = '#/card';
					})
					.catch((err) => {
						const patch = errors.set('signup', err).commit();
						localServer.dispatchUpdate('/errors', patch);
					});
			})
			.fail((err) => {
				const patch = errors.set('signup', err).commit();
				localServer.dispatchUpdate('/errors', patch);
			});
	},
	'/sign-in': ({username, password}) => {
		hoodie.account.signIn(username, password)
			.done((username) => {

				hoodie.stripe.customers.retrieve()
					.then((data) => {
						const patch = userInfos
							.set('card', data.sources.data ? data.sources.data[0] : undefined)
							.set('plan',``)
							.set('username', hoodie.account.username)
							.commit();
						localServer.dispatchUpdate('/userInfos', patch);
					})
					.catch((err) => {
						const patch = errors.set('signin', err).commit();
						localServer.dispatchUpdate('/errors', patch);
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
	'/add-card': (card) => {
		Stripe.card.createToken(card , (status, data) => {
			if (data.error) {
				const patch = errors.set('card', data.error).commit();
				return localServer.dispatchUpdate('/errors', patch);
			}

			hoodie.stripe.customers.retrieve()
				.then(() => {
					hoodie.stripe.customers.update({
						source: data.id,
					})
					.then(() => {
						location.hash = '#/plan';
						const patchCard = userInfos
							.set('card', data.card)
							.set('plan',`personal_${sessionStorage.plan}_${ currencyService.getCurrency(data.card.country)}_taxfree`)
							.commit();
						localServer.dispatchUpdate('/userInfos', patchCard);

						const patch = errors.set('card', undefined).commit();
						return localServer.dispatchUpdate('/errors', patch);
					})
					.catch((err) => {
						const patch = errors.set('card', err).commit();
						localServer.dispatchUpdate('/errors', patch);
					});
				})
				.catch((err) => {
					hoodie.stripe.customers.create({
						email: hoodie.account.username,
						'buyer_email': hoodie.account.username,
						source: data.id,
					})
					.then((data) => {
						location.hash = '#/plan';
						const patchCard = userInfos.set('card', data.card).commit();
						localServer.dispatchUpdate('/userInfos', patchCard);

						const patch = errors.set('card', undefined).commit();
						return localServer.dispatchUpdate('/errors', patch);
					})
					.catch((err) => {
						const patch = errors.set('card', err).commit();
						localServer.dispatchUpdate('/errors', patch);
					});
				});

		});
	},
	'/to-the-app': () => {
		const bearerToken = JSON.parse(localStorage['_hoodie_config'])['_account.bearerToken'];

		location.href = `http://app.prototypo.io?bt=${bearerToken}`;
	},
	'/choose-plan': (plan) => {
		const patch = userInfos.set('plan',plan).commit();
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
		hoodie.stripe.customers.updateSubscription({
			plan: userInfos.get('plan'),
		})
		.then(() => {
			location.hash = '#/success';
		})
		.catch((err) => {
			const patch = errors.set('confirmation', err).commit();
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

render(<Header />, document.getElementById('header-container'));

window.setupPayment = () => {

	const patch = paymentStore
		.set('plan', sessionStorage.plan)
		.set('recurrence', sessionStorage.recurrence)
		.commit();

	localServer.dispatchUpdate('/paymentStore', patch);


	hoodie.stripe.customers.retrieve()
		.then((data) => {
			const patch = userInfos
			.set('card', data.sources.data[0])
			.set('plan',`personal_${sessionStorage.recurrence}_${ currencyService.getCurrency(data.sources.data[0])}_taxfree`)
			.commit();
			localServer.dispatchUpdate('/userInfos', patch);
		});

	render((
		<Router>
			<Route path="/" component={App}>
				<Route path="signup" component={SignupPanel}/>
				<Route path="card" component={CardPanel}/>
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
				<Route path="account" component={SubscriptionPanel}/>
				<Route path="app" component={FontPanel}/>
			</Route>
		</Router>
	), document.getElementById('account-container'));
}
