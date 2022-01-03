import { useContext, useEffect, useState } from "react";
let axios = require("axios");

import Chart from "../components/Chart";
import CryptDropdown from "../components/CryptDropdown";

import { Dropdown, Button } from "react-bootstrap";

import "./PortfolioView.css";
import PortfolioModal from "../components/PortfolioModal";
import CryptTable from "../components/CryptTable";

import { PositionContext } from "../context/PositionContext";

function Portfolio() {
	const [CoinList, setCoinList] = useState([]);
	const [modalShow, setModalShow] = useState(false);

	const { getAllPositions } = useContext(PositionContext);

	useEffect(() => {
		callDropdownAPI();
		getAllPositions();
	}, []);

	async function callDropdownAPI() {
		axios
			.get(
				`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD&api_key=${process.env.CRYPTOCOMPARE_API_KEY}`
			)
			.then((res) => {
				let coinObj = res.data.Data;

				coinObj.map((coinData) => {
					let storedData = {
						name: coinData.CoinInfo.Name,
						img: `https://www.cryptocompare.com/${coinData.CoinInfo.ImageUrl}`,
					};
					setCoinList((prevList) => [...prevList, storedData]);
				});
			})
			.catch((err) => console.log(err));
	}

	return (
		<>
			<h2 className="mt-3">Portfolio</h2>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				Add New Position
			</Button>

			{/* HERE LIES MY BABY RIP */}
			{/* <select>
				{CoinList.map((coin) => (
					<option
						style={{ backgroundImage: "url(coin.img)" }}
						value={coin.name}
					>
						{coin.name}
					</option>
				))}
			</select> */}

			<PortfolioModal
				element={CoinList}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			<CryptTable />

			<Chart element={1} />
		</>
	);
}

export default Portfolio;
