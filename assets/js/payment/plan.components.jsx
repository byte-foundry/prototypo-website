import React from 'react';
import ReactDOM from 'react-dom';
import Classnames from 'classnames';
import Lifespan from 'lifespan';

import {LocalClient} from '../stores/local-client-server.stores.jsx';
import currencyService from '../services/currency.services.jsx';

import ChoosePlan from '../components/choose-plan.components.jsx';

export default class PlanPanel extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	async componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();
		this.client.dispatchAction('/set-breadcrumb', 'plan');

		const paymentStore = await this.client.fetch('/paymentStore');
		const plansStore = await this.client.fetch('/plans');
		const userInfos = await this.client.fetch('/userInfos');

		const {plan, recurrence} = paymentStore.head.toJS();
		const plans = plansStore.head.toJS();
		const card = userInfos.head.toJS().card;
		const planId = userInfos.head.toJS().plan;

		this.client.getStore('/userInfos', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					card: head.toJS().card,
					planId: head.toJS().plan,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client.getStore('/errors', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					error: head.toJS().plan,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			})

		this.setState({
			plan,
			recurrence,
			plans,
			card,
			planId,
		});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	confirmPlan() {
		this.client.dispatchAction('/confirm-plan',{});
	}

	render() {

		let annualState = false;
		let monthlyState = false;

		if (this.state.planId) {
			if (this.state.planId.indexOf('annual') !== -1) {
				annualState = true
			}
			else if (this.state.planId.indexOf('monthly') !== -1) {
				monthlyState = true;
			}
		}

		const error = this.state.error ? (
			<div className="error">{this.state.error.message}</div>
		) : false;

		return (
			<div className="plan-panel">
				<ChoosePlan plans={this.state.plans} plan={this.state.plan} card={this.state.card}/>
				<p className="message message-error">{error}</p>
				<button className="form-label btn-success marginTop30" onClick={() => { this.confirmPlan() }}>Checkout</button>
			</div>
		)
	}
}
