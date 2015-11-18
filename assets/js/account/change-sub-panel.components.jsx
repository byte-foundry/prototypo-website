import React from 'react';
import Lifespan from 'lifespan';

import currencyService from '../services/currency.services.jsx';
import {LocalClient} from '../stores/local-client-server.stores.jsx';

import ChoosePlan from '../components/choose-plan.components.jsx';
import WaitForLoad from '../components/wait-for-load.components.jsx';

export default class ChangeSubPanel extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	async componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		const plansStore = await this.client.fetch('/plans');
		const paymentStore = await this.client.fetch('/paymentStore');
		const userInfos = await this.client.fetch('/userInfos');
		const plansInfos = await this.client.fetch('/plansInfos');

		const plans = plansStore.head.toJS();
		const card = userInfos.head.toJS().card;

		const noPlan = {
			name: 'Free plan',
		}

		this.client.getStore('/userInfos', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					card: head.toJS().card,
					plan: head.toJS().subscription ? plansInfos.head.toJS()[head.toJS().subscription.plan.id] : noPlan,
					planId: head.toJS().plan || ( head.toJS().subscription ? head.toJS().subscription.plan.id : ''),
					freePlan:`free_monthly_${ currencyService.getCurrency(head.toJS().card.country)}_taxfree`,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client.getStore('/loading', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					loading: head.toJS().loading,
				})
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.setState({
			plans,
			card,
		});
	}

	componentWillUnmount() {
		this.lifespan.release();
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

		return (
			<div className="change-sub-panel">
				<p className="textSize-title-small marginBottom30">Change the subscription</p>
				<p>You're currently subscribed to {this.state.plan ? this.state.plan.name : ''}</p>
				<ChoosePlan plans={this.state.plans} plan="launch" card={this.state.card} monthlyState={monthlyState} annualState={annualState}/>
				<WaitForLoad loaded={!this.state.loading}>
					<button disabled={!this.state.planId} className="form-label btn-success marginTop30 marginRight15" onClick={() => { this.client.dispatchAction('/calc-invoice',{plan: this.state.planId})}}>Change subscription</button>
					<button className="form-label btn-danger marginTop30" onClick={() => { this.client.dispatchAction('/calc-invoice',{plan: this.state.freePlan})}}>Cancel subscription</button>
				</WaitForLoad>
			</div>
		)
	}
}
