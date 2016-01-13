import React from 'react';
import Lifespan from 'lifespan';
import _ from 'lodash';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

import WaitForLoad from '../components/wait-for-load.components.jsx';

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

	render() {
		if (this.state.invoice) {
			return (
				<div className="change-sub-confirmation">
					<p className="textSize-title-small marginTop30">Confirm subscription change</p>
					<p className="marginTop30 message">
						This is the invoice you will get when you change your subscription
					</p>
					<Invoice invoice={this.state.invoice}/>
					<WaitForLoad loaded={!this.state.loading}>
						<button className="form-label btn-success marginTop30" onClick={() => {this.client.dispatchAction('/subscribe')}}>Confirm subscription change</button>
					</WaitForLoad>
				</div>
			)
		}
		else {
			return (
				<div className="change-sub-confirmation">
					<p className="textSize-title-small marginTop30">Please try again</p>
					<p className="marginTop30 message">
						You did not change subscription because the plan you are already subscribed to.
					</p>
					<button className="form-label btn-success marginTop30" onClick={() => {location.hash = '#/account'}}>Back to account</button>
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

	componentWillUnmount() {
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
			<table className="invoice">
				<thead>
					<tr>
						<th>Description</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{lines}
					<tr className="invoice-total">
						<td className="invoice-total-label">Total</td>
						<td className="invoice-total-amount">{(total/100).toFixed(2)}</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

class InvoiceLine extends React.Component {
	render() {
		return (
			<tr className="invoice-line">
				<td>{this.props.line.description}</td>
				<td>{(this.props.line.amount/100).toFixed(2)}</td>
			</tr>
		)
	}
}
