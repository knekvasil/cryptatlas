// CryptTable.js

import { Table } from "react-bootstrap";
import { useContext } from "react";
import { PositionContext } from "../context/PositionContext";

import TableRow from "./TableRow";

function CryptTable() {
	const {
		Position,
		setPosition,
		Positions,
		setPositions,
		deletePositionInApi,
	} = useContext(PositionContext);

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
						<th>Edit/Delete</th>
					</tr>
				</thead>
				<tbody>
					{Positions.map((position, i) => {
						return (
							<>
								<TableRow key={i} elem={position} />
							</>
						);
					})}
				</tbody>
			</Table>
		</>
	);
}

export default CryptTable;
