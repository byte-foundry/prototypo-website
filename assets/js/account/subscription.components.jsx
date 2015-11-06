import React from 'react';

export default class SubscriptionPanel extends React.Component {
	render() {
		return (
			<div className="subscription-panel">
				<div id="target-tab-account" className="clearfix">
					<div className="subscribe">

						<div className="clearfix">
							<label htmlFor="subscription">Your current subscription</label>
							<div className="user-infos marginTop15 marginBottom15" id="logged-in-subscription"></div>
							<div className="subscription-date hidden">
								<label htmlFor="subscription">Subscription turnaround</label>
								<div className="user-infos marginTop15" id="subscription-date"></div>
							</div>
						</div>

						<div id="account-plan" className="subscribe hidden account-plan-toggle-target">
						</div>
						<div id="no-card-plan" className="hidden textType-txt textSize-txt-large marginBottom30 general-infos">
							You cannot change subscription without first setting up a payment card.
						</div>

						<div className="clearfix marginTop30">
							<div className="right">
								<label id="success-plan-message" htmlFor="" className="success-message hidden">You've successfuly changed your plan!</label>
								<button id="submit-subscription" className="account-plan-toggle-target hidden call-success callToAction marginTop30 right clearfix hidden marginLeft15">Change my subscription</button>
								<button className="change-subscription-toggle account-plan-toggle-target hidden call-error callToAction marginTop30 right clearfix hidden">Cancel</button>
								<button id="change-subscription" className="change-subscription-toggle call-danger callToAction account-plan-toggle-target">Change subscription</button>
							</div>
						</div>

						<div id="error-create-customer" className="textType-txt textSize-txt-large marginBottom30 general-infos hidden">
							There was an error during your subscription. We've subscribed your account to the Free subscription. To subscribe you will need to add a valid card at the bottom of the page and then subscribe to the launch plan.
						</div>

						<div className="clearfix marginTop30">
							<p className="textSize-title-small marginTop30 marginBottom15">Payment details:</p>
							<div className="card-info clearfix" id="card-details">
								<div className="w50 left">
									<label>Card number</label>
									<div className="user-infos marginTop15">**** **** **** <span id="last-four">4242</span></div>
								</div>
								<div className="w50 left">
									<label>Expiration date</label>
									<div className="user-infos marginTop15"><span id="card-month">10</span>/<span id="card-year">2044</span></div>
								</div>
								<div className="success-message hidden" id="success-card-message">Card successfuly submitted</div>
								<button id="change-card" className="account-card-form-toggle-target change-card-toggle call-danger callToAction marginTop30 right">Change card</button>
							</div>
							<div id="no-card">
								You don't have any cards registered.
								<button id="change-card" className="account-card-form-toggle-target change-card-toggle call-danger callToAction marginTop30 right">Add a card</button>
							</div>
							<div id="account-card-form" className="subscribe account-card-form-toggle-target">
								<div id="card-form">
									<p className="textSize-title-small ">Change Card:</p>
									<button id="change-card-submit" className="call-success callToAction marginTop30 right">Change my card</button>
									<button id="" className="account-card-form-toggle-target change-card-toggle account-card-form-toggle-target hidden call-error callToAction marginRight15 marginTop30 right">Cancel</button>
								</div>
							</div>
						</div>

						<div className="clearfix marginTop30">
							<p className="textSize-title-small marginBottom15">Your invoices:</p>
							<ul className="list marginTop30">
								<li className="list-item">
									<span className="list-item-date">Dec. 2015</span>
									<span className="list-item-text">in_171eCfEHNnZkutNMRKWwAHPN</span>
									<span className="list-item-download">Download</span>
								</li>
								<li className="list-item">
									<span className="list-item-date">Nov. 2015</span>
									<span className="list-item-text">in_171eCfEHNnZkutNMRKWwAHPN</span>
									<span className="list-item-download">Download</span>
								</li>
								<li className="list-item">
									<span className="list-item-date">Oct. 2015</span>
									<span className="list-item-text">in_171eCfEHNnZkutNMRKWwAHPN</span>
									<span className="list-item-download">Download</span>
								</li>
							</ul>
						</div>

					</div>

				</div>
			</div>
		)
	}
}
