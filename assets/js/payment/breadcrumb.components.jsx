import React from 'react';
import Classnames from 'classnames';
import {LocalClient} from '../stores/local-client-server.stores.jsx';
import Lifespan from 'lifespan';

export default class BreadCrumb extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client.getStore('/breadcrumb', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					current: head.toJS().state,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client.getStore('/userInfos', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					user: head.toJS().username,
					card: head.toJS().card,
					plan: head.toJS().plan,
					invoice_address: head.toJS().invoice_address,
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
			<div className="bread-crumb">
				<Crumb step="1" label="Sign up" state="signup" current={this.state.current}/>
				<Crumb step="2" label="Add a card" state="card" current={this.state.current} disabled={!this.state.user}/>
				<Crumb step="3" label="Invoicing address" state="address" current={this.state.current} disabled={!this.state.card}/>
				<Crumb step="4" label="Choose a plan" state="plan" current={this.state.current} disabled={!this.state.invoice_address}/>
				<Crumb step="5" label="Confirmation" state="confirmation" current={this.state.current} disabled={!this.state.plan || !this.state.card}/>
			</div>
		)
	}
}

class Crumb extends React.Component {
	goToStep() {
		if (!this.props.disabled && !this.props.active) {
			location.hash = `#/${this.props.state}`;
		}
	}

	render() {
		const classes = Classnames({
			crumb: true,
			'is-active': this.props.state === this.props.current,
			'is-disabled' : this.props.disabled,
		});

		return (
			<div className={classes} onClick={() => { this.goToStep()}}>
				<span className="crumb-step">{this.props.step}</span>
				<div className="crumb-link">
					{this.props.label}
				</div>
			</div>
		)
	}
}
