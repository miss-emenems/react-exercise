/**
 * Created by Trilian on 17/04/2018.
 */
import React from "react";
import ResultsItem from "./ResultsItem";
import results from "../data/results.json";

const Results = () => {
	return (
		<div className="grid-parent results form__section">
			{
				results.map((result, i) => {
					return (
						<ResultsItem key={ i } result={ result } />
					)
				})
			}
			<div className="grid-child height-full">
				<div className="results__map">
					dfghjkl
				</div>
			</div>
		</div>
	)
}

export default Results;