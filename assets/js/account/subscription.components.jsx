import React from 'react';
import Lifespan from 'lifespan';
import moment from 'moment';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

import ShowCard from '../components/show-card.components.jsx';
import ChoosePlan from '../components/choose-plan.components.jsx';
import InvoiceAddress from '../components/invoice-address.components.jsx';

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
					plan: plansInfos.head.toJS()[head.toJS().subscription.plan.id] || noPlan,
					endDate: moment.unix(head.toJS().subscription.current_period_end).format('L'),
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
				<button id="change-card" className="account-card-form-toggle-target change-card-toggle call-danger callToAction marginTop30 right">Change card</button>
			</div>
		) : (
			<div>
				You don't have any cards registered.
				<button id="change-card" className="account-card-form-toggle-target change-card-toggle call-danger callToAction marginTop30 right">Add a card</button>
			</div>
		);

		const endDate = this.state.endDate ? (
			<div className="subscription-date">
				<label htmlFor="subscription" className="form-label">End of subscription period</label>
				<div className="user-infos marginTop15">{this.state.endDate}</div>
			</div>
		) : false;

		const changeSub = <ChoosePlan />

		return (
			<div className="subscription-panel">
				<div id="target-tab-account" className="clearfix">
					<div className="subscribe">

						<div className="clearfix">
							<p className="textSize-title-small marginTop30 marginBottom15">Your current subscription</p>
							<div className="user-infos marginTop15 marginBottom15" id="logged-in-subscription">{this.state.plan.name}</div>
							{endDate}
						</div>

						<div className="clearfix marginTop30">
							<div className="right">
								<label id="success-plan-message" htmlFor="" className="success-message hidden">You've successfuly changed your plan!</label>
								<button id="submit-subscription" className="account-plan-toggle-target hidden call-success callToAction marginTop30 right clearfix hidden marginLeft15">Change my subscription</button>
								<button className="change-subscription-toggle account-plan-toggle-target hidden call-error callToAction marginTop30 right clearfix hidden">Cancel</button>
								<button id="change-subscription" className="change-subscription-toggle call-danger callToAction account-plan-toggle-target">Change subscription</button>
							</div>
						</div>

						<div id="error-create-customer" className="textType-txt textSize-txt-large marginBottom30 general-infos hidden">
							There was an error during your subscription. We've subscribed your account to the Free subscription. To subscribe you will need to add a valid card at the bottom of the page and then subscribe to the launch plan.
						</div>

						<div className="clearfix marginTop30">
							<p className="textSize-title-small marginTop30 marginBottom15">Payment details</p>
							{card}
							<div id="account-card-form" className="subscribe account-card-form-toggle-target">
								<div id="card-form">
									<p className="textSize-title-small ">Change Card</p>
									<button id="change-card-submit" className="call-success callToAction marginTop30 right">Change my card</button>
									<button id="" className="account-card-form-toggle-target change-card-toggle account-card-form-toggle-target hidden call-error callToAction marginRight15 marginTop30 right">Cancel</button>
								</div>
							</div>
						</div>
						
						<InvoiceAddress />

						<div className="clearfix marginTop30">
							<p className="textSize-title-small marginBottom15">Your invoices</p>
							<ul className="list marginTop30">
								<li className="list-item">
									<span className="list-item-date">Dec. 2015</span>
									<span className="list-item-text">in_171eCfEHNnZkutNMRKWwAHPN</span>
									<span className="list-item-download">Download</span>
								</li>
								<li className="list-item">
									<span className="list-item-date">Nov. 2015</span>
									<span className="list-item-text">in_171eCfEHNnZkutNMRKWwAHPN</span>
									<span className="list-item-download">Download</span>
								</li>
								<li className="list-item">
									<span className="list-item-date">Oct. 2015</span>
									<span className="list-item-text">in_171eCfEHNnZkutNMRKWwAHPN</span>
									<span className="list-item-download">Download</span>
								</li>
							</ul>
						</div>

					</div>

				</div>
			</div>
		)
	}
}
