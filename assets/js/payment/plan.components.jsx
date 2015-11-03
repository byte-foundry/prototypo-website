import React from 'react';
import ReactDOM from 'react-dom';
import {LocalClient} from '../stores/local-client-server.stores.jsx';
import currencyService from '../services/currency.services.jsx';
import Classnames from 'classnames';
import Lifespan from 'lifespan';

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

	choosePlan(plan) {
		ReactDOM.findDOMNode(this.refs[plan]).checked = true;
		this.client.dispatchAction('/choose-plan', `personal_${plan}_${ currencyService.getCurrency(this.state.card.country)}_taxfree`);
	}

	confirmPlan() {
		this.client.dispatchAction('/confirm-plan',{});
	}

	render() {

		const monthly = this.state.plans ? this.state.plans['monthly'][this.state.plan] : {};
		const annual = this.state.plans ? this.state.plans['annual'][this.state.plan] : {};

		const currency = currencyService.getCurrency(this.state.card ? this.state.card.country : 'EUR');

		const currencyClass = Classnames({
			currency: true,
			usd: currency === 'USD',
		});

		const monthCurrency = Classnames({
			currency: true,
			price: true,
			priceMonth: true,
			usd: currency === 'USD',
		});

		const yearCurrency = Classnames({
			currency: true,
			price: true,
			priceAnnual: true,
			usd: currency === 'USD',
		});

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
				<div id="select-plan-wrap" className="subscribe">
					<div className="radio-wrap" id="recurrence-selector">
						<input id="monthly" type="radio" name="monthYearSwitch" className="monthYearSwitch" value="monthly" ref="monthly" checked={monthlyState}></input>
						<label className="radio text-center" htmlFor="monthly" onClick={() => { this.choosePlan('monthly')}} >
							<div className="plan"><div className="type">Monthly billing: <div className="launch-infos">The first 6 month, <span className={currencyClass}>{monthly.realTotal}</span> after</div></div><span className={monthCurrency}>{monthly.amount}</span></div>
						</label>
						<input id="annual" type="radio" name="monthYearSwitch" className="monthYearSwitch" value="annual" ref="annual" checked={annualState}></input>
						<label className="radio text-center" htmlFor="annual" onClick={() => { this.choosePlan('annual')}}>
							<div className="plan"><div className="type">Annual billing: <div className="launch-infos">One year for <span className={currencyClass}>{annual.total}</span> instead of <span className={currencyClass}>{annual.realTotal}</span></div></div><span className={yearCurrency}>{annual.amount}</span></div>
						</label>
					</div>
				</div>
				{error}
				<button onClick={() => { this.confirmPlan() }}>Checkout</button>
			</div>
		)
	}
}
