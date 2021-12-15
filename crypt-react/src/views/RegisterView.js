// SignupView.js

import "./AuthForm.css";
import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { NavBarContext } from "../context/NavBarContext";
import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router";

import GoogleLogin from "react-google-login";

function Register() {
	const navigate = useNavigate();
	const { signUpUser, googleLogin } = useContext(AuthContext);

	const [validated, setValidated] = useState(false);
	const [errors, setErrors] = useState([]);
	const { setAuthPath } = useContext(NavBarContext);

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	useEffect(() => {
		setAuthPath(false);

		return () => {
			setAuthPath(true);
		};
	}, []);

	function handleChange(event) {
		setUser({ ...user, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.stopPropogation();
			setValidated(true);
			return;
		}
		const response = await signUpUser(user);
		if (response?.errors) {
			setErrors(response.errors);
		}
		setUser({
			name: "",
			email: "",
			password: "",
		});
		navigate("/portfolio");
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
								<h4 className="card-title mt-3 text-center">Create Account</h4>
								<p className="text-center">
									Get started with your free account
								</p>
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

								<form onSubmit={handleSubmit}>
									<div className="form-group input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												{" "}
												<i className="bi bi-person-fill"></i>{" "}
											</span>
										</div>
										<input
											value={user.name}
											onChange={handleChange}
											name="name"
											className="form-control"
											placeholder="Full name"
											type="text"
										/>
									</div>
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
											placeholder="Create password"
											type="password"
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
											name="password"
											value={user.password}
											onChange={handleChange}
											className="form-control"
											placeholder="Repeat password"
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
											Create Account{" "}
										</button>
									</div>
									<p className="text-center">
										Have an account? <Link to="/login">Login</Link>
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

export default Register;
