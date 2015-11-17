import React from 'react';
import Lifespan from 'lifespan';

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
					'invoice_address': head.toJS().invoice_address,
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
		this.setState({
			[name]: e.target.value,
		});
	}

	handleNameChange(e) {
		this.setState({
			'buyer_name': e.target.value,
		});
	}

	changeInvoiceAddress(e) {
		e.preventDefault();

		const invoice_address = {
			building_number: this.state.building_number,
			street_name: this.state.street_name,
			address_detail: this.state.address_detail,
			city: this.state.city,
			postal_code: this.state.postal_code,
			region: this.state.region,
			country: this.state.country,
		}

		this.client.dispatchAction('/change-address',{
			invoice_address,
			buyer_name: this.state.buyer_name,
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
