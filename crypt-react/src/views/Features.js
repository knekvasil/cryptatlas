// Features.js

import "./Features.css";
import { Link } from "react-router-dom";

function Features() {
	return (
		<>
			<header className="py-5">
				<div className="container px-lg-5">
					<div className="p-4 p-lg-5 bg-light rounded-3 text-center">
						<div className="m-4 m-lg-5">
							<h1 className="display-5 fw-bold">A warm welcome!</h1>
							<p className="fs-4">
								We realize that the current financial system doesn’t provide an
								equal opportunity for all to thrive. That’s why we know how
								important it is for cryptocurrency to be made accessible to
								everyone, everywhere.
							</p>
							<Link to="/login">
								<button type="button" className="btn btn-primary">
									Get started
								</button>
							</Link>
						</div>
					</div>
				</div>
			</header>

			<section className="pt-4">
				<div className="container px-lg-5">
					<div className="row gx-lg-5">
						<div className="col-lg-6 col-xxl-4 mb-5">
							<div className="card bg-light border-0 h-100">
								<div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-4">
										<i className="bi bi-collection"></i>
									</div>
									<h2 className="fs-4 fw-bold">Fresh new layout</h2>
									<p className="mb-0">
										With the new cryptatlas redesign, we've created a fresh new
										and improved user experience!
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-xxl-4 mb-5">
							<div className="card bg-light border-0 h-100">
								<div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-4">
										<i className="bi bi-cloud-download"></i>
									</div>
									<h2 className="fs-4 fw-bold">Free to use</h2>
									<p className="mb-0">
										As always, cryptatlas has a powerful collection of free
										tools.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-xxl-4 mb-5">
							<div className="card bg-light border-0 h-100">
								<div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-4">
										<i className="bi bi-card-heading"></i>
									</div>
									<h2 className="fs-4 fw-bold">Asset backed loans</h2>
									<p className="mb-0">
										Because cryptoassets act as collateral for your line of
										credit, once you pay back your loan, we'll return your
										assets to you!
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-xxl-4 mb-5">
							<div className="card bg-light border-0 h-100">
								<div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-4">
										<i className="bi bi-bootstrap"></i>
									</div>
									<h2 className="fs-4 fw-bold">
										Transparent Data Permissioning
									</h2>
									<p className="mb-0">Only share what you want to share!</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-xxl-4 mb-5">
							<div className="card bg-light border-0 h-100">
								<div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-4">
										<i className="bi bi-code"></i>
									</div>
									<h2 className="fs-4 fw-bold">Simple clean code</h2>
									<p className="mb-0">
										We keep our dependencies up to date and squash bugs as they
										come!
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-xxl-4 mb-5">
							<div className="card bg-light border-0 h-100">
								<div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-4">
										<i className="bi bi-patch-check"></i>
									</div>
									<h2 className="fs-4 fw-bold">A name you trust</h2>
									<p className="mb-0">
										cryptatlas has been the leader in cryptocurrency payment
										infrastructure since 2013!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Features;
