// app.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log("Connected to db..."))
	.catch(() => console.log("Couldn't connect to db..."));

app.use(express.json());

app.get("/", (req, res) => res.send("CRYPTATLAS API - HOME"));

app.use("/api/users", require("./routes/user"));
app.use("/api/positions", require("./routes/position"));
app.use("/api/auth", require("./routes/auth"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running..."));
