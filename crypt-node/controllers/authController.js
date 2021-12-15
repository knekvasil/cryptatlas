// authController.js

const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateJwt } = require("../helpers/processJwt");

async function signUpUser(req, res) {
	const { email } = req.body;
	const testEmail = await User.findOne({ email });
	if (testEmail) {
		return res.status(500).json({ messages: "Couldn't create user" });
	}
	const user = new User(req.body);

	try {
		const salt = bcrypt.genSaltSync();
		user.password = bcrypt.hashSync(req.body.password, salt);
		user.save();
		return res.status(201).json(user);
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Something went wrong, please try again" });
	}
}

async function loginUser(req, res) {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (!user) {
		return res.status(500).json({ message: "Please check credentials" });
	}
	const validPassword = bcrypt.compareSync(password, user.password);
	if (!validPassword) {
		return res.status(500).json({ message: "Please check credentials" });
	}
	const token = await generateJwt(user._id);
	return res.status(200).json({ token, user });
}

async function googleLogin(req, res) {
	const { email, name } = req.body;
	let user = await User.findOne({ email });
	if (!user) {
		user = await User.create({
			email: email,
			name: name,
			password: "P",
			google: true,
		});
	}
	try {
		const token = await generateJwt(user._id);
		return res.status(200).json({ user, token });
	} catch (error) {
		return res.status(500).json({ message: "User was not able to login" });
	}
}

module.exports = {
	signUpUser,
	loginUser,
	googleLogin,
};
