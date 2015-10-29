var React = require('react');
var ReactDOM = require('react-dom');
var Plans = require('./plans.jsx');
var Card = require('./card.jsx');

var SubscribeForm = React.createClass({
	render: function() {
		return (
			<form id="subscribe-form" action="" method="POST" accept-charset="utf-8" className="subscribe">
				<Plans />
				<div className="no-hoodie-account">
					<p className="textSize-title-small marginTop60 marginBottom30">
						Your details:
						<a href="/account" className="callToAction right">I already have an account</a>
					</p>
					<div className="not-logged-in-form no-hoodie-account">
						<div className="register">
							<div className="w50 left">
								<label htmlFor="email">Your email</label>
								<input type="email" name="email" id="email" placeholder="mj@domain.com" required="required" />
							</div>
							<div className="w50 left">
								<label htmlFor="password">Your password</label>
								<input type="password" name="password" id="password" placeholder="abc123" required="required"></input>
							</div>
							<label htmlFor="VAT">Your VAT number (optional)</label>
							<input type="text" name="VAT" id="VAT" placeholder="AB01234567890"></input>
							<label className="hidden error" id="signin-error"></label>
						</div>
					</div>
				</div>
				<div className="logged-in-form clearfix hoodie-account subscribe">
					<p className="textSize-title-small mb20">Your details:</p>
					<div className="marginTop15">
						<div className="w50 left">
							<label htmlFor="email">Your email</label>
							<div className="user-infos marginTop15" id="logged-in-email"></div>
						</div>
						<div className="w50 left">
							<label htmlFor="subscription">Your current subscription</label>
							<div className="user-infos marginTop15" id="logged-in-subscription"></div>
						</div>
						<button id="change-subscription" className="change-subscription-toggle call-danger callToAction marginTop30 right clearfix account-plan-toggle-target">Change subscription</button>
					</div>
				</div>
				<div id="card-form">
					<p className="textSize-title-small marginBottom30">Payment details:</p>
					<Card/>
				</div>
				<label className="hidden error" id="stripe-error"></label>
				<button className="NewsletterInput-submit right width100 callToAction call-success" id="submit" name="submit" >Subscribe to Prototypo</button>
				<div className="marginTop15 marginBottom15">
					<span className="tos-text">freemiumToS</span>
				</div>
			</form>
		)
	}
});

if ( document.getElementById('subscribe-form-wrapper') ) {
	ReactDOM.render(
		<SubscribeForm />,
		document.getElementById('subscribe-form-wrapper')
	);
}
