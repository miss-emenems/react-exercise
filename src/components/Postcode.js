/**
 * Created by Martyna on 17/04/2018.
 */
import React from "react";
import { InputField } from "./helpers/formHelpers";

export default class Form extends React.Component {

	constructor() {
		super();
		this.state = {
			value: '',
		};
		this.onChange = this.onChange.bind(this);

	}

	add() {
		this.props.onButtonClick(this.state.value);
	}
	onChange(e) {
		this.setState({ value: e.target.value })
	}

	render() {
		return (
			<div className="find__postcode">
				<form action="" className="form">
					<fieldset className="form__section section--location">
						<div className="form--location grid-parent">
							<div className="grid-child">
								<InputField
									label="Postcode"
									id="postcode"
									inputType="text"
									value={ this.state.value }
									placeholder="e.g. M1 3BE"
									actionOnChange={ this.onChange }
								/>
							</div>
							<div className="grid-child">
								<button
									className="btn--basic btn--solid-black"
									disabled={!this.state.value}
								  onClick={this.add}
								>
									<span className="btn__label">Use postcode</span>
								</button>
							</div>
							<div className="grid-child child--my-location">
								<button
									className="btn--full btn--solid-black"
								>
									<span className="btn__label">Use my location</span>
								</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		)
	}
}