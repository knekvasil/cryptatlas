// CryptDropdown.js

import { useState } from "react";
import { Dropdown } from "react-bootstrap";

function CryptDropdown(props) {
	return (
		<>
			<Dropdown.Item name="coin" key={props.name}>
				<div>
					<img
						src={props.object.img}
						alt={props.object.img}
						width="50"
						style={{ paddingRight: "20px" }}
					/>
					{props.object.name}
				</div>
			</Dropdown.Item>
		</>
	);
}

export default CryptDropdown;
