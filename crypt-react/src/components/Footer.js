// Footer.js

import { Link } from "react-router-dom";

import symbol from "./NavBarAssets/symbol-cryptatlas.png";

import "./Footer.css";

function Footer() {
	return (
		<section className="pt-5 pb-5">
			<div className="footer ">
				<div className="     pt-5 pb-5">
					<div className="container">
						<div className="row  ">
							<div className="col-xs-6 col-sm-3">
								<img src={symbol} className="logo-symb" alt="" />
								<address className="color-light-20">
									120 SW 8th St
									<br />
									Miami, FL 33130
								</address>
							</div>

							<div className="col-xs-6 col-sm-3">
								<h4 className="my-2">Product</h4>
								<ul className="list-unstyled list-light text-white">
									<li>
										<Link to="/pricing">Pricing</Link>
									</li>
									<li>
										<Link to="/features">Features</Link>
									</li>
								</ul>
							</div>
							<br style={{ clear: "both" }} className="hidden-sm-up" />
							<div className="col-xs-6 col-sm-3">
								<h4 className="my-2">Company</h4>
								<ul className="list-unstyled list-light">
									<li>
										<Link to="/about">About Us</Link>
									</li>

									<li>
										<Link to="/careers">Careers</Link>
									</li>
									<li>
										<Link to="/contact">Contact</Link>
									</li>
								</ul>
							</div>
							<div className="col-xs-6 col-sm-3">
								<h4 className="my-2">Community</h4>
								<ul className="list-unstyled list-light">
									<li>
										<a href="https://github.com/knekvasil/cryptatlas/issues">
											Issues
										</a>
									</li>
									<li>
										<a href="https://github.com/knekvasil/cryptatlas/discussions">
											Discussions
										</a>
									</li>
								</ul>
							</div>
						</div>
						<hr />
						<div
							className="row f-flex justify-content-between"
							style={{ justifyContent: "space-between" }}
						>
							<div className="col-md-8 text-xs-center  text-left   my-1">
								<p className="mt-2  text-muted">
									{" "}
									© Copyright 2021 • All Rights Reserved
								</p>
							</div>
							<div className="col-md-4 text-xs-center   text-lg-right   my-1">
								<div className="btn-container  mt-1 text-md-right text-sm-center">
									<div className="mb-1 mr-3 align-self-right pt-0 d-inline-block">
										<a
											href="https://github.com/knekvasil/cryptatlas"
											role="button"
											className=" btn-white p-2 m-2 btn btn-round btn-rised btn-icon x"
										>
											<i className="bi bi-github"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;
