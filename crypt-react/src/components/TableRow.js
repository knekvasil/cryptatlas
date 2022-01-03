// TableRow.js
// global.fetch = require("node-fetch");
import { PositionContext } from "../context/PositionContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TableToChartContext } from "../context/TableToChartContext";

const cc = require("cryptocompare");
cc.setApiKey(process.env.CRYPTOCOMPARE_API_KEY);

function TableRow(props) {
	const [PresentCoinPrice, setPresentCoinPrice] = useState(Number);
	const [InitialCoinPrice, setInitialCoinPrice] = useState(Number);

	let presentDate = new Date();
	const dd = String(presentDate.getDate()).padStart(2, "0");
	const mm = String(presentDate.getMonth() + 1).padStart(2, "0");
	const yyyy = presentDate.getFullYear();
	presentDate = yyyy + "-" + mm + "-" + dd;

	useEffect(() => {
		callRowAPI();
	}, []);

	const { deletePositionInApi } = useContext(PositionContext);
	const { ChartStore, setChartStore } = useContext(TableToChartContext);

	async function handlePositionDelete(event) {
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
				// ChartStore => newElement{presentDate, present Price}
				console.log("COINZ", res.data);
				console.log("chart-state:", ChartStore);
				setChartStore({
					date: presentDate,
					coin: props.elem.coin,
					value: (coinObj * props.elem.quantity).toFixed(2),
				});
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
				// setChartStore => newElement{past date, pastPrice}
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
