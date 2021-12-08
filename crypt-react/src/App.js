import React from "react";
import LandingPageView from "./views/LandingPageView";
import SignupView from "./views/SignupView";

function App() {
	return (
		<div className="App">
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
			></link>
			<SignupView />
			<LandingPageView />
		</div>
	);
}

export default App;
