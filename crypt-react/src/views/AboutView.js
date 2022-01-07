// About.js

import Footer from "../components/Footer";

function About() {
	return (
		<>
			<header className="py-5">
				<div className="container px-5">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-xxl-6">
							<div className="text-center my-5">
								<h1 className="fw-bolder mb-3">
									Our mission is to make building cryptocurrency infrastructure
									easier for everyone.
								</h1>
								<p className="lead fw-normal text-muted mb-4">
									We're building the future of trust with advanced biometrics, a
									fully automated, scalable solution, and deep industry
									knowledge, to ensure compliance in all your digital
									transactions.
								</p>
								<a className="btn btn-primary btn-lg" href="#scroll-target">
									Read our story
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>

			<section className="py-5 bg-light" id="scroll-target">
				<div className="container px-5 my-5">
					<div className="row gx-5 align-items-center">
						<div className="col-lg-6">
							<img
								className="img-fluid rounded mb-5 mb-lg-0"
								src="https://localfreshcom.s3.amazonaws.com/wp-content/uploads/2017/10/ThinkstockPhotos-688025514.jpg"
								alt="..."
							/>
						</div>
						<div className="col-lg-6">
							<h2 className="fw-bolder">Our founding</h2>
							<p className="lead fw-normal text-muted mb-0">
								We believe it's our duty to nourish the cryptocurrency and open
								source communities we rely upon. So we're doubling down on
								growth, through continuous product innovation, technology
								advancement, and collaboration with those shaping our field in
								the years ahead.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-5">
				<div className="container px-5 my-5">
					<div className="row gx-5 align-items-center">
						<div className="col-lg-6 order-first order-lg-last">
							<img
								className="img-fluid rounded mb-5 mb-lg-0"
								src="https://scottmckelvey.com/wp-content/uploads/2014/09/Stock-Images-conference-room.jpg"
								alt="..."
							/>
						</div>
						<div className="col-lg-6">
							<h2 className="fw-bolder">Growth &amp; beyond</h2>
							<p className="lead fw-normal text-muted mb-0">
								Our industry never stops moving. Our mission is to become one of
								the world's largest regulated crypto derivates exchanges and a
								powerful catalyst change in the financial services industry.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-5 bg-light">
				<div className="container px-5 my-5">
					<div className="text-center">
						<h2 className="fw-bolder">Leadership</h2>
						<p className="lead fw-normal text-muted mb-5">
							Meet the team building the future of cryptatlas.
						</p>
					</div>
					<div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
						<div className="col mb-5 mb-5 mb-xl-0">
							<div className="text-center">
								<img
									className="img-fluid rounded-circle mb-4 px-4"
									src="https://avatars.githubusercontent.com/u/22422159?v=4"
									alt="..."
								/>
								<h5 className="fw-bolder">Kalju Jake Nekvasil</h5>
								<div className="fst-italic text-muted">
									Founder &amp; Chief Executive Officer
								</div>
							</div>
						</div>
						<div className="col mb-5 mb-5 mb-xl-0">
							<div className="text-center">
								<img
									className="img-fluid rounded-circle mb-4 px-4"
									src="https://avatars.githubusercontent.com/u/5942751?v=4"
									alt="..."
								/>
								<h5 className="fw-bolder">Kyle Silverman</h5>
								<div className="fst-italic text-muted">
									Chief Financial Officer
								</div>
							</div>
						</div>
						<div className="col mb-5 mb-5 mb-sm-0">
							<div className="text-center">
								<img
									className="img-fluid rounded-circle mb-4 px-4"
									src="https://avatars.githubusercontent.com/u/91507730?v=4"
									alt="..."
								/>
								<h5 className="fw-bolder">Paola Garcia</h5>
								<div className="fst-italic text-muted">
									Chief Operations Officer
								</div>
							</div>
						</div>
						<div className="col mb-5">
							<div className="text-center">
								<img
									className="img-fluid rounded-circle mb-4 px-4"
									src="http://ritwikd.com/assets/img/face.jpg"
									alt="..."
								/>
								<h5 className="fw-bolder">Ritwik Dutta</h5>
								<div className="fst-italic text-muted">
									Chief Technology Officer
								</div>
							</div>
						</div>
						<div className="col mb-5 mb-5 mb-xl-0">
							<div className="text-center">
								<img
									className="img-fluid rounded-circle mb-4 px-4"
									src="https://avatars.githubusercontent.com/u/25439730?v=4"
									alt="..."
								/>
								<h5 className="fw-bolder">Arturo Filio Villa</h5>
								<div className="fst-italic text-muted">
									Chief Strategy Officer
								</div>
							</div>
						</div>
						<div className="col mb-5 mb-5 mb-xl-0">
							<div className="text-center">
								<img
									className="img-fluid rounded-circle mb-4 px-4"
									src="https://avatars.githubusercontent.com/u/19995358?v=4"
									alt="..."
								/>
								<h5 className="fw-bolder">Sidharth Reji Kumar</h5>
								<div className="fst-italic text-muted">
									Chief Marketing Officer
								</div>
							</div>
						</div>
						<div className="col mb-5 mb-5 mb-xl-0">
							<div className="text-center">
								<img
									className="img-fluid rounded-circle mb-4 px-4"
									src="https://avatars.githubusercontent.com/u/92076744?v=4"
									alt="..."
								/>
								<h5 className="fw-bolder">Pablo Acosta</h5>
								<div className="fst-italic text-muted">
									Chief Information Officer
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
