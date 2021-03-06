import React from 'react';
import ReactDOM from 'react-dom';
import Lifespan from 'lifespan';
import Classnames from 'classnames';

import {LocalClient} from '../stores/local-client-server.stores.jsx';

export default class Account extends React.Component {

	async componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client.getStore('/userInfos', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					user: head.toJS().username || false,
					passwordReset: head.toJS().passwordReset,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client.getStore('/tabs', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					current: head.toJS().current,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client.getStore('/errors', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					resetError: head.toJS().passwordReset,
					signinError: head.toJS().signin,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
		const userInfos = await this.client.fetch('/userInfos');
		this.setState({
			user: userInfos.head.toJS().username || false,
		});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	signIn(e) {
		e.preventDefault();
		e.stopPropagation();
		this.client.dispatchAction('/sign-in', {
			username: ReactDOM.findDOMNode(this.refs.username).value,
			password: ReactDOM.findDOMNode(this.refs.password).value,
		});
	}

	resetPassword() {
		this.client.dispatchAction('/reset-password', {
			username: ReactDOM.findDOMNode(this.refs.resetPassword).value,
		});
	}

	render() {
		if (!this.state || this.state.user === undefined) {
			return false;
		}

		const resetPasswordSuccess = this.state.passwordReset ? (
				<div id="hoodie-success" className="marginTop30">
					<label htmlFor="" className="success-message">A new password was sent to <span id="user-email"></span></label>
				</div>
		) : false;

		const errorReset = this.state.resetError ? (
			<label id="hoodie-error" htmlFor="" className="error">{this.state.resetError.message}</label>
		) : false;

		const resetPassword = this.state.resetPassword ? (
			<div ref="resetPasswordContainer" id="wrap-reset-password" className="subscribe">
				<p className="textSize-title-small marginBottom30">Reset your password</p>
				<label className="form-label">Please fill the following input with the email address you've used to register.</label>
				<input type="text" className="form-input" id="email-reset-password" name="login" ref="resetPassword" placeholder="mj@domain.com"></input>
				<label className="form-label marginTop30">We will send you a new password, and you will be able to change your password once connected in the profile panel.</label>
				{errorReset}
				{resetPasswordSuccess}
				<div id="reset-password-actions" className="marginTop30">
					<button className="reset-password-toggle form-label btn-danger marginRight15" onClick={() => {this.setState({resetPassword:false})}}>Cancel</button>
					<button ref="resetPasswordBtn" id="reset-password" className="form-label btn-error" onClick={() => {this.resetPassword()}}>Reset</button>
				</div>
			</div>
		) : false;

		const signinError = this.state.signinError ? (
			<p className="message-error">{this.state.signinError.message}</p>
		) : false;

		const signin = !this.state.resetPassword ? (
			<div id="wrap-sign-in" className="subscribe">
				<form ref="signInForm" onSubmit={(e) => {this.signIn(e)}}>
					<label htmlFor="login" className="form-label">Your email</label>
					<input type="text" id="email-sign-in" name="login" ref="username" className="form-input" placeholder="mj@domain.com"></input>
					<label htmlFor="password" className="form-label">Password</label>
					<input type="password" id="password-sign-in" className="form-input" name="password" ref="password" placeholder="abc123"></input>
					<label id="signin-error" htmlFor="" className="error hidden"></label>
					<label ref="resetPassword" className="reset-password-toggle right marginBottom30 textSize-title-small colorGray" onClick={() => {this.setState({resetPassword:true})}}>Forgotten your password?</label>
					{signinError}
					<div className="marginTop30">
						<button id="sign-me-in" className="form-label btn-success marginBottom30 marginRight15" type="submit">Sign in</button>
						<a className="form-label button btn-danger marginBottom30 marginRight15" href="/pricing/subscribe">Sign up</a>
					</div>
				</form>
			</div>
		) : false;

		if (!this.state.user) {
			return (
				<div>
					<header className="PageHeader text-left fitToContent">
						<h1 className="textType-title textSize-title-large">Sign in</h1>
					</header>

					<section className="Article Section-fontsItemWrap">
						{signin}
						{resetPassword}
					</section>
				</div>
			)
		}

		const userClass = Classnames({
			'account-tabs-list-item':true,
			active: this.state.current === 'user',
		});

		const accountClass = Classnames({
			'account-tabs-list-item':true,
			active: this.state.current === 'account',
		});

		const bt = JSON.parse(localStorage._hoodie_config)['_account.bearerToken'];

		return (
				<div>
					<header className="PageHeader text-left fitToContent">
						<h1 className="textType-title textSize-title-large">Account</h1>
					</header>

					<div>
						<div className="account-tabs">
							<ul className="account-tabs-list clearfix">
								<li id="tab-user" className={userClass}><a href="#/user">User</a></li>
								<li id="tab-account" className={accountClass}><a href="#/account">Account</a></li>
							</ul>
						</div>

						<section className="Article">
							<div className="clearfix">
								<a href={`http://app.prototypo.io?bt=${bt}`} className="NewsletterInput-submit marginTop15 right callToAction call-success">Go to Prototypo App</a>
							</div>
							{this.props.children}
						</section>

					</div>
				</div>
		)
	}
}
