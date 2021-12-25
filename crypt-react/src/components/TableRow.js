// TableRow.js
// global.fetch = require("node-fetch");
import { PositionContext } from "../context/PositionContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const cc = require("cryptocompare");
cc.setApiKey(process.env.CRYPTOCOMPARE_API_KEY);

function TableRow(props) {
	const [PresentCoinPrice, setPresentCoinPrice] = useState(Number);
	const [InitialCoinPrice, setInitialCoinPrice] = useState(Number);
	useEffect(() => {
		callRowAPI();
	}, []);

	const { deletePositionInApi } = useContext(PositionContext);

	async function handlePositionDelete(event) {
		console.log(event, props.elem._id);
		event.preventDefault();
		await deletePositionInApi(props.elem._id);
	}
	async function callRowAPI() {
		// Present Price
		axios
			.get(
				`https://min-api.cryptocompare.com/data/price?fsym=${props.elem.coin}&tsyms=USD&api_key=${process.env.CRYPTOCOMPARE_API_KEY}`
			)
			.then((res) => {
				let coinObj = res.data.USD;
				setPresentCoinPrice((prevCoinPrice) => coinObj);
			})
			.catch((err) => console.log(err));
		cc.priceHistorical(
			props.elem.coin,
			["USD"],
			new Date(props.elem.date.substring(0, 10))
		)
			.then((price) => {
				console.log("BTCPRICE,", price);
				let pastPrice = price.USD;
				setInitialCoinPrice((prevCoinPrice) => pastPrice);
			})
			.catch(console.error);
		// Historical Price
		// axios
		// 	.get(
		// 		`https://min-api.cryptocompare.com/data/price?fsym=${props.elem.coin}&tsyms=USD&api_key=${process.env.CRYPTOCOMPARE_API_KEY}`
		// 	)
		// 	.then((res) => {
		// 		let coinObj = res.data.USD;
		// 		setPresentCoinPrice((prevCoinPrice) => coinObj);
		// 	})
		// 	.catch((err) => console.log(err));
	}
	("");

	return (
		<tr>
			<td>{props.elem.coin}</td>
			<td>{props.elem.date.substring(0, 10)}</td>
			<td>{props.elem.quantity}</td>
			<td>${InitialCoinPrice}</td>
			<td>${PresentCoinPrice}</td>
			<td>${(props.elem.quantity * InitialCoinPrice).toFixed(2)}</td>
			<td>${(props.elem.quantity * PresentCoinPrice).toFixed(2)}</td>
			<td>
				{(
					((PresentCoinPrice - InitialCoinPrice) / InitialCoinPrice) *
					100
				).toFixed(2)}
				%
			</td>
			<td>
				{/* <button
					// onClick={handlePostDelete}
					className="form-control btn btn-primary"
					style={{ width: "30px", height: "21px" }}
				>
					<i
						className="bi bi-pencil-fill"
						style={{
							position: "relative",
							bottom: "9px",
							right: "6px",
						}}
					></i>
				</button>{" "} */}
				<button
					onClick={handlePositionDelete}
					className="form-control btn btn-danger"
					style={{ width: "30px", height: "21px" }}
				>
					<i
						className="bi bi-trash-fill"
						style={{
							position: "relative",
							bottom: "9px",
							right: "6.5px",
						}}
					></i>
				</button>
			</td>
		</tr>
	);
}

export default TableRow;
