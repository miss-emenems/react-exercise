/**
 * Created by Trilian on 17/04/2018.
 */
import React from "react";
import { InputField } from "./helpers/formHelpers";

const Form = () => {
	return (
		<div className="form">
			<form action="" className="form">
				<div className="form--location grid-parent">
					<div className="grid-child">
						<InputField htmlFor="postcode" label="Postcode" type="text" placeholder="Postcode" />
					</div>
					<div className="grid-child">
						<button type="submit" className="btn--basic btn--solid-black">Search</button>
					</div>
					<div className="grid-child">
						<button className="btn--basic btn--solid-black">Use my location</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Form;