import React from 'react';
import ReactDOM from 'react-dom';
import Lifespan from 'lifespan';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

export default class ChangePassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client.getStore('/errors', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					error: head.toJS().changePassword,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	submitNewPassword(e) {
		e.preventDefault();
		e.stopPropagation();

		const newPassword = ReactDOM.findDOMNode(this.refs.newPassword).value;
		const oldPassword = ReactDOM.findDOMNode(this.refs.oldPassword).value;

		if (newPassword.length < 6) {
			return this.setState({
				error: {
					message: `Password must be 6 characters long at least`,
				},
			});
		}
		else if (newPassword !== ReactDOM.findDOMNode(this.refs.confirmPassword).value ) {
			return this.setState({
				error: {
					message: `Passwords don't match`,
				},
			});
		}
		else {
			this.client.dispatchAction('/change-password', {newPassword, oldPassword});
		}
	}

	render() {
		const error = this.state.error ? <p className="message-error">{this.state.error.message}</p> : false;
		return (
			<div id="wrap-change-password" className="change-password-toggle-target subscribe marginBottom30 clearfix">
				<form onSubmit={(e) => { this.submitNewPassword(e)}}>
					<label for="current-password" className="form-label">Please fill your current password:</label>
					<input type="password" id="current-password" name="current-password" ref="oldPassword" className="form-input" placeholder="******"></input>
					<div className="w50 left">
						<label for="change-password-1" className="form-label">New password (at least 6 characters):</label>
						<input type="password" id="new-password-1" className="form-input" ref="newPassword" name="change-password-1" placeholder="abc123"></input>
					</div>
					<div className="w50 left">
						<label for="change-password-2" className="form-label">Type your new password again, as confirmation:</label>
						<input type="password" id="new-password-2" className="form-input" ref="confirmPassword" name="change-password-2" placeholder="abc123"></input>
					</div>
					{error}
					<div className="change-password-actions clearfix right marginTop15">
						<button className="change-password-toggle call-error callToAction marginRight15 account-plan-toggle-target" onClick={() => {location.hash = "#/user"}}>Cancel</button>
						<button type="submit" id="change-password" className="call-success callToAction account-plan-toggle-target">Submit new password</button>
					</div>
					<div className="change-password-actions hidden clearfix right marginTop15">
						<button className="change-password-toggle call-error callToAction account-plan-toggle-target">Close</button>
					</div>
				</form>
			</div>
		)
	}
}
