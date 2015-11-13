import React from 'react';
import AddCard from '../components/add-card.components.jsx';
import {LocalClient} from '../stores/local-client-server.stores.jsx';

export default class ChangeCardPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.client = LocalClient.instance();
	}

	handleCardChange(e, name) {
		this.setState({
			[name]: e.target.value,
		})
	}

	createCard(e) {
		e.preventDefault();
		e.stopPropagation();
		const card = {
			number: this.state.cardNumber,
			cvc: this.state.cvc,
			exp_month: this.state.expMonth,
			exp_year: this.state.expYear,
		}

		this.client.dispatchAction('/add-card', {
			card,
			cb:() => { location.hash = '#/account';},
		});
	}

	render() {
		return (
			<div className="change-card-panel">
				<form onSubmit={(e) => { this.createCard(e) }}>
					<AddCard handleChange={(e, name) => {this.handleCardChange(e,name)}}/>
					<button type="submit">Change card</button>
				</form>
			</div>
		)
	}
}
