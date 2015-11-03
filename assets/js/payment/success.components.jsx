import React from 'react';

export default class SuccessPanel extends React.Component {
	render() {

		const bt = JSON.parse(localStorage._hoodie_config)['_account.bearerToken'];
		return (
			<div className="success-panel">
				Thank you for subscribing to Prototypo
				<a href={`http://app.prototypo.io?bt=${bt}`}>Access Prototypo now</a>
			</div>
		)
	}
}
