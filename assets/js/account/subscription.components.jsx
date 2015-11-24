import React from 'react';
import Lifespan from 'lifespan';
import moment from 'moment';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

import ShowCard from '../components/show-card.components.jsx';
import ChoosePlan from '../components/choose-plan.components.jsx';
import InvoiceAddress from '../components/invoice-address.components.jsx';
import ShowInvoiceAddress from '../components/show-invoice-address.components.jsx';
import InvoiceList from '../components/invoice-list.components.jsx';

export default class SubscriptionPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			plan: {},
		};
	}
	async componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client.dispatchAction('/current-tab', 'account');

		const noPlan = {
			name: 'You do not have a subscription',
		}

		const plansInfos = await this.client.fetch('/plansInfos');

		this.setState({
			plan: plansInfos.head.toJS()[this.state.planId] || noPlan,
		});

		this.client.getStore('/userInfos', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					card: head.toJS().card,
					subscription: head.toJS().subscription,
					plan: head.toJS().subscription ? plansInfos.head.toJS()[head.toJS().subscription.plan.id] : noPlan,
					endDate: head.toJS().subscription ? moment.unix(head.toJS().subscription.current_period_end).format('L') : undefined,
					'invoice_address': head.toJS().invoice_address,
					'buyer_name': head.toJS().buyer_name,
					charges: head.toJS().charges,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}
	render() {
		const card = this.state.card ? (
			<div className="card-info clearfix">
				<ShowCard card={this.state.card}/>
				<div className="success-message hidden" id="success-card-message">Card successfuly submitted</div>
			</div>
		) : (
			<p className="message-error">
				You don't have any cards registered.
			</p>
		);

		const endDate = this.state.endDate ? (
			<div className="subscription-date">
				<label htmlFor="subscription" className="form-label">End of subscription period</label>
				<div className="user-infos marginTop15">{this.state.endDate}</div>
			</div>
		) : false;

		const changeSub = <ChoosePlan />

		const invoiceAddress = this.state.invoice_address && Object.keys(this.state.invoice_address).length > 0 ? (
			<div className="clearfix marginTop30">
				<p className="textSize-title-small marginTop30 marginBottom15">Billing address</p>
				<ShowInvoiceAddress invoice={this.state.invoice_address} buyerName={this.state.buyer_name}/>
				<button onClick={() => { location.hash = '#/change-invoice-address'}} className="account-card-form-toggle-target change-card-toggle form-label btn-danger marginTop30 right">Change billing address</button>
			</div>
		) : (
			<div className="clearfix marginTop30">
				<p className="textSize-title-small marginTop30 marginBottom15">Billing address</p>
				<p className="message">You do not have an invoicing address right now</p>
				<button onClick={() => { location.hash = '#/change-invoice-address'}} className="account-card-form-toggle-target change-card-toggle form-label btn-danger marginTop30 right">Add billing address</button>
			</div>
		);

		const changeSubBtn = this.state.card ? (
			<button id="change-subscription" className="change-subscription-toggle form-label btn-danger account-plan-toggle-target" onClick={() => {location.hash = '#/change-sub'}}>Change subscription</button>
		) : (
			<p className="message">You have to add a card to switch subscription</p>
		);

		return (
			<div className="subscription-panel">
				<div id="target-tab-account" className="clearfix">
					<div className="subscribe">

						<div className="clearfix">
							<p className="textSize-title-small marginTop30 marginBottom15">Your current subscription</p>
							<label className="form-label marginTop15">Your plan</label>
							<div className="user-infos marginTop15 marginBottom15" id="logged-in-subscription">{this.state.plan.name}</div>
							{endDate}
						</div>

						<div className="clearfix marginTop30">
							<div className="right">
								<label id="success-plan-message" htmlFor="" className="success-message hidden">You've successfuly changed your plan!</label>
								{changeSubBtn}
							</div>
						</div>

						<div id="error-create-customer" className="textType-txt textSize-txt-large marginBottom30 general-infos hidden">
							There was an error during your subscription. We've subscribed your account to the Free subscription. To subscribe you will need to add a valid card at the bottom of the page and then subscribe to the launch plan.
						</div>

						<div className="clearfix marginTop30">
							<p className="textSize-title-small marginTop30 marginBottom15">Payment details</p>
							{card}
							<button id="change-card" onClick={() => { location.hash = '#/change-card'}} className="account-card-form-toggle-target change-card-toggle form-label btn-danger marginTop30 right">Change card</button>
						</div>

						{invoiceAddress}

						<div className="clearfix marginTop30">
							<p className="textSize-title-small marginBottom15">Your invoices</p>
							<InvoiceList invoices={this.state.charges}/>
						</div>

					</div>

				</div>
			</div>
		)
	}
}
