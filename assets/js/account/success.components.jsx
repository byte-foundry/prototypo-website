import React from 'react';
import Lifespan from 'lifespan';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

export default class AccountSuccessPanel extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client.getStore('/success', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					message: head.toJS().message,
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

		return (
			<div className="success-panel">
				<p className="message message-success">{this.state.message}</p>
				<a className="btn btn-success link marginTop30" href="#/account">Back to account</a>
			</div>
		)
	}
}
