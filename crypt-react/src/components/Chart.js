// Chart.js

import { useEffect } from "react";

function Chart() {
	// hooks
	useEffect(() => {
		// initChart();
	}, []);

	function initChart() {
		var chart = new Chart(document.getElementById("portChart"), {
			type: "line",
			data: {
				labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
				datasets: [
					{
						data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
						label: "Africa",
						borderColor: "#3e95cd",
						fill: false,
					},
				],
			},
			options: {
				title: {
					display: true,
					text: "World population per region (in millions)",
				},
			},
		});
		return chart;
	}

	return (
		<div className="col-xl-6">
			<div className="card mb-4">
				<div className="card-header">
					<i className="fas fa-chart-area me-1"></i>
					Portfolio Price History
				</div>
				<div className="card-body">
					<canvas id="portChart" width="100%" height="40"></canvas>
				</div>
			</div>
		</div>
	);
}

export default Chart;
