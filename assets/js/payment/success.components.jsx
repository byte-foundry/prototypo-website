import React from 'react';

export default class SuccessPanel extends React.Component {
	render() {

		const bt = JSON.parse(localStorage._hoodie_config)['_account.bearerToken'];
		return (
			<div className="success-panel">
				<p className="message message-success">Thank you for subscribing to Prototypo!</p>
				<a href={`http://app.prototypo.io?bt=${bt}`}>Access Prototypo now</a>
			</div>
		)
	}
}
