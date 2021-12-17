// CryptTable.js

import { Table } from "react-bootstrap";

function CryptTable() {
	return (
		<>
			<h3>Positions</h3>
			<Table responsive="sm">
				<thead>
					<tr>
						<th>Coin</th>
						<th>Date</th>
						<th>Quantity</th>
						<th>Buy Price</th>
						<th>Current Price</th>
						<th>Total Value</th>
						<th>Edit/Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>Table cell</td>
						<td>
							<button
								// onClick={handlePostDelete}
								className="form-control btn btn-primary"
								style={{ width: "30px", height: "21px" }}
							>
								<i
									className="bi bi-pencil-fill"
									style={{ position: "relative", bottom: "9px", right: "6px" }}
								></i>
							</button>{" "}
							<button
								// onClick={handlePostDelete}
								className="form-control btn btn-danger"
								style={{ width: "30px", height: "21px" }}
							>
								<i
									className="bi bi-trash-fill"
									style={{
										position: "relative",
										bottom: "9px",
										right: "5.5px",
									}}
								></i>
							</button>
						</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
}

export default CryptTable;
