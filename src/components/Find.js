import React, { Component } from "react";
import Form from './Form';
import Results from './Results';
import {ButtonNextStep} from "./helpers/buttons";
class Find extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step1: true,
			step2: false,
			postcode: ''
		};
		this.goToStep2 = this.goToStep2.bind(this);
	}
	goToStep2() {
		this.setState((prevState) => ({
			step1: !prevState.step1,
			step2: true
			})
		);
	}

	handleOnSearch = (searchValue) => {
		this.setState({value: searchValue})

	}

	render() {
		return (
			<div className="location box">
				<h1>Find a Motorcycle dealership</h1>
				<p>Please enter a postcode, address or location and press search to find the closest dealership.</p>
				<Form handleOnSearch={this.handleOnSearch}/>
				{

				this.state.step1 ? "" : <Results postcode={this.state.value} />

				}
				<button className="btn--full btn--solid-cta"
				        onClick={ this.state.step1 ? this.goToStep2 : this.props.action}
				>
					<span className="btn__label">Continue to the next step</span></button>
			</div>
		)
	}
}

export default Find;