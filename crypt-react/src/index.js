import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import NavBarProvider from "./context/NavBarContext";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<React.StrictMode>
		<NavBarProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</NavBarProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
