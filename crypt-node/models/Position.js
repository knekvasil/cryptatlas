// Position.js

const { model, Schema } = require("mongoose");

const PositionSchema = Schema({
	userId: { type: String, ref: "User" },
	coin: { type: String },
	quantity: { type: Number },
	date: { type: Date },
});

module.exports = model("Position", PositionSchema);
