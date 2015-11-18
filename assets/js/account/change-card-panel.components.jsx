import React from 'react';
import Lifespan from 'lifespan';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

import AddCard from '../components/add-card.components.jsx';
import WaitForLoad from '../components/wait-for-load.components.jsx';

export default class ChangeCardPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client.getStore('/errors', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					error: head.toJS().card,
				})
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
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	handleCardChange(e, name) {
		this.setState({
			[name]: e.target.value,
		})
	}

	createCard(e) {
		e.preventDefault();
		e.stopPropagation();
		const card = {
			number: this.state.cardNumber,
			cvc: this.state.cvc,
			exp_month: this.state.expMonth,
			exp_year: this.state.expYear,
		}

		this.client.dispatchAction('/add-card', {
			card,
			cb:() => { location.hash = '#/success';},
		});
	}
	
	render() {
		const error = this.state.error ? (
			<p className="message-error">{this.state.error.message}</p>
		) : false;

		return (
			<div className="change-card-panel">
				<form onSubmit={(e) => { this.createCard(e) }}>
					<AddCard handleChange={(e, name) => {this.handleCardChange(e,name)}}/>
					{error}
					<WaitForLoad loaded={!this.state.loading}>
						<button className="form-label btn-success marginTop30" type="submit">Change card</button>
					</WaitForLoad>
				</form>
			</div>
		)
	}
}
