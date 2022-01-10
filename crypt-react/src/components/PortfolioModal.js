// PortfolioModal.js
import { useContext, useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import CryptDropdown from "./CryptDropdown";
import DatePicker from "react-datepicker";

import "./PortfolioModal.css";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/AuthContext";

import { PositionContext } from "../context/PositionContext";
import { ModalButtonContext } from "../context/ModalButtonContext";

function PortfolioModal(props) {
	const { Position, setPosition, createPositionInApi } =
		useContext(PositionContext);

	const { ModalButtonText, setModalButtonText } =
		useContext(ModalButtonContext);

	function handleChange(event) {
		setPosition({
			...Position,
			[event.target.name]: event.target.value,
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await createPositionInApi(Position);

		setModalButtonText({
			text: "Choose Coin",
			img: "",
		});
	}

	return (
		<>
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						New Position
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="form-row">
							<h6>Coin Name:</h6>
							<Dropdown className="dropdown-button">
								<Dropdown.Toggle id="dropdown-autoclose-true">
									{ModalButtonText.img.length > 0 && (
										<img
											src={ModalButtonText.img}
											alt="coinImg"
											width="25"
											height="25"
										/>
									)}{" "}
									{ModalButtonText.text}
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{props.element.map((coinObj) => (
										<CryptDropdown key={coinObj.name} object={coinObj} />
									))}
								</Dropdown.Menu>
							</Dropdown>
							<h6 className="modal-subtitle">Purchase Date:</h6>
							<input
								className="datePicker"
								value={Position.date}
								type="date"
								name="date"
								onChange={handleChange}
							/>
							<h6 className="modal-subtitle">Quantity Purchased:</h6>
							<input
								type="text"
								value={Position.quantity}
								onChange={handleChange}
								name="quantity"
								className="form-control quant"
								placeholder="quantity"
							/>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.onHide}>
						Close
					</Button>
					<Button variant="success" type="submit" onClick={handleSubmit}>
						Save Position
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default PortfolioModal;
