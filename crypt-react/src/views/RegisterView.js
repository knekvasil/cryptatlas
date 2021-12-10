// SignupView.js

import "./AuthForm.css";
import { Link } from "react-router-dom";

import { useContext, useEffect } from "react";
import { NavBarContext } from "../context/NavBarContext";

import GoogleLogin from "react-google-login";

function Register() {
	const { setAuthPath } = useContext(NavBarContext);

	useEffect(() => {
		setAuthPath(false);

		return () => {
			setAuthPath(true);
		};
	}, []);

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
										// onSuccess={responseGoogle}
										// onFailure={responseGoogle}
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
												<i className="bi bi-person-fill"></i>{" "}
											</span>
										</div>
										<input
											name=""
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
											name=""
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
											className="form-control"
											placeholder="Repeat password"
											type="password"
										/>
									</div>
									<div className="form-group button">
										<button type="submit" className="btn btn-primary btn-block">
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
