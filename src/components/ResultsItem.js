/**
 * Created by Trilian on 17/04/2018.
 */

import React from "react";

const ResultsItem = (props) => {
	const result = props.result;
	return (
		<div className="grid-child height-fr">
			<button className="btn--box btn--full">
				<div className="results__item item">
					<span className="item__number invert">{ result.id }</span>
					<h3 className="item__name">{ result.name }</h3>
					<address className="item__address">
						{ result.firstLine },<br/>
						{ result.city },<br/>
						{ result.postcode }
					</address>
					<p className="item__distance">distance goes here</p>
				</div>
			</button>
		</div>
	)
}

export default ResultsItem;