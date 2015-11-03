import React from 'react';
import {LocalClient} from '../stores/local-client-server.stores.jsx';
import Lifespan from 'lifespan';
import Classnames from 'classnames';

export default class Header extends React.Component {
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
					username: head.toJS().username
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	logout() {
		this.client.dispatchAction('/logout');
	}

	render() {
		const classHeader = Classnames({
			header: true,
			'is-online': this.state.username,
		});

		const classWindow = Classnames({
			'header-window': true,
			'is-online': this.state.username,
		});

		return (
			<div className={classHeader}>
				<div className={classWindow}>
					<div className="header-part offline hide-for-small-only">
						<div>
							<a href="/account" className="login">
								Sign in
							</a>
						</div>
						<div>
							<a href="/pricing" className="callToAction header-part-button">
								<span className="show-for-medium-up">Create your font now!</span>
								<span className="show-for-small-only text-center">Get started!</span>
							</a>
						</div>
					</div>
					<div className="header-part online hide-for-small-only">
						<div className="hoodie-part-username">
							Welcome back <span className="" id="hoodieUsername">{this.state.username}!</span>
						</div>
						<div className="hoodie-part-success">
							<a href="/account" className="callToAction call-success header-part-button">
								My account
							</a>
						</div>
						<div className="hoodie-part-success">
							<a href="http://app.prototypo.io" className="callToAction call-success header-part-button">
								App
							</a>
						</div>
						<div className="show-for-medium-up" onClick={() => {this.logout()}}>
							<span className="callToAction header-part-button">Logout</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
