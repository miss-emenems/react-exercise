/**
 * Created by Martyna on 22/04/2018.
 */
import React from "react";


export class ButtonNextStep extends React.Component {
	constructor(props) {
		super(props);
		this.state = {toggle: true};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		console.log('button clicked');
		this.setState((prevState) => ({
				toggle: !prevState.toggle
			})
		);
	}
	render() {
		return(
			<button className="btn--full btn--solid-cta" onClick={ this.handleClick }>{this.state.toggle ? "Continue to the next step" : "clicked"}</button>
		)
	}
}