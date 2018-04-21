/**
 * Created by Trilian on 17/04/2018.
 */
import React from "react";
import ResultsItem from "./ResultsItem";
import results from "../data/results.json";

const Results = () => {
	return (
		<div className="grid-parent results">
			<div className="grid-child results__list list--shops">
				{
					results.map((result, i) => {
						return (
							<ResultsItem key={ i } result={ result } />
						)
					})
				}
			</div>
			<div className="grid-child results__map">
				<div className="map">
					dfghjkl
				</div>
			</div>
		</div>
	)
}

export default Results;