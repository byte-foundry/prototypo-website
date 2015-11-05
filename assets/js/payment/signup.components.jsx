import React from 'react';
import ReactDOM from 'react-dom';
import {LocalClient} from '../stores/local-client-server.stores.jsx';
import Lifespan from 'lifespan';

export default class SignupPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();
		this.client.dispatchAction('/set-breadcrumb', 'signup')

		this.client.getStore('/errors', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					errors: head.toJS().signup,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client.getStore('/userInfos', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					username: head.toJS().username,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	signUp(e) {
		e.preventDefault();
		e.stopPropagation();

		const payload = {
			username: ReactDOM.findDOMNode(this.refs.username).value,
			password: ReactDOM.findDOMNode(this.refs.password).value,
		}

		this.client.dispatchAction('/sign-up',payload);
	}

	render() {

		if (this.state.username) {
			return (
				<div className="signedin-panel">
					<p className="message message-success">You're already signed in as {this.state.username}</p>
					<p className="message marginTop30">
						<a className="btn btn-success link" href="#/card">Add a card now</a>
						Or
						<a className="btn btn-danger link marginLeft15" href={`http://app.prototypo.io`}>Try the app for free now</a>
					</p>
				</div>
			)
		}

		const error = this.state.errors ?
					<p className="signup-panel-error">{this.state.errors.message}</p> : false;
		return (
			<div className="signup-panel">
				<form onSubmit={(e) => {this.signUp(e)}}>
					<label className="form-label" htmlFor="username">Username</label>
					<input className="form-input" id="username" name="username" ref="username" type="text"></input>
					<label className="form-label" htmlFor="password">Password</label>
					<input className="form-input" id="password" name="password" ref="password" type="password"></input>
					<p className="message message-error">{error}</p>
					<button className="form-input btn-success marginTop30" type="submit">Sign up</button>
				</form>
			</div>
		)
	}
}
