import React from 'react';
import {LocalClient} from '../stores/local-client-server.stores.jsx';
import Lifespan from 'lifespan';

export default class UserPanel extends React.Component {
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
					user: head.toJS().username || false,
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
			<div className="user-panel">
				<div className="clearfix">
					<div className="clearfix subscribe">
						<p className="textSize-title-small">Your details:</p>
						<div className="marginTop15">
							<div className="clearfix">
								<label for="email">Your email:</label>
								<div className="user-infos marginTop15 marginBottom15" id="logged-in-email">{this.state.user}</div>
							</div>

							<div id="wrap-change-password" className="change-password-toggle-target hidden subscribe marginBottom30 clearfix">
								<label for="current-password">Please fill your current password:</label>
								<input type="password" id="current-password" name="current-password" placeholder="******"></input>
								<div className="w50 left">
									<label for="change-password-1">New password (at least 6 characters):</label>
									<input type="password" id="new-password-1" name="change-password-1" placeholder="abc123"></input>
								</div>
								<div className="w50 left">
									<label for="change-password-2">Type your new password again, as confirmation:</label>
									<input type="password" id="new-password-2" name="change-password-2" placeholder="abc123"></input>
								</div>
								<label id="password-success" for="" className="success-message hidden"></label>
								<label id="password-error" for="" className="error hidden"></label>
								<div className="change-password-actions clearfix right marginTop15">
									<button className="change-password-toggle call-error callToAction marginRight15 account-plan-toggle-target">Cancel</button>
									<button id="change-password" className="call-success callToAction account-plan-toggle-target">Submit new password</button>
								</div>
								<div className="change-password-actions hidden clearfix right marginTop15">
									<button className="change-password-toggle call-error callToAction account-plan-toggle-target">Close</button>
								</div>
							</div>

							<p className="textSize-title-xsmall marginTop30 marginBottom30 colorDarkGray">All following details are optional:</p>
							<div className="clearfix ">
								<div className="w50 left">
									<label for="first-name">First name:</label>
									<input type="text" id="first-name" name="first-name" placeholder="MJ"></input>
								</div>
								<div className="w50 left">
									<label for="last-name">Last name:</label>
									<input type="text" id="last-name" name="last-name" placeholder="Cat"></input>
								</div>
							</div>
							<div className="w50 left">
								<label for="user-website">Your website:</label>
								<input type="text" id="user-website" name="user-website" placeholder="www.mywebsite.com"></input>
							</div>
							<div className="w50 left">
								<label for="user-twitter">Your Twitter:</label>
								<input type="text" id="user-twitter" name="user-twitter" placeholder="@mytwitter"></input>
							</div>

							<div className="clearfix right marginTop30">
								<button className="change-password-toggle call-danger callToAction change-password-toggle-target">Change password</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}
}
