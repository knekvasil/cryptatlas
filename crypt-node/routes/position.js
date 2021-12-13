// position.js

const express = require("express");
const router = express.Router();

const { check } = require("express-validator");
const { validateJwt } = require("../helpers/processJwt");

const {
	getAllPositions,
	getPositionById,
	createPosition,
	updatePosition,
	deletePosition,
} = require("../controllers/positionController");

router.get("/", validateJwt, getAllPositions);
router.get("/position/:id", validateJwt, getPositionById);
router.post(
	"/position/",
	[
		check("coin", "You are required to pick a coin").not().isEmpty(),
		check("quantity", "You are required to enter a quantity").not().isEmpty(),
		check("date", "You are required to enter a date").not().isEmpty(),
		validateJwt,
	],
	createPosition
);
router.put("/position/:id", validateJwt, updatePosition);
router.delete("/position/:id", validateJwt, deletePosition);

module.exports = router;
