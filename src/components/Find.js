/**
 * Created by Martyna on 17/04/2018.
 */

import React, { Component } from "react";
import Postcode from './Postcode';
import Results from './Results';


class Find extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step1: true,
			step2: false,
			postcode: ''
		};
		this.goToStep2 = this.goToStep2.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	goToStep2() {
		this.setState((prevState) => ({
			step1: !prevState.step1,
			step2: true
			})
		);
	}
	onChange(e) {
		this.setState({ postcode: e.target.value })
	}

	render() {
		return (
			<div className="finder__find find box">
				<h1>Find a Motorcycle dealership</h1>
				<p>Please enter a postcode, address or location and press Use Postcode to find the closest dealership.</p>
				<Postcode />
				{
				this.state.step1 ? "" : <Results postcode={ this.state.postcode } />
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