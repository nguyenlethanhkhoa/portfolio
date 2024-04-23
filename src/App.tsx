import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import "./Assets/style.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
} from "react-router-dom";
import NavBar from './component/navbar.component';
import ScrollToTop from './layout/ScrollToTop';
import Footer from './layout/Footer';
import Home from './page/home';
import Projects from './page/project';

const App: React.FC = () => {
	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			{/* <Preloader load={load} /> */}
			<div className="App" id={load ? "no-scroll" : "scroll"}>
				<NavBar />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project" element={<Projects />} />
          			<Route path="*" element={<Navigate to="/"/>} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
