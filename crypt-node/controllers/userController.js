// userController.js

const User = require("../models/User");

async function getAllUsers(req, res) {
	const users = await User.find();
	try {
		if (users.length === 0) {
			return res.status(400).json({ message: "Users not found" });
		}
		return res.status(200).json(users);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't retrieve users" });
	}
}

async function getUserById(req, res) {
	const { id } = req.params;
	const user = await User.findById(id);
	try {
		return res.status(200).json(user);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't get the user" });
	}
}

async function createUser(req, res) {
	const userToCreate = await User.create(req.body);
	try {
		return res.status(201).json(userToCreate);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't create the user" });
	}
}

async function updateUser(req, res) {
	const { id } = req.params;
	const userToUpdate = await User.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	try {
		return res.status(202).json(userToUpdate);
	} catch (error) {
		return res.status(500).json({ message: "Couldn't update the user" });
	}
}

async function deleteUser(req, res) {
	const { id } = req.params;
	await User.findByIdAndDelete(id);
	try {
		return res.status(203).json({ message: "Deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Couldn't delete the user" });
	}
}

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
