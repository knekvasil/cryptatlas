// AuthContext.js

import { createContext, useEffect, useState } from "react";
import apiHelper from "../helpers/apiHelper";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const jwtString = "jwtcryptatlas";
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		checkedLogged();
	}, []);

	useEffect(() => {
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
			toast.success("Successfully Loged In");
		} catch (error) {
			toast.error(`${error.response.data.message}`);
		}
	}

	async function signUpUser(obj) {
		const response = await apiHelper.post("/auth/signup", obj);
		if (response.data) {
			setLocalStorageToken(response.data);
			toast.success("Signed Up & Logged In");
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
			localStorage.removeItem(jwt_string);
			console.log(error);
		}
	}

	function logOutUser() {
		localStorage.removeItem(jwt_string);
		toast.warning("Successfully Logged Out");
		setLoggedIn(false);
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
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
