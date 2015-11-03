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

	subscribe() {
		this.client.dispatchAction('/subscribe');
	}

	render() {
		const error = this.state.error ? (
			<div className="errors">{this.state.error.message}</div>
		) : false;

		return (
			<div className="confirmation-panel">
				<div className="confirmation-panel-subscription">
					<p>You chose {this.state.plan.name}.</p>
					<p>You will be charged every {this.state.plan.recurrence} the following amount :</p>
					<p>{this.state.plan.realAmount}</p>
				</div>
				<div className="confirmation-panel-card">
					<p>This is the card that will be used</p>
					<p>Card number</p>
					<p>**** **** **** {this.state.card.last4}</p>
					<p>Exp. date</p>
					<p>{this.state.card.exp_month}/{this.state.card.exp_year}</p>
				</div>
				{error}
				<button onClick={() => { this.subscribe() }} >Subscribe to prototypo</button>
			</div>
		)
	}
}
