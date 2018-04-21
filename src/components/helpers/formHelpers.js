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

export const SelectField = ( {label, selectName, selectId} ) => {
	return (
		<div className="form__field field field--select">
			{ label && <label htmlFor={ selectId } className="field__label">{ label }</label> }
			<select className="field__select" name={ selectName } id={`select${ selectId }`}>
				<option value="Miss">Miss</option>
				<option value="Mrs">Mrs</option>
				<option value="Ms">Ms</option>
				<option value="Mr">Mr</option>
			</select>
		</div>
	);
};

export const InputCheckbox = ( {id, text} ) => {
	return (
		<div className="form__field field field--checkbox">
			<input id={ id } type="checkbox" />
			<label htmlFor={`checkbox${ id }`}>{ text }</label>
		</div>
	);
}


export const InputRadio = ( {id, name, text} ) => {
	return (
		<div className="form__field field field--radio-button">
			<input id={ id } type="radio" name={ name } />
			<label htmlFor={`radio${ id }`}>{ text }</label>
		</div>
	);
}