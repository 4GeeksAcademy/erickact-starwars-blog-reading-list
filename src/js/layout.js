import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { CharactersFeatures } from "./views/CharactersFeatures";
import { PlanetsFeatures } from "./views/PlanetsFeatures";
import { VehiclesFeatures } from "./views/VehiclesFeatures";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:id" element={<CharactersFeatures />} />
						<Route path="/planet/:id" element={<PlanetsFeatures />} />
						<Route path="/vehicle/:id" element={<VehiclesFeatures />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
