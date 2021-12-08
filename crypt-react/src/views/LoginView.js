// LoginView.js

import "./AuthForm.css";

function LoginView() {
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
									<a href="" className="btn btn-block btn-info">
										<i className="bi bi-twitter"></i> Login via Twitter
									</a>

									<a href="" className="btn btn-block btn-primary">
										<i className="bi bi-facebook"></i> Login via facebook
									</a>
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

									<div className="form-group">
										<button type="submit" className="btn btn-primary btn-block">
											{"  "}
											Create Account{" "}
										</button>
									</div>
									<p className="text-center">
										Have an account? <a href=""> Log In</a>
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

export default LoginView;
