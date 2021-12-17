// AuthContext.js

import { createContext, useEffect, useState } from "react";
import apiHelper from "../helpers/apiHelper";
import axios from "axios";
export const AuthContext = createContext({});

export const jwtString = "jwtcryptatlas";

function AuthProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState({
		email: "",
		name: "",
		password: "",
		role: "",
		google: false,
	});

	useEffect(() => {
		checkedLogged();
		revalidateToken();
	}, [loggedIn]);

	function checkedLogged() {
		const tokenValue = localStorage.getItem(jwtString);
		return tokenValue ? setLoggedIn(true) : setLoggedIn(false);
	}

	function setLocalStorageToken(data) {
		localStorage.setItem(jwtString, JSON.stringify(data));
	}

	async function loginUser(obj) {
		try {
			const response = await apiHelper.post("/auth/login", obj);
			const { data } = response;
			setUser(data.user);
			setLocalStorageToken(data);
			setLoggedIn(true);
			console.log("Successfully logged in");
		} catch (error) {
			console.log(`${error.response.data.message}`);
		}
	}

	async function googleLogin(obj) {
		const response = await apiHelper.post("/auth/googleLogin", obj);
		// const response = await axios.post(
		// 	"http://localhost:5000/api/auth/googleLogin",
		// 	obj
		// );
		// console.log("RESPONSEE --->>>", response);
		if (response.data) {
			localStorage.setItem(jwtString, JSON.stringify(response.data));
			console.log("Logged in through Google");
			setLoggedIn(true);
		}
	}

	async function signUpUser(obj) {
		const response = await apiHelper.post("/auth/signup", obj);
		if (response.data) {
			setLocalStorageToken(response.data);
			console.log("Signed Up & Logged In");
			setLoggedIn(true);
			setUser({
				name: "",
				email: "",
				password: "",
				role: "",
			});
		}
	}

	async function revalidateToken() {
		if (!loggedIn) return;
		try {
			const response = await apiHelper.post("/auth/renew");
			const { data } = response;
			setUser(data.user);
			setLocalStorageToken(data);
		} catch (error) {
			localStorage.removeItem(jwtString);
			console.log(error);
		}
	}

	function logOutUser() {
		localStorage.removeItem(jwtString);
		setLoggedIn(false);
		console.log("logged out");
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				loggedIn,
				loginUser,
				logOutUser,
				signUpUser,
				googleLogin,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
