import React from "react";
import NavBar from "./components/NavBar";
import LandingPageView from "./views/LandingPageView";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import SignupView from "./views/SignupView";
import { Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import LearnMore from "./views/LearnMore";
import Footer from "./components/Footer";

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
				<Route path="/contact" element={<ContactView />}></Route>
				<Route path="/learnmore" element={<LearnMore />}></Route>
				<Route path="/signup" element={<SignupView />}></Route>
				<Route path="/login" element={<LoginView />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
