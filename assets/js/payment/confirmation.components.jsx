import React from 'react';
import {LocalClient} from '../stores/local-client-server.stores.jsx';
import CurrencyService from '../services/currency.services.jsx';
import Lifespan from 'lifespan';

export default class ConfirmationPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			plan:{},
			card:{},
		};
	}

	async componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();
		this.client.dispatchAction('/set-breadcrumb', 'confirmation');

		this.client.getStore('/errors', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					error: head.toJS().confirmation,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		const userInfos = await this.client.fetch('/userInfos');

		const plansInfos = await this.client.fetch('/plansInfos');

		this.setState({
			plan: plansInfos.head.toJS()[userInfos.head.toJS().plan],
			card: userInfos.head.toJS().card,
		})
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	subscribe() {
		this.client.dispatchAction('/subscribe');
	}

	render() {
		const error = this.state.error ? (
			<div className="message message-error">{this.state.error.message}</div>
		) : false;

		return (
			<div className="confirmation-panel">
				<div className="confirmation-panel-subscription marginBottom30 clearfix">
					<p className="message message-success marginBottom30">You chose {this.state.plan.name}.</p>
					<div className="w50 left">
						<p className="form-label">You will be charged every {this.state.plan.recurrence} the following amount :</p>
					</div>
					<div className="w50 left">
						<p className="user-infos">{this.state.plan.realAmount}</p>
					</div>
				</div>
				<div className="confirmation-panel-card clearfix marginTop30">
					<div className="w50 left">
						<p className="form-label">Card number</p>
						<p className="user-infos">**** **** **** {this.state.card.last4}</p>
					</div>
					<div className="w50 left">
						<p className="form-label">Expiration date</p>
						<p className="user-infos">{this.state.card.exp_month}/{this.state.card.exp_year}</p>
					</div>
				</div>
				<p className="message message-error">{error}</p>
				<button className="form-label btn-success marginTop30" onClick={() => { this.subscribe() }} >I confirm my subscription</button>
			</div>
		)
	}
}
