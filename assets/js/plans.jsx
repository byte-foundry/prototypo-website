var React = require('react');
var ReactDOM = require('react-dom');

var Plans = React.createClass({
	render: function() {
		return (
			<div>
				<div className="textSize-title-small mb20 clearfix">Your plan:
					<select id="plan" className="plan right" name="creditCardExpMonthInput" id="creditCardExpMonthInput" required="required" style={{marginRight: 0}}>
						<option value="" ></option>
					</select>
				</div>


				<div id="free-plan-infos" className="textType-txt textSize-txt-large marginBottom30 hidden general-infos">
					echo $page->switchplans()->kirbytextSans()
				</div>

				<div id="select-plan-wrap">

					<p className="textType-txt textSize-txt-large marginBottom30 general-infos">
						This is a special launch offer that will end on the 27th of December 2015.
					</p>

					<div className="radio-wrap" id="recurrence-selector">
						<input id="monthly" type="radio" name="monthYearSwitch" className="monthYearSwitch" value="monthly" />
						<label className="radio text-center" htmlFor="monthly">
							<div className="plan"><div className="type">Monthly billing: <div className="launch-infos">The first 6 month, <span className="currency">15</span> after</div></div><span className="price currency priceMonth">-</span></div>
						</label>
						<input id="annual" type="radio" name="monthYearSwitch" className="monthYearSwitch" value="annual" checked />
						<label className="radio text-center" htmlFor="annual">
							<div className="plan"><div className="type">Annual billing: <div className="launch-infos">One year for <span className="currency">96</span> instead of <span className="currency">144</span></div></div><span className="price currency priceAnnual">-</span></div>
						</label>
					</div>
				</div>

				<div className="textType-txt textSize-txt-large notabene">
					* Taxes are offered for private individuals. Currency ultimately depends on the country where your credit card has been issued.
				</div>
			</div>
		);
	}
});

module.exports = Plans;
