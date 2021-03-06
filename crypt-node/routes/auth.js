// auth.js

const express = require("express");
const router = express.Router();

const { check } = require("express-validator");
const {
	loginUser,
	signUpUser,
	googleLogin,
} = require("../controllers/authController");
const { validateFields } = require("../helpers/validateFields");
const { validateJwt, revalidateJwt } = require("../helpers/processJwt");

router.post(
	"/login",
	[
		check("email", "You are required to enter an email").isEmail(),
		check("password", "You are required to enter a password").not().isEmpty(),
		validateFields,
	],
	loginUser
);

router.post(
	"/signup",
	[
		check("name", "You are required to enter a name").not().isEmpty(),
		check("email", "You are required to enter a valid email").isEmail(),
		check(
			"password",
			"Password must be 8 characters long with capital letter & symbol"
		).matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
		validateFields,
	],
	signUpUser
);

router.post("/googleLogin", googleLogin);
router.post("/renew", validateJwt, revalidateJwt);

module.exports = router;
