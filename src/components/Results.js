/**
 * Created by Trilian on 17/04/2018.
 */
import React from "react";
import ResultsItem from "./ResultsItem";
import results from "../data/results.json";

const Results = () => {
	return (
		<div className="results">
			<div className="results__list">
				<ul className="list list--shops">
					{
						results.map((result, i) => {
							return (
								<ResultsItem key={ i } result={ result } />
							)
						})
					}
				</ul>
			</div>
			<div className="results__map">
				<div className="map">

				</div>
			</div>
			<div className="results__button">
				<button>Continue to next step</button>
			</div>
		</div>
	)
}

export default Results;