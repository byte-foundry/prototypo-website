import React from 'react';
import ReactDOM from 'react-dom';
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
					lastName: head.toJS().lastName,
					firstName: head.toJS().firstName,
					website: head.toJS().website,
					twitter: head.toJS().twitter,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	updateUser(e) {
		e.preventDefault();
		e.stopPropagation();
		this.client.dispatchAction('/update-user', {
			firstName: ReactDOM.findDOMNode(this.refs.firstName).value,
			lastName: ReactDOM.findDOMNode(this.refs.lastName).value,
			website: ReactDOM.findDOMNode(this.refs.website).value,
			twitter: ReactDOM.findDOMNode(this.refs.twitter).value,
		});
	}

	handleUserChange(e, name) {
		this.setState({
			[name]: e.target.value,
		});
	}

	render() {
		return (
			<div className="user-panel">
				<div className="clearfix">
					<div className="clearfix subscribe">
						<p className="textSize-title-small">Your details</p>
						<div className="marginTop15">
							<div className="clearfix">
								<label for="email">Your email</label>
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

							<p className="textSize-title-xsmall marginTop30 marginBottom30 colorDarkGray">All following details are optional</p>
							<form onSubmit={(e) => { this.updateUser(e) }}>
								<div className="clearfix ">
									<div className="w50 left">
										<label for="first-name" className="form-label">First name</label>
										<input type="text" ref="firstName" id="first-name" name="first-name" className="form-input" placeholder="MJ" value={this.state.firstName} onChange={(e) => {this.handleUserChange(e, 'firstName')}}></input>
									</div>
									<div className="w50 left">
										<label for="last-name" className="form-label">Last name</label>
										<input type="text" ref="lastName" id="last-name" name="last-name" className="form-input" placeholder="Cat" value={this.state.lastName} onChange={(e) => {this.handleUserChange(e, 'lastName')}}></input>
									</div>
								</div>
								<div className="w50 left">
									<label for="user-website" className="form-label">Your website</label>
									<input type="text" ref="website" id="user-website" name="user-website" className="form-input" placeholder="www.mywebsite.com" value={this.state.website} onChange={(e) => {this.handleUserChange(e, 'website')}}></input>
								</div>
								<div className="w50 left">
									<label for="user-twitter" className="form-label">Your Twitter</label>
									<input type="text" ref="twitter" id="user-twitter" name="user-twitter" className="form-input" placeholder="@mytwitter" value={this.state.twitter} onChange={(e) => {this.handleUserChange(e, 'twitter')}}></input>
								</div>

								<div className="clearfix right marginTop30">
									<button className="change-password-toggle form-label btn-success" type="submit">Save</button>
									<button className="change-password-toggle form-label btn-danger change-password-toggle-target marginLeft15">Change password</button>
								</div>
							</form>

						</div>
					</div>
				</div>
			</div>
		)
	}
}
