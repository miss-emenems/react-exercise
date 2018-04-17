/**
 * Created by Trilian on 17/04/2018.
 */

import React from "react";

const ResultsItem = (props) => {
	const result = props.result;
	return (
		<li className="list__item item">
			<span className="item__number">{ result.id }</span>
			<h2 className="item__name">{ result.name }</h2>
			<address className="item__address">
				{ result.address },<br/>{ result.postcode }
			</address>
			<p className="item__distance">distance</p>
		</li>
	)
}

export default ResultsItem;