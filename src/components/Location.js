/**
 * Created by Trilian on 17/04/2018.
 */

import React from "react";

const Location = () => {
	return (
		<div>
			<h1>Find a Motorcycle dealership</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quod.</p>
			<form action="">
				<label htmlFor="postcode">Postcode</label>
				<input id="postcode" type="text"/>
				<button type="submit">Search</button>
			</form>
			<button>Use my location</button>
			<button>Continue to the next step</button>
		</div>
	)
}

export default Location;