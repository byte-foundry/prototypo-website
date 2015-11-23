import React from 'react';
import Lifespan from 'lifespan';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

import InvoiceAddress from '../components/invoice-address.components.jsx';
import WaitForLoad from '../components/wait-for-load.components.jsx';

export default class AddressPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();
		this.client.dispatchAction('/set-breadcrumb', 'address')

		this.client.getStore('/loading', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					loading: head.toJS().loading,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client.getStore('/errors', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					error: head.toJS().addressError,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	addAddress(e) {
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

		this.client.dispatchAction('/change-address', {
			invoice_address,
			buyer_name: this.state.buyer_name,
			cb: () => { location.href = '#/plan'; },
		});
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
		const error = this.state.error ? (
			<p className="message-error">{this.state.error.message}</p>
		) : false;

		return (
			<div className="invoice-address-panel">
				<form onSubmit={(e) => { this.addAddress(e) }}>
					<InvoiceAddress invoice_address={this.state.invoice_address || {}} buyer_name={this.state.buyer_name} handleChange={(e,name) => { this.handleAddressChange(e, name) }} handleNameChange={(e) => { this.handleNameChange(e)}}/>
					{error}
					<WaitForLoad loaded={!this.state.loading}>
						<button className="form-label btn-success marginRight15" type="submit">Add my address</button>
					</WaitForLoad>
				</form>
			</div>
		)
	}
}
