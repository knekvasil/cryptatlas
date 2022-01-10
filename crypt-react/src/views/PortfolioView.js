import { useContext, useEffect, useState } from "react";
let axios = require("axios");

import Chart from "../components/Chart";
import CryptDropdown from "../components/CryptDropdown";

import { Dropdown, Button } from "react-bootstrap";

import "./PortfolioView.css";
import PortfolioModal from "../components/PortfolioModal";
import CryptTable from "../components/CryptTable";

import { PositionContext } from "../context/PositionContext";
import { AuthContext } from "../context/AuthContext";

function Portfolio() {
	const [CoinList, setCoinList] = useState([]);
	const [modalShow, setModalShow] = useState(false);

	const { getAllPositions } = useContext(PositionContext);
	const { user } = useContext(AuthContext);

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
			<header className="bg-custom">
				<div className="container-xl p-5">
					<div className="row align-items-center justify-content-between">
						<div className="col-12 col-md mb-4 mb-md-0">
							<h1 className="mb-1 display-4 fw-500 text-white">
								Hello, {user.name}!
							</h1>
							<p className="lead mb-0 text-white">
								Your portfolio is ready to view!
							</p>
						</div>
					</div>
				</div>
			</header>

			<div className="row mt-3">
				<div className="col-xl-8">
					<div className="card mb-4">
						<div className="card-header">
							<div className="card-body-header">
								<h3>Positions</h3>
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
							</div>
						</div>
						<div className="card-body">
							<CryptTable />
						</div>
					</div>
				</div>
				<div className="col-xl-4">
					<div className="card mb-4">
						<div className="card-header">
							<i className="fas fa-chart-bar me-1"></i>
							Bar Chart Example
						</div>
						<div className="card-body">
							<Chart element={1} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
