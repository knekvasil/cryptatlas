// LandingPageView.js

import { Link } from "react-router-dom";

import "./LandingPageView.css";

function LandingPage() {
	return (
		<>
			<header className="bg-dark py-5">
				<div className="container px-5">
					<div className="row gx-5 align-items-center justify-content-center">
						<div className="col-lg-8 col-xl-7 col-xxl-6">
							<div className="my-5 text-center text-xl-start">
								<h1 className="display-5 fw-bolder text-white mb-2">
									Hi, we're cryptatlas
								</h1>
								<p className="lead fw-normal text-white-50 mb-4">
									We're building blockchain solutions through distribution of
									knowledge and technologies.
								</p>
								<div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
									<Link to="/login">
										<button
											type="button"
											className="btn btn-primary btn-lg px-4 me-sm-3"
										>
											Get started
										</button>
									</Link>
									<Link to="/features">
										<button
											type="button"
											className="btn btn-outline-light btn-lg px-4"
										>
											Learn More
										</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
							<img
								className="img-fluid rounded-3 my-5"
								src="https://st2.depositphotos.com/3889193/8014/i/600/depositphotos_80147336-stock-photo-business-teamwork.jpg"
								alt="..."
							/>
						</div>
					</div>
				</div>
			</header>
			<section className="py-5" id="features">
				<div className="container px-5 my-5">
					<div className="row gx-5">
						<div className="col-lg-4 mb-5 mb-lg-0">
							<h2 className="fw-bolder mb-0">
								A better way to start building.
							</h2>
						</div>
						<div className="col-lg-8">
							<div className="row gx-5 row-cols-1 row-cols-md-2">
								<div className="col mb-5 h-100">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
										<i className="bi bi-collection"></i>
									</div>
									<h2 className="h5">Why it matters</h2>
									<p className="mb-0">
										We believe it is your basic right to control your money,
										data and identity.
									</p>
								</div>
								<div className="col mb-5 h-100">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
										<i className="bi bi-building"></i>
									</div>
									<h2 className="h5">Who can join</h2>
									<p className="mb-0">
										We offer a welcoming environment for the first-time bitcoin
										user and the seasoned bitcoiner, both of whom can find
										utility in cryptatlas products.
									</p>
								</div>
								<div className="col mb-5 mb-md-0 h-100">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
										<i className="bi bi-toggles2"></i>
									</div>
									<h2 className="h5">How it works</h2>
									<p className="mb-0">
										We help customers fund their trading accounts and wallets
										via traditional payment channels.
									</p>
								</div>
								<div className="col h-100">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
										<i className="bi bi-cpu"></i>
									</div>
									<h2 className="h5">Global reach</h2>
									<p className="mb-0">
										cryptatlas works with various ecosystem partners around the
										world to incubate new ventures and build products.
										ecosystem.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="py-5 bg-light">
				<div className="container px-5 my-5">
					<div className="row gx-5 justify-content-center">
						<div className="col-lg-10 col-xl-7">
							<div className="text-center">
								<div className="fs-4 mb-4 fst-italic">
									"We pride ourselves on being equal parts curious, honest, and
									passionate. Every day, we're focused on solving complex
									problems that make our world safer and lay a foundation for
									the cryptocurrency economy to flourish."
								</div>
								<div className="d-flex align-items-center justify-content-center">
									<img
										className="rounded-circle me-3 tiny"
										src="https://avatars.githubusercontent.com/u/5942751?v=4"
										alt="..."
									/>
									<div className="fw-bold">
										Kyle Silverman
										<span className="fw-bold text-primary mx-1">/</span> Chief
										Financial Officer
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LandingPage;
