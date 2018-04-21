/**
 * Created by Trilian on 18/04/2018.
 */
import React from "react";
import '../data/results.json';
import { InputField, InputCheckbox } from "./helpers/formHelpers";
import checkboxes from "../data/checkboxes.json";

const Contact = () => {
	//const selected = props.results;
	//result.id = 1;

	return (
		<div className="contact">
			<div className="contact__selected selected">
				<h2 className="selected__name">cghjk</h2>
				<address className="item__address">
					{/*{ result.address },<br/>{ result.postcode }*/}
				</address>
				<p className="item__distance">distance</p>
			</div>
			<div className="contact__form">
				<h2 className="class">Contact details</h2>
				<p>Please enter your contact details, so the dealership representative can get in touch to arrange a test drive.</p>
				<form action="" className="form">
					<div className="form__field">
						<label htmlFor="prefix">Prefix</label>
						<select name="prefix" id="prefix">
							<option value="Miss">Miss</option>
							<option value="Mrs">Mrs</option>
							<option value="Ms">Ms</option>
							<option value="Mr">Mr</option>
						</select>
					</div>
					<InputField htmlFor="firstName" label="First Name" type="text" placeholder="First Name" />
					<InputField htmlFor="surname" label="Surname" type="text" placeholder="Surname" />
					<InputField htmlFor="email" label="Email" type="email" placeholder="Email"  />
					<InputField htmlFor="tel" label="Phone" type="tel" placeholder="Phone" />

					<p>When do you plan to purchase your motorcycle?</p>
					{/*{
						checkboxes.map((checkbox, i) => {
							return (
								<InputCheckbox key={ i } id={ checkbox } text={ checkbox } />
							)
						})
					}*/}

					<InputCheckbox id={`time${ 1 }`} text="0 - 3 months" />
					<InputCheckbox id={`time${ 2 }`} text="4 - 6 months" />
					<InputCheckbox id={`time${ 3 }`} text="7 - 12 months" />
					<InputCheckbox id={`time${ 4 }`} text="Unknown" />

					<h3>Contact preferences</h3>
					<p>Please select which communication channels you would like us to use to keep you informed of future news and events.</p>
					<p>We can contact you about Products, Services, Events and Offers by…</p>

					<InputCheckbox id={`contact${ 1 }`} text="Email" />
					<InputCheckbox id={`contact${ 2 }`} text="Telephone" />
					<InputCheckbox id={`contact${ 3 }`} text="Text" />
					<InputCheckbox id={`contact${ 4 }`} text="None of these" />

					<h3>Terms and conditions</h3>
					<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
					<p>I have read and agree to the <a href="">privacy policy</a></p>
					<button type="Submit">Send request</button>
					<p className="disclaimer">The data you have provided above will be used to contact you and arrange a test ride for you. We may also use it to ask you about your experience. This means that we will share the data with our dealers or agents (you can see our full privacy notice here). In the future, if you would like to hear more from us about our Products, Services and Offers please tell us by selecting the relevant options. You will be able to unsubscribe from these services at any time by unsubscribing directly from the emails or by contacting your Dealer.</p>
				</form>
			</div>
		</div>
	)
}

export default Contact;