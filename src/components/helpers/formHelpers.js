/**
 * Created by Trilian on 19/04/2018.
 */
import React from "react";

export function inputField(label) {
	return (
		<div className="form__field field--">
			{ label && <label htmlFor="firstName">{ label }</label> }
			<input type="text" placeholder={`${ label }`}/>
		</div>
	);
}