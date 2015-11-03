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
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	render() {
		return (
			<div className="bread-crumb">
				<Crumb label="Sign up" state="signup" current={this.state.current}/>
				<Crumb label="Add a card" state="card" current={this.state.current} disabled={!this.state.user}/>
				<Crumb label="Choose a plan" state="plan" current={this.state.current} disabled={!this.state.card}/>
				<Crumb label="Confirmation" state="confirmation" current={this.state.current} disabled={!this.state.plan || !this.state.card}/>
			</div>
		)
	}
}

class Crumb extends React.Component {
	render() {
		const classes = Classnames({
			crumb: true,
			'is-active': this.props.state === this.props.current,
			'is-disabled' : this.props.disabled,
		});

		return (
			<div className={classes}>
				<a className="crumb-link" href={`#/${this.props.state}`}>
					{this.props.label}
				</a>
			</div>
		)
	}
}
