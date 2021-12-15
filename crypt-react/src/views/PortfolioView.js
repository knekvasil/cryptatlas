import { useContext, useEffect, useState } from "react";
let axios = require("axios");
const cc = require("cryptocompare");

cc.setApiKey(process.env.CRYPTOCOMPARE_API_KEY);

import Chart from "../components/Chart";

function Portfolio() {
	useEffect(() => {
		callDropdownAPI();
	}, []);

	async function callDropdownAPI() {
		axios
			.get(
				`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD&api_key=${process.env.CRYPTOCOMPARE_API_KEY}`
			)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}

	return (
		<>
			<h1 className="mt-3">Coin Comparison</h1>
			<div className="dropdown">
				<button
					className="btn btn-secondary btn-lg dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Choose Coins
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
			<Chart />
		</>
	);
}

export default Portfolio;
