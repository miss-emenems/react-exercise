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
		this.state = { stage1: true, stage2: false };
		this.goToStep2 = this.goToStep2.bind(this);
	}
	goToStep2(e) {
		e.preventDefault();
			this.setState((prevState) => ({
			stage1: !prevState.stage1,
			stage2: true
			})
		);
	}
	goToStep3() {
		this.setState((prevState) => ({
				stage2: !prevState.stage2,
				//stage2: true
			})
		);
	}


	/*constructor(props) {
		super(props);
		this.state = {
			listDataFromChild: null
		};
	}
	myCallback = ( dataFromChild ) => {
		console.log("aaa");
		this.setState({ listDataFromChild: dataFromChild });
	}*/

	render() {
		return (
			<div className="location box">
				<h1>Find a Motorcycle dealership</h1>
				<p>Please enter a postcode, address or location and press search to find the closest dealership.</p>
				<Form />
				{
				this.state.stage1 ? "" : <Results />
				}
				<a className="btn--full btn--solid-cta"
				   href={ this.state.stage1 ? "#" : "/contact" }
				   onClick={ this.state.stage1 ? this.goToStep2 : this.goToStep3
				}>
					Continue to the next step
				</a>

				{
					this.state.stage2 ? "stage 2" : "bbbbb"
				}
			</div>
		)
	}
}

export default Find;