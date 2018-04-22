/**
 * Created by Trilian on 17/04/2018.
 */

import React, { Component } from "react";
import Form from './Form';
import Results from './Results';
import {ButtonNextStep} from "./helpers/buttons";


class Find extends Component {
	constructor(props) {
		super(props);
		this.state = { step1: true, step2: false };
		this.goToStep2 = this.goToStep2.bind(this);
	}
	goToStep2() {
		this.setState((prevState) => ({
			step1: !prevState.step1,
			step2: true
			})
		);
	}

	render() {
		return (
			<div className="location box">
				<h1>Find a Motorcycle dealership</h1>
				<p>Please enter a postcode, address or location and press search to find the closest dealership.</p>
				<Form />
				{
				this.state.step1 ? "" : <Results />
				}
				<button className="btn--full btn--solid-cta"
				   onClick={ this.state.step1 ? this.goToStep2 : this.props.action
				}>
					Continue to the next step
				</button>


				{
					this.state.step2 ? "step 2" : "step1"
				}
			</div>
		)
	}
}

export default Find;