// PositionContext.js

import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext, jwtString } from "./AuthContext";
import axios from "axios";
import apiHelper from "../helpers/apiHelper";
const apiUrl = process.env.REACT_APP_API_URL;

export const PositionContext = createContext({});

function PositionProvider({ children }) {
	const { user } = useContext(AuthContext);

	const [Positions, setPositions] = useState([]);
	const [Position, setPosition] = useState({
		coin: "",
		quantity: "",
		date: "",
	});

	useEffect(() => {
		getAllPositions();
	}, []);

	// GET/positions
	async function getAllPositions() {
		const response = await apiHelper.get("/positions");
		setPositions(response.data);
		return response;
	}

	// GET/positions/position/:id
	async function getSinglePositionFromApi(id) {
		const response = await apiHelper.get(`/positions/position/${id}`);
		return response;
	}

	// POST/positions/position
	async function createPositionInApi(position) {
		let { user } = JSON.parse(localStorage.getItem(jwtString));
		position.userId = user._id;

		console.log("CREATE", position);

		const response = await apiHelper.post("/positions/position", position);

		alert("Position created successfully");
		getAllPositions();
		return response;
	}

	// PUT/positions/position/:id
	async function updatePositionInApi(obj) {
		const { ...position } = obj;

		const response = await apiHelper.put(
			`/positions/position/${obj._id}`,
			position
		);
		alert("Updated Position Successfully");
		return response;
	}

	// DELETE/positions/position/:id
	async function deletePositionInApi(id) {
		const response = await apiHelper.delete(`/positions/position/${id}`);
		getAllPositions();
		return response;
	}

	return (
		<PositionContext.Provider
			value={{
				Position,
				Positions,
				setPosition,
				setPositions,
				getAllPositions,
				getSinglePositionFromApi,
				createPositionInApi,
				updatePositionInApi,
				deletePositionInApi,
			}}
		>
			{children}
		</PositionContext.Provider>
	);
}

export default PositionProvider;
