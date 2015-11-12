import React from 'react';

export default class InvoiceAddress extends React.Component {
	render() {
		return (
			<div className="clearfix marginTop30">
				<p className="textSize-title-small marginTop30 marginBottom15">Invoice address (all the fields are optional)</p>
				<div className="account-card-form-toggle-target">
					<div>
						<label htmlFor="corporateName" className="form-label">Corporate name or full name</label>
						<input className="form-input" type="text" id="corporateName" name="corporateName" placeholder="My company inc." onChange={(e) => {this.props.handleNameChange(e)}}></input>
					</div>
					<div>
						<div className="w50 left">
							<label htmlFor="buildingNumber" className="form-label">Bldg. #</label>
							<input className="form-input" type="text" id="buildingNumber" name="buildingNumber" placeholder="221B" onChange={(e) => { this.props.handleChange(e, 'building_number')}}></input>
						</div>
						<div className="w50 left">
							<label htmlFor="streetName" className="form-label">Street name</label>
							<input className="form-input" type="text" id="streetName" name="streetName" placeholder="Baker St." onChange={(e) => { this.props.handleChange(e, 'street_name')}}></input>
						</div>
					</div>
					<label htmlFor="addressDetails" className="form-label">Address details</label>
					<input className="form-input" type="text" id="addressDetails" name="addressDetails" placeholder="First floor" onChange={(e) => { this.props.handleChange(e, 'address_detail')}}></input>
					<div>
						<div className="w50 left">
							<label htmlFor="city" className="form-label">City</label>
							<input className="form-input" type="text" id="city" name="city" placeholder="London" onChange={(e) => { this.props.handleChange(e, 'city')}}></input>
						</div>
						<div className="w50 left">
							<label htmlFor="postalCode" className="form-label">Postal code</label>
							<input className="form-input" type="text" id="postalCode" name="postalCode" placeholder="NW1 6XE" onChange={(e) => { this.props.handleChange(e, 'postal_code')}}></input>
						</div>
					</div>
					<div>
						<div className="w50 left">
							<label htmlFor="region" className="form-label">Region</label>
							<input className="form-input" type="text" id="region" name="region" placeholder="City of Westminster" onChange={(e) => { this.props.handleChange(e, 'region')}}></input>
						</div>
						<div className="w50 left">
							<label htmlFor="country" className="form-label">Country</label>
							<input className="form-input" type="text" id="country" name="country" placeholder="United Kingdom" onChange={(e) => { this.props.handleChange(e, 'country')}}></input>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
