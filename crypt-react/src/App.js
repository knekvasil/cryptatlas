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
				<Route path="cryptatlas/" element={<LandingPageView />}></Route>

				<Route path="cryptatlas/about" element={<AboutView />}></Route>

				<Route path="/pricing" element={<PricingView />}></Route>
				<Route path="cryptatlas/pricing" element={<PricingView />}></Route>

				<Route path="cryptatlas/features" element={<Features />}></Route>
				<Route path="cryptatlas/register" element={<RegisterView />}></Route>
				<Route path="cryptatlas/login" element={<LoginView />}></Route>
				<Route path="cryptatlas/contact" element={<ContactView />}></Route>
				<Route path="cryptatlas/careers" element={<CareersView />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
