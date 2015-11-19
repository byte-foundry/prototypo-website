import React from 'react';
import Lifespan from 'lifespan';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

import InvoiceAddress from '../components/invoice-address.components.jsx';

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
			})
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	render() {
		return (
			<div className="invoice-address-panel">
				<form onSubmit={(e) => { this.addAddress(e) }}>
					<InvoiceAddress />
					<WaitForLoad loaded={!this.state.loading}>
						<button className="form-label btn-success marginRight15" type="submit">Add my address</button>
					</WaitForLoad>
				</form>
			</div>
		)
	}
}
