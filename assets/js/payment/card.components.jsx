import React from 'react';
import ReactDOM from 'react-dom';
import Lifespan from 'lifespan';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

import ShowCard from '../components/show-card.components.jsx';
import AddCard from '../components/add-card.components.jsx';
import InvoiceAddress from '../components/invoice-address.components.jsx';

export default class CardPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();
		this.client.dispatchAction('/set-breadcrumb', 'card')

		this.client.getStore('/errors', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					error: head.toJS().card,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client.getStore('/userInfos', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					card: head.toJS().card,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
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

		const invoice_address = {
			building_number: this.state.building_number,
			street_name: this.state.street_name,
			address_detail: this.state.address_detail,
			city: this.state.city,
			postal_code: this.state.postal_code,
			region: this.state.region,
			country: this.state.country,
		}

		this.client.dispatchAction('/add-card', {
			card,
			invoice_address,
			buyer_name: this.state.buyer_name,
			cb: () => { location.hash = '#/plan';},
		});
	}

	tryForFree(e) {
		e.preventDefault();
		e.stopPropagation();

		this.client.dispatchAction('/to-the-app',{});
	}

	handleCardChange(e, name) {
		this.setState({
			[name]: e.target.value,
		})
	}

	handleAddressChange(e, name) {
		this.setState({
			[name]: e.target.value,
		});
	}

	handleNameChange(e) {
		this.setState({
			'buyer_name': e.target.value,
		});
	}

	render() {
		if (this.state.card) {
			return (
				<div className="card-panel">
					<p className="message message-success">You already added a card</p>
					<ShowCard card={this.state.card}/>
					<a className="btn link btn-success marginTop30" href="#/plan">Now choose a plan</a>
				</div>
			)
		}

		const error = this.state.error ? (
			<div className="card-panel-error">{this.state.error.message}</div>
		) : false;

		const invoiceAddress = this.state.toggleAddress ? (
			<InvoiceAddress handleChange={(e,name) => { this.handleAddressChange(e, name) }} handleNameChange={(e) => { this.handleNameChange(e)}}/>
		) : false;

		return (
			<div className="card-panel">
				<form onSubmit={(e) => {this.createCard(e)}}>
					<AddCard handleChange={(e, name) => {this.handleCardChange(e,name)}}/>
					<div className="message message-error">{error}</div>
					<button className="form-label btn-danger" onClick={(e) => { e.preventDefault(); this.setState({toggleAddress: !this.state.toggleAddress})}}>Add an invoicing address</button>
					{invoiceAddress}
					<div className="marginTop30">
						<button className="form-label btn-success" type="submit">Add my card</button>
						<button className="form-label btn-danger" onClick={(e) => { this.tryForFree(e)}}>I just want to try for free!</button>
					</div>
				</form>
			</div>
		)
	}
}
