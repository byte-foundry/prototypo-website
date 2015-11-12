import React from 'react';

export default class ShowInvoiceAddress extends React.Component {
	render() {
		return (
			<div className="show-invoice-address">
				<address>
					{this.props.buyerName}
					{this.props.invoice.building_number} {this.props.invoice.street_name}
					{this.props.invoice.address_detail}
					{this.props.invoice.postal_code} {this.props.invoice.city}{this.props.invoice.region ? `, ${this.props.invoice.region}` : ''}
					{this.props.invoice.country}
				</address>
			</div>
		)
	}
}
