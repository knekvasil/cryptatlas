// PositionController.js

const Position = require("../models/Position");

async function getAllPositions(req, res) {
	const positions = await Position.find().populate("userId");
	try {
		// WHEN LAST ELEM IS DELETED IT THOWS ERROR AND
		// STOPS THE REACTAPP.

		// if (positions.length === 0) {
		// 	return res.status(400).json({ message: "Positions not found" });
		// }
		return res.status(200).json(positions);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't retrieve positions" });
	}
}

async function getPositionById(req, res) {
	const { id } = req.params;
	const position = await Position.findById(id).populate("userId");
	try {
		return res.status(200).json(position);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't get the position" });
	}
}

async function createPosition(req, res) {
	const positionToCreate = await Position.create(req.body);
	try {
		return res.status(201).json(positionToCreate);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't create the position" });
	}
}

async function updatePosition(req, res) {
	const { id } = req.params;
	const positionToUpdate = await Position.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	try {
		return res.status(202).json(positionToUpdate);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't update the position" });
	}
}

async function deletePosition(req, res) {
	const { id } = req.params;
	await Position.findByIdAndDelete(id);
	try {
		return res.status(203).json({ message: "Deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Couldn't delete the position" });
	}
}

module.exports = {
	getAllPositions,
	getPositionById,
	createPosition,
	updatePosition,
	deletePosition,
};
