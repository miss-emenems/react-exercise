/**
 * Created by Trilian on 18/04/2018.
 */
import React from "react";
import '../data/results.json';
import { InputField, SelectField, InputRadio, InputCheckbox } from "./helpers/formHelpers";
import checkboxes from "../data/checkboxes.json";
import { MapContainer } from "./Map";

const Contact = (props) => {
	//const selected = props.results;
	const result = props.result;
	return (
		<div className="contact box">
			<div className="contact__selected selected box--frame">
				<div className="grid-parent">
					<div className="grid-child child--header">
						<h2 className="selected__title">Selected dealership</h2>
					</div>
					<div className="grid-child child--main">
						<h3 className="item__name">Workshop name</h3>
						<address className="item__address">
							1st line,<br/>
							City, County,<br/>
							Postcode
						</address>
						<p className="item__distance">distance goes here</p>
					</div>
					<div className="grid-child child--aside">
						<div className="map--mini">
							<MapContainer/>
						</div>
					</div>
				</div>
			</div>
			<div className="contact__form">
				<h2 className="class">Contact details</h2>
				<p>Please enter your contact details, so the dealership representative can get in touch to arrange a test drive.</p>
				<form action="" className="form">
					<fieldset className="form__section section--personal-info">
						<SelectField selectId="Prefix" label="Prefix" selectName="prefix"/>
						<InputField id="firstName" label="First Name" type="text" placeholder="First Name" />
						<InputField id="surname" label="Surname" type="text" placeholder="Surname" />
						<InputField id="email" label="Email" type="email" placeholder="Email"  />
						<InputField id="tel" label="Phone" type="tel" placeholder="Phone" />
					</fieldset>


					<fieldset className="form__section section--purchase-time">
						<legend>When do you plan to purchase your motorcycle?</legend>
						{/*{
						 checkboxes.map((checkbox, i) => {
						 return (
						 <InputCheckbox key={ i } id={ checkbox } text={ checkbox } />
						 )
						 })
						 }*/}
						<div className="grid-parent radio-buttons">
							<div className="grid-child">
								<InputRadio id={`Time${ 1 }`} name="time" text="0 - 3 months" />
							</div>
							<div className="grid-child">
								<InputRadio id={`Time${ 2 }`} name="time" text="4 - 6 months" />
							</div>
							<div className="grid-child">
								<InputRadio id={`Time${ 3 }`} name="time" text="7 - 12 months" />
							</div>
							<div className="grid-child">
								<InputRadio id={`Time${ 4 }`} name="time" text="Unknown" />
							</div>
						</div>
					</fieldset>

					<div className="form__section section--contact-preferences">
						<h2>Contact preferences</h2>
						<p>Please select which communication channels you would like us to use to keep you informed of future news and events.</p>
						<fieldset>
							<legend>We can contact you about Products, Services, Events and Offers by…</legend>
							<div className="grid-parent checkboxes">
								<div className="grid-child">
									<InputCheckbox id={`Contact${ 1 }`} text="Email" />
								</div>
								<div className="grid-child">
									<InputCheckbox id={`Contact${ 2 }`} text="Telephone" />
								</div>
								<div className="grid-child">
									<InputCheckbox id={`Contact${ 3 }`} text="Text" />
								</div>
								<div className="grid-child">
									<InputCheckbox id={`Contact${ 4 }`} text="None of these" />
								</div>
							</div>
						</fieldset>
					</div>

					<div className="form__section section--form-submition">
						<h2>Terms and conditions</h2>
						<div className="form__field field field--checkbox-privacy">
							<input id="checkboxPrivacyPolicy" type="checkbox" />
							<label htmlFor="checkboxPrivacyPolicy">I have read and agree to the <a href="#">privacy policy</a></label>
						</div>
						<button type="Submit" className="btn--full btn--solid-cta">Send request</button>
						<p className="disclaimer">The data you have provided above will be used to contact you and arrange a test ride for you. We may also use it to ask you about your experience. This means that we will share the data with our dealers or agents (you can see our full privacy notice here). In the future, if you would like to hear more from us about our Products, Services and Offers please tell us by selecting the relevant options. You will be able to unsubscribe from these services at any time by unsubscribing directly from the emails or by contacting your Dealer.</p>
					</div>
				</form>
			</div>
		</div>
	)

	//result.id = 1;
}

export default Contact;