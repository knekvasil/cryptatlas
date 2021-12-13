// Position.js

const { model, Schema } = require("mongoose");

const PositionSchema = Schema({
	userId: { type: String, ref: "User" },
	coin: { type: String, required: true },
	quantity: { type: Number, required: true },
	date: { type: Date, required: true },
});

module.exports = model("Position", PositionSchema);
