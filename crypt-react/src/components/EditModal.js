// EditModal.js
import { useContext, useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import CryptDropdown from "./CryptDropdown";
import DatePicker from "react-datepicker";

import "./EditModal.css";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/AuthContext";

import { PositionContext } from "../context/PositionContext";

function EditModal(props) {
	const { Position, setPosition, createPositionInApi } =
		useContext(PositionContext);
	const { user } = useContext(AuthContext);
	// console.log("USER", user);
	const [buttonText, setButtonText] = useState("Choose Coin");
	const [startDate, setStartDate] = useState(new Date());

	// const [Position, setPosition] = useState({
	// 	userId: user._id,
	// 	coin: "",
	// 	quantity: "",
	// 	date: "",
	// });

	// console.log(Position);

	function handleChange(event) {
		setPosition({
			...Position,
			[event.target.name]: event.target.value,
		});
		// console.log(Position);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await createPositionInApi(Position);
		console.log(Position);
	}

	function changeButtonText(text) {
		setButtonText(text);
	}

	function handleDateSelect() {}

	function handleDateChange() {
		setStartDate(startDate);
		handleChange;
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
							{/* <Dropdown className="dropdown-button">
								<Dropdown.Toggle id="dropdown-autoclose-true">
									{buttonText}
								</Dropdown.Toggle>

								<Dropdown.Menu>
									{props.element.map((coinObj) => (
										<>
											<CryptDropdown
												name="coin"
												value={Position.coin}
												onSelect={() => console.log("TEST")}
												key={coinObj.name}
												object={coinObj}
											/>
										</>
									))}
								</Dropdown.Menu>
							</Dropdown> */}

							<select onChange={handleChange} name="coin">
								{props.element.map((coin) => (
									<option value={coin.name}>{coin.name}</option>
								))}
							</select>

							<div className="col">
								{/* <DatePicker
									className="datePicker"
									value={Position.date}
									name="date"
									onSelect={handleDateSelect}
									onChange={(date) => {
										setStartDate(date);
									}}
								/> */}
								<input
									value={Position.date}
									type="date"
									name="date"
									onChange={handleChange}
								/>
							</div>
							<div className="col">
								<input
									type="text"
									value={Position.quantity}
									onChange={handleChange}
									name="quantity"
									className="form-control"
									placeholder="quantity"
								/>
							</div>
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

export default EditModal;
