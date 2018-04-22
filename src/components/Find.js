/**
 * Created by Trilian on 17/04/2018.
 */

import React from "react";
import Form from './Form';
import Results from './Results';
import {ButtonNextStep} from "./helpers/buttons";


const Find = () => {

	return (
		<div className="location box">
			<h1>Find a Motorcycle dealership</h1>
			<p>Please enter a postcode, address or location and press search to find the closest dealership.</p>
			<Form />
			{
				//this.state.toggle ? "aaa" : <Results />
			}
			<Results />
			<ButtonNextStep/>
		</div>
	)
}

export default Find;