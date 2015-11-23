import React from 'react';
import Lifespan from 'lifespan';
import _ from 'lodash';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

import InvoiceAddress from '../components/invoice-address.components.jsx';

export default class ChangeInvoiceAddress extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client.getStore('/userInfos', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					invoice_address: head.toJS().invoice_address,
					buyer_name:head.toJS().buyer_name
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	handleAddressChange(e, name) {
		const invoice_address = _.assign(
			{},
			this.state.invoice_address,
			{[name]: e.target.value}
		);
		this.setState({
			invoice_address
		});
	}

	handleNameChange(e) {
		this.setState({
			'buyer_name': e.target.value,
		});
	}

	changeInvoiceAddress(e) {
		e.preventDefault();

		this.client.dispatchAction('/change-address',{
			invoice_address: this.state.invoice_address,
			buyer_name: this.state.buyer_name,
			cb: () => {
				location.href = '#/success';
			}
		});
	}

	render() {
		return (
			<div className="change-invoice-address">
				<form onSubmit={(e) => { this.changeInvoiceAddress(e) }}>
					<InvoiceAddress invoice_address={this.state.invoice_address || {}} buyer_name={this.state.buyer_name} handleChange={(e,name) => { this.handleAddressChange(e, name) }} handleNameChange={(e) => { this.handleNameChange(e)}}/>
					<button className="account-card-form-toggle-target change-card-toggle call-danger callToAction marginTop30 right" type="submit">Save new address</button>
				</form>
			</div>
		)
	}
}
