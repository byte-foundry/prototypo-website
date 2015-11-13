import React from 'react';
import moment from 'moment';
import _ from 'lodash';

export default class InvoiceList extends React.Component {
	render() {
		const invoices = this.props.invoices ? _.map(this.props.invoices, (invoice) => {
			return <InvoiceLink invoice={invoice} key={invoice.id}/>;
		}) : false;
		return (
			<ul className="list">
				{invoices}
			</ul>
		)
	}
}

class InvoiceLink extends React.Component {
	render() {
		return (
			<li className="list-item">
				<span className="list-item-date">{moment.unix(this.props.invoice.created).format('L')}</span>
				<span className="list-item-text">{this.props.invoice.invoice}</span>
				<a className="list-item-download" target='_blank' href={`https://invoicestaxamo.s3.amazonaws.com/${this.props.invoice.metadata.taxamo_key}/invoice.html`}>Download</a>
			</li>
		)
	}
}
