// CryptTable.js

import { Table } from "react-bootstrap";
import { useContext } from "react";
import { PositionContext } from "../context/PositionContext";

import TableRow from "./TableRow";
import { AuthContext } from "../context/AuthContext";

function CryptTable() {
	const { Positions } = useContext(PositionContext);
	const { user } = useContext(AuthContext);
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
						<th>Initial Value</th>
						<th>Total Value</th>
						<th>Total Change</th>
					</tr>
				</thead>
				<tbody>
					{Positions.filter((position) => position.userId._id == user._id).map(
						(position, i) => {
							return (
								<>
									<TableRow key={i} elem={position} />
								</>
							);
						}
					)}
				</tbody>
			</Table>
		</>
	);
}

export default CryptTable;
