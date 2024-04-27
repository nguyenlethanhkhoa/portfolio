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
import BlogPage from './page/blog';
import { Provider } from 'react-redux';
import { makeStore } from './lib/store/app.store';

const App: React.FC = () => {
	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Provider store={makeStore()}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project" element={<Projects />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
