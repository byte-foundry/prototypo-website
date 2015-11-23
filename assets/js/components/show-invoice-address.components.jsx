import React from 'react';

export default class ShowInvoiceAddress extends React.Component {
	render() {
		return (
			<p className="user-infos show-invoice-address">
				{this.props.buyerName}<br/>
				{this.props.invoice.building_number} {this.props.invoice.street_name}<br/>
				{this.props.invoice.address_detail}<br/>
				{this.props.invoice.postal_code} {this.props.invoice.city}{this.props.invoice.region ? `, ${this.props.invoice.region}` : ''}<br/>
				{this.props.invoice.country}<br/>
			</p>
		)
	}
}
