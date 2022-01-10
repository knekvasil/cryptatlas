// CryptDropdown.js

import { useState, useContext } from "react";
import { Dropdown } from "react-bootstrap";

import { ModalButtonContext } from "../context/ModalButtonContext";
import { PositionContext } from "../context/PositionContext";

function CryptDropdown(props) {
	const { setModalButtonText } = useContext(ModalButtonContext);

	const { Position, setPosition } = useContext(PositionContext);

	return (
		<Dropdown.Item
			onClick={() => {
				setModalButtonText({
					text: props.object.name,
					img: props.object.img,
				});
				setPosition({ ...Position, coin: props.object.name });
			}}
			name="coin"
			key={props.name}
		>
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
	);
}

export default CryptDropdown;
