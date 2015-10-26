var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
	render: function() {
		return (
			<div>
				<label id="alert-wrong-country" className="error hidden">Your card seems to be european. You have to pay your subscription in euros.</label>
				<label htmlFor="buyerNameInput">Cardholder name</label>
				<input type="text" name="buyerNameInput" id="buyerNameInput" placeholder="MJ Cat" required="required" />
				<label htmlFor="cardNumberInput">Credit card number</label>
				<input type="number" name="cardNumberInput" id="cardNumberInput" placeholder="1234 5678 9012 3456" required="required" />
				<div className="width50 left">
					<label className="small" htmlFor="creditCardExpMonthInput">Expiration date</label>
					<select className="small" name="creditCardExpMonthInput" id="creditCardExpMonthInput" placeholder="01" required="required">
						<option value="" disabled selected>Month</option>
						<option value="1">01</option>
						<option value="2">02</option>
						<option value="3">03</option>
						<option value="4">04</option>
						<option value="5">05</option>
						<option value="6">06</option>
						<option value="7">07</option>
						<option value="8">08</option>
						<option value="9">09</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
					</select>
					<select className="small" name="creditCardExpYearInput" id="creditCardExpYearInput" placeholder="2018" required="required">
						<option value="" disabled selected>Year</option>
						<option value="2015">2015</option>
						<option value="2016">2016</option>
						<option value="2017">2017</option>
						<option value="2018">2018</option>
						<option value="2019">2019</option>
						<option value="2020">2020</option>
					</select>
				</div>
				<div className="width50 left">
					<label htmlFor="cvcInput">CVC</label>
					<input className="small" type="number" name="cvcInput" id="cvcInput" placeholder="123" required="required" />
				</div>
			</div>
		);
	}
});

module.exports = Card;
