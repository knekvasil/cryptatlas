import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavBarContext } from "../context/NavBarContext";
import logo from "./NavBarAssets/logo-cryptatlas.png";

import "./NavBar.css";
import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router";

function NavBar() {
	const { authPath } = useContext(NavBarContext);
	const { loggedIn, logOutUser } = useContext(AuthContext);

	const navigate = useNavigate();

	async function handleLogOut(event) {
		logOutUser();
		navigate("/");
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container px-5 mt-2 mb-2">
				<Link to="/">
					<img src={logo} className="logo-nav" alt="" />
				</Link>

				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					<li className="nav-item"></li>
					{loggedIn && (
						<button onClick={handleLogOut} className="btn btn-light">
							Sign out
						</button>
					)}
					{authPath && !loggedIn && (
						<li className="nav-item">
							<Link to="/login">
								<button type="button" className="btn btn-light">
									Login
								</button>
							</Link>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
