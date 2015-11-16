import React from 'react';

export default class AddCard extends React.Component {
	render() {
		return (
			<div>
				<p className="textSize-title-small marginBottom30">New card</p>
				<label className="form-label" htmlFor="card-number">Card number</label>
				<input className="form-input" type="text" ref="cardNumber" id="card-number" name="card-number" placeholder="1111222233334444" onChange={(e) => { this.props.handleChange(e, 'cardNumber') }}></input>
				<div className="clearfix">
					<div className="w50 left">
						<label className="form-label">Exp. date</label>
						<select ref="expMonth" className="form-input small" name="creditCardExpMonthInput" id="creditCardExpMonthInput" placeholder="01" required="required" onChange={(e) => { this.props.handleChange(e, 'expMonth') }}>
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
						<select ref="expYear" className="form-input small" name="creditCardExpYearInput" id="creditCardExpYearInput" placeholder="2018" required="required" onChange={(e) => { this.props.handleChange(e, 'expYear') }}>
							<option value="" disabled selected>Year</option>
							<option value="2015">2015</option>
							<option value="2016">2016</option>
							<option value="2017">2017</option>
							<option value="2018">2018</option>
							<option value="2019">2019</option>
							<option value="2020">2020</option>
							<option value="2021">2021</option>
							<option value="2022">2022</option>
							<option value="2023">2023</option>
							<option value="2024">2024</option>
							<option value="2025">2025</option>
							<option value="2026">2026</option>
							<option value="2027">2027</option>
							<option value="2028">2028</option>
						</select>
					</div>
					<div className="w50 left">
						<label className="form-label" for="cvcInput">CVC</label>
						<input className="form-input small" ref="cvc" type="number" name="cvcInput" id="cvcInput" placeholder="123" required="required" onChange={(e) => { this.props.handleChange(e, 'cvc') }}></input>
					</div>
				</div>
			</div>
		)
	}
}
