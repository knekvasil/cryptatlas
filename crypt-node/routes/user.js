// user.js

const express = require("express");

const {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user/", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
