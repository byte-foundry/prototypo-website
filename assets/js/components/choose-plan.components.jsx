import React from 'react';
import ReactDOM from 'react-dom';
import Classnames from 'classnames';

import currencyService from '../services/currency.services.jsx';
import {LocalClient} from '../stores/local-client-server.stores.jsx';

export default class ChoosePlan extends React.Component {
	componentWillMount() {
		this.client = LocalClient.instance();
	}

	choosePlan(plan) {
		ReactDOM.findDOMNode(this.refs[plan]).checked = true;
		this.client.dispatchAction('/choose-plan', {
			plan:`personal_${plan}_${ currencyService.getCurrency(this.props.card.country)}_taxfree`,
			coupon: `noel_${plan}_${ currencyService.getCurrency(this.props.card.country)}`,
		});
	}

	render() {
		const monthly = this.props.plans ? this.props.plans['monthly'][this.props.plan] : {};
		const annual = this.props.plans ? this.props.plans['annual'][this.props.plan] : {};

		const currency = currencyService.getCurrency(this.props.card ? this.props.card.country : 'EUR');

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

		return (
			<div id="select-plan-wrap" className="subscribe">
				<div className="radio-wrap" id="recurrence-selector">
					<input id="monthly" type="radio" name="monthYearSwitch" className="monthYearSwitch" value="monthly" ref="monthly" checked={this.props.monthlyState}></input>
					<label className="radio text-center" htmlFor="monthly" onClick={() => { this.choosePlan('monthly')}} >
						<div className="plan"><div className="type">Monthly billing: <div className="launch-infos">The first 6 month, <span className={currencyClass}>{monthly.realTotal}</span> after</div></div><span className={monthCurrency}>{monthly.amount}</span></div>
					</label>
					<input id="annual" type="radio" name="monthYearSwitch" className="monthYearSwitch" value="annual" ref="annual" checked={this.props.annualState}></input>
					<label className="radio text-center" htmlFor="annual" onClick={() => { this.choosePlan('annual')}}>
						<div className="plan"><div className="type">Annual billing: <div className="launch-infos">One year for <span className={currencyClass}>{annual.total}</span> instead of <span className={currencyClass}>{annual.realTotal}</span></div></div><span className={yearCurrency}>{annual.amount}</span></div>
					</label>
				</div>
			</div>
		)
	}
}
