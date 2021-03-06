import React from "react";
import NavBar from "./components/NavBar";
import LandingPageView from "./views/LandingPageView";
import AboutView from "./views/AboutView";
import PricingView from "./views/PricingView";
import RegisterView from "./views/RegisterView";
import { Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import CareersView from "./views/CareersView";
import Footer from "./components/Footer";
import ContactView from "./views/ContactView";
import Features from "./views/Features";
import Portfolio from "./views/PortfolioView";
import AuthRoute from "./components/AuthRoute";

function App() {
	return (
		<div className="App">
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
			></link>

			<NavBar />
			<Routes>
				<Route path="/" element={<LandingPageView />}></Route>
				<Route path="/about" element={<AboutView />}></Route>

				<Route path="/pricing" element={<PricingView />}></Route>
				<Route path="/features" element={<Features />}></Route>
				<Route path="/register" element={<RegisterView />}></Route>
				<Route path="/login" element={<LoginView />}></Route>

				<Route path="/contact" element={<ContactView />}></Route>
				<Route path="/careers" element={<CareersView />}></Route>

				<Route element={<AuthRoute />}>
					<Route path="/portfolio" element={<Portfolio />}></Route>
				</Route>
			</Routes>
			<Footer />
			<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
		</div>
	);
}

export default App;
