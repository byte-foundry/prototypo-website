import React from 'react';

export default class ShowCard extends React.Component {
	render() {
		return (
			<div>
				<div className="w50 left">
					<p className="form-label">Card number</p>
					<p className="user-infos">**** **** **** {this.props.card.last4}</p>
				</div>
				<div className="w50 left">
					<p className="form-label">Expiration date</p>
					<p className="user-infos">{this.props.card.exp_month}/{this.props.card.exp_year}</p>
				</div>
			</div>
		)
	}
}
