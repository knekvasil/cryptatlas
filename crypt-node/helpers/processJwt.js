// generateJwt.js

const jwt = require("jsonwebtoken");
const User = require("../models/User");

function generateJwt(id) {
	return new Promise((resolve, reject) => {
		jwt.sign(
			{ id },
			process.env.SECRET_KEY,
			{ expiresIn: "4h" },
			(err, token) => {
				if (err) {
					reject(err);
				} else {
					resolve(token);
				}
			}
		);
	});
}

async function validateJwt(req, res, next) {
	const token = req.header("Authorization");
	if (!token) {
		return res.status(500).json({ message: "Token not found" });
	}
	try {
		const { id } = jwt.verify(token, process.env.SECRET_KEY);
		req.user = await User.findById(id);
		next();
	} catch (error) {
		return res.status(401).json({ message: "Invalid Token" });
	}
}

async function isAdmin(req, res, next) {
	if (!req.user) {
		return res.status(500).json({ message: "Need validation first" });
	}
	const { role, name } = req.user;
	if (role !== "ADMIN") {
		return res
			.status(401)
			.json({ message: `User ${name} is not authorized for such an action` });
	}
}

module.exports = { generateJwt, validateJwt, isAdmin };
