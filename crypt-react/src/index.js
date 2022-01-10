import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import NavBarProvider from "./context/NavBarContext";

import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthContext";
import PositionProvider from "./context/PositionContext";
import TableToChartProvider from "./context/TableToChartContext";
import ModalButtonProvider from "./context/ModalButtonContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<NavBarProvider>
				<PositionProvider>
					<TableToChartProvider>
						<ModalButtonProvider>
							<BrowserRouter>
								<App />
							</BrowserRouter>
						</ModalButtonProvider>
					</TableToChartProvider>
				</PositionProvider>
			</NavBarProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
