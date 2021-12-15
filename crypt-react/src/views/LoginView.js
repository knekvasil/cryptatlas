// LoginView.js

import "./AuthForm.css";
import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { NavBarContext } from "../context/NavBarContext";

import GoogleLogin from "react-google-login";

function Login() {
	const { setAuthPath } = useContext(NavBarContext);
	const navigate = useNavigate();

	const { loginUser, googleLogin, loggedIn } = useContext(AuthContext);
	const [validated, setValidated] = useState(false);
	const [errors, setErrors] = useState([]);
	const [user, setUser] = useState({
		password: "",
		email: "",
	});

	useEffect(() => {
		setAuthPath(false);

		return () => {
			setAuthPath(true);
		};
	}, []);

	function handleChange(event) {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.stopPropogation();
			setValidated(true);
			return;
		}
		const response = await loginUser(user);
		if (response?.errors) {
			setErrors(response.errors);
		}
		setUser({
			email: "",
			password: "",
		});

		// console.log(loggedIn);
		// if (loggedIn) {
		navigate("/portfolio");
		// }
	}

	function responseGoogle(res) {
		try {
			const { email, name } = res.profileObj;
			googleLogin({ email, name });
			navigate("/portfolio");
		} catch (error) {
			console.log(error);
		}
		// todo send to AuthContext method => googleLogin
	}

	return (
		<section
			className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark"
			style={{
				minHeight: "100vh",
				// backgroundSize: "cover",
				// backgroundImage:
				// 	"url(/blk-design-system-react/static/media/dots.1e305f98.png)",
			}}
		>
			<div className="container-fluid">
				<div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
					<div className="col-12 col-md-4 col-lg-3   h-50 ">
						<div className="card shadow">
							<div className="card-body mx-auto">
								<h4 className="card-title mt-3 text-center">Login</h4>
								<p className="text-center">Sign in to your existing account</p>
								<p>
									<GoogleLogin
										className="form-control center"
										clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
										buttonText="Login with Google"
										onSuccess={responseGoogle}
										onFailure={responseGoogle}
									/>
								</p>
								<p className="text-muted font-weight-bold ">
									<span>OR</span>
								</p>
								<form>
									<div className="form-group input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												{" "}
												<i className="bi bi-envelope-fill"></i>{" "}
											</span>
										</div>
										<input
											value={user.email}
											onChange={handleChange}
											name="email"
											className="form-control"
											placeholder="Email address"
											type="email"
										/>
									</div>
									<div className="form-group input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												{" "}
												<i className="bi bi-lock-fill"></i>{" "}
											</span>
										</div>
										<input
											value={user.password}
											onChange={handleChange}
											name="password"
											className="form-control"
											placeholder="Password"
											type="password"
										/>
									</div>

									<div className="form-group button">
										<button
											type="submit"
											onClick={handleSubmit}
											className="btn btn-primary btn-block"
										>
											{"  "}
											Login{" "}
										</button>
									</div>
									<p className="text-center">
										Dont have an account? <Link to="/register">Register</Link>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
