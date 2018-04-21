/**
 * Created by Trilian on 17/04/2018.
 */

import React from "react";
import Form from './Form';
import Results from './Results';


const Find = () => {
	return (
		<div className="location box">
			<h1>Find a Motorcycle dealership</h1>
			<p>Please enter a postcode, address or location and press search to find the closest dealership.</p>
			<Form />
			<Results />
			<button className="btn--full btn--solid-cta">Continue to the next step</button>
		</div>
	)
}

export default Find;