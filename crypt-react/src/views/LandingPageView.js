// LandingPageView.js

import Footer from "../components/Footer";
import "./landingPageView.css";

function LandingPageView() {
	return (
		<>
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
									<h2 className="h5">Featured title</h2>
									<p className="mb-0">
										Paragraph of text beneath the heading to explain the
										heading. Here is just a bit more text.
									</p>
								</div>
								<div className="col mb-5 h-100">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
										<i className="bi bi-building"></i>
									</div>
									<h2 className="h5">Featured title</h2>
									<p className="mb-0">
										Paragraph of text beneath the heading to explain the
										heading. Here is just a bit more text.
									</p>
								</div>
								<div className="col mb-5 mb-md-0 h-100">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
										<i className="bi bi-toggles2"></i>
									</div>
									<h2 className="h5">Featured title</h2>
									<p className="mb-0">
										Paragraph of text beneath the heading to explain the
										heading. Here is just a bit more text.
									</p>
								</div>
								<div className="col h-100">
									<div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
										<i className="bi bi-toggles2"></i>
									</div>
									<h2 className="h5">Featured title</h2>
									<p className="mb-0">
										Paragraph of text beneath the heading to explain the
										heading. Here is just a bit more text.
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
									"Working with Start Bootstrap templates has saved me tons of
									development time when building new projects! Starting with a
									Bootstrap template just makes things easier!"
								</div>
								<div className="d-flex align-items-center justify-content-center">
									<img
										className="rounded-circle me-3"
										src="https://dummyimage.com/40x40/ced4da/6c757d"
										alt="..."
									/>
									<div className="fw-bold">
										Tom Ato
										<span className="fw-bold text-primary mx-1">/</span>
										CEO, Pomodoro
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default LandingPageView;
