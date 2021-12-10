// NavBar.js

import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { NavBarContext } from "../context/NavBarContext";

function NavBar() {
	const { authPath } = useContext(NavBarContext);

	// function isAuthPath() {
	// 	if (authPath) (
	// 		window.location.pathname === "/register" ||
	// 		window.location.pathname === "/login"
	// 	) {
	// 		setAuthState(false);
	// 	} else {
	// 		setAuthState(true);
	// 	}
	// }

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container px-5 mt-2 mb-2">
				<Link to="/">Cryptatlas</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item"></li>
						{authPath && (
							<li className="nav-item">
								<Link to="/login">
									{console.log(window.location.pathname === "/login")}
									<button type="button" className="btn btn-light">
										Login
									</button>
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
