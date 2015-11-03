import React from 'react';
import ReactDOM from 'react-dom';
import {LocalClient} from '../stores/local-client-server.stores.jsx';
import Lifespan from 'lifespan';

export default class CardPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();
		this.client.dispatchAction('/set-breadcrumb', 'card')

		this.client.getStore('/errors', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					error: head.toJS().card,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client.getStore('/userInfos', this.lifespan)
			.onUpdate(({head}) => {
				this.setState({
					card: head.toJS().card,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	createCard(e) {
		e.preventDefault();
		e.stopPropagation();

		this.client.dispatchAction('/add-card', {
			number: ReactDOM.findDOMNode(this.refs.cardNumber).value,
			cvc: ReactDOM.findDOMNode(this.refs.cvc).value,
			exp_month: ReactDOM.findDOMNode(this.refs.expMonth).value,
			exp_year: ReactDOM.findDOMNode(this.refs.expYear).value,
		});
	}

	tryForFree(e) {
		e.preventDefault();
		e.stopPropagation();

		this.client.dispatchAction('/to-the-app',{});
	}

	render() {
		if (this.state.card) {
			return (
				<div className="card-panel">
					<p className="message message-success">You already added a card</p>
					<div className="w50 left">
						<p className="form-label">Card number</p>
						<p className="user-infos">**** **** **** {this.state.card.last4}</p>
					</div>
					<div className="w50 left">
						<p className="form-label">Expiration date</p>
						<p className="user-infos">{this.state.card.exp_month}/{this.state.card.exp_year}</p>
					</div>
					<a className="btn link btn-success marginTop30" href="#/plan">Now choose a plan</a>
				</div>
			)
		}

		const error = this.state.error ? (
			<div className="card-panel-error">{this.state.error.message}</div>
		) : false;
		return (
			<div className="card-panel">
				<form onSubmit={(e) => {this.createCard(e)}}>
					<label className="form-label" htmlFor="card-number">Card number</label>
					<input className="form-input" type="text" ref="cardNumber" id="card-number" name="card-number"></input>
					<div className="clearfix">
						<div className="w50 left">
							<label className="form-label">Exp. date</label>
							<select ref="expMonth" className="form-input small" name="creditCardExpMonthInput" id="creditCardExpMonthInput" placeholder="01" required="required">
								<option value="" disabled selected>Month</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>
							<select ref="expYear" className="form-input small" name="creditCardExpYearInput" id="creditCardExpYearInput" placeholder="2018" required="required">
								<option value="" disabled selected>Year</option>
								<option value="2015">2015</option>
								<option value="2016">2016</option>
								<option value="2017">2017</option>
								<option value="2018">2018</option>
								<option value="2019">2019</option>
								<option value="2020">2020</option>
							</select>
						</div>
						<div className="w50 left">
							<label className="form-label" for="cvcInput">CVC</label>
							<input className="form-input small" ref="cvc" type="number" name="cvcInput" id="cvcInput" placeholder="123" required="required"></input>
						</div>
					</div>
					<p className="message message-error">{error}</p>
					<div className="marginTop30">
						<button className="form-label btn-success" type="submit">Add my card</button>
						<button className="form-label btn-danger" onClick={(e) => { this.tryForFree(e)}}>I just want to try for free!</button>
					</div>
				</form>
			</div>
		)
	}
}
