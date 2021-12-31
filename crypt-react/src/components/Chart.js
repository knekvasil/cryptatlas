// Chart.js

import { useEffect, useState, useContext } from "react";
import { Line, Bar } from "react-chartjs-2";
import { TableToChartContext } from "../context/TableToChartContext";

function Chart(props) {
	// const [ChartData, setChartData] = useState({});
	const { CoinDatePriceStore } = useContext(TableToChartContext);

	useEffect(() => {
		// initChart();
	}, []);

	let chartLabels = [1, 2, 3, 4, 4, 5, 6, 7, 8];
	let portfolioSum = [1, 2, 3, 4, 4, 5, 6, 7, 8];
	function initChart() {
		// let labelsList = ["A", "B", "C", "D"];
		// let dataList = [1, 2, 6, 4];
		// setChartData({
		// 	// labels: labelsList.map((label) => label),
		// 	datasets: [
		// 		{
		// 			labels: "Price in USD",
		// 			data: dataList.map((datum) => datum),
		// 			backgroundColor: [
		// 				"#ffbb11",
		// 				"#ecf0f1",
		// 				"#50AF95",
		// 				"#f3ba2f",
		// 				"#2a71d0",
		// 			],
		// 		},
		// 	],
		// });
	}

	return (
		<div>
			<Line
				data={{
					labels: chartLabels,
					datasets: [
						{
							label: "Portfolio Value",
							data: portfolioSum,

							fill: false,
							tension: 0.4,
						},
					],
				}}
				height={400}
				// width={100}
				options={{
					maintainAspectRatio: false,
				}}
			/>
		</div>
	);
}

export default Chart;
