import React from 'react';
import Lifespan from 'lifespan';
import _ from 'lodash';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

export default class ChangeSubConfirmationPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client.getStore('/upcomingInvoice', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					invoice: head.toJS().invoice,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmoun() {
		this.lifespan.release();
	}

	render() {
		if (this.state.invoice) {
			return (
				<div className="change-sub-confirmation">
					<p>This is the invoice you will get when you change your subscription</p>
					<Invoice invoice={this.state.invoice}/>
					<button className="form-label btn-success" onClick={() => {this.client.dispatchAction('/subscribe')}}>Confirm subscription change</button>
				</div>
			)
		}
		else {
			return (
				<div className="change-sub-confirmation">
					<div>
						You did not change subscription because the plan you are already subscribed to.
					</div>
					<button className="form-label btn-success" onClick={() => {location.hash = '#/account'}}>Back to account</button>
				</div>
			)
		}
	}
}

class Invoice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	async componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		const planInfos = await this.client.fetch('/plansInfos');

		this.setState({
			planInfos: planInfos.head.toJS(),
		});

		this.client.getStore('/userInfos', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					plan: head.toJS().plan,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmoun() {
		this.lifespan.release();
	}

	render() {
		if (this.props.invoice.lines.data[0].description === 'Launch discount') {
			this.props.invoice.lines.data[0] = {
				description: 'Launch discount',
				amount: this.state.plan ? this.state.planInfos[this.state.plan].discount : 0,
			};
		}
		else {
			this.props.invoice.lines.data.unshift({
				description: 'Launch discount',
				amount: this.state.plan ? this.state.planInfos[this.state.plan].discount : 0,
			});
		}

		const total = _.reduce(this.props.invoice.lines.data, (total, line) => {
			return total + line.amount;
		},0);

		const lines = _.map(this.props.invoice.lines.data, (line) => {
			return <InvoiceLine line={line}/>
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Description</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{lines}
					<tr>
						<td>Total</td>
						<td>{(total/100).toFixed(2)}</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

class InvoiceLine extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.line.description}</td>
				<td>{(this.props.line.amount/100).toFixed(2)}</td>
			</tr>
		)
	}
}
