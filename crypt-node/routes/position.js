// position.js

const express = require("express");

const {
	getAllPositions,
	getPositionById,
	createPosition,
	updatePosition,
	deletePosition,
} = require("../controllers/positionController");

const router = express.Router();

router.get("/", getAllPositions);
router.get("/position/:id", getPositionById);
router.post("/position/", createPosition);
router.put("/position/:id", updatePosition);
router.delete("/position/:id", deletePosition);

module.exports = router;
