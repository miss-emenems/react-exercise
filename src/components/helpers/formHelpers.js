/**
 * Created by Trilian on 19/04/2018.
 */
import React from "react";

export const InputField = ( {label, htmlFor, inputType, placeholder} ) => {
	return (
		<div className="form__field field--">
			{ label && <label htmlFor={ htmlFor } >{ label }</label> }
			<input type={ inputType } placeholder={ placeholder }/>
		</div>
	);
}

export const InputCheckbox = ( label ) => {
	return (
		<div className="form__field field--">
			<input type="checkbox" />
			<label>{ label }</label>
		</div>
	);
}