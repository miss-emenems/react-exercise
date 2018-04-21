/**
 * Created by Trilian on 19/04/2018.
 */
import React from "react";

export const InputField = ( {label, htmlFor, inputType, placeholder} ) => {
	return (
		<div className="form__field field field--input">
			{ label && <label htmlFor={ htmlFor } className="field__label">{ label }</label> }
			<input type={ inputType } className="field__input" placeholder={ placeholder }/>
		</div>
	);
};

export const InputCheckbox = ( {id, text} ) => {
	return (
		<div className="form__field field field--checkbox">
			<input id={ id } type="checkbox" />
			<label htmlFor={`checkbox-${ id }`}>{ text }</label>
		</div>
	);
}