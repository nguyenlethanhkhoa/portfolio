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
import PostPage from './page/dashboard/post.page';
import DashboardLayout from './layout/dashboard';
import PostForm from './component/post-form.component';

const App: React.FC = () => {

	return (
		<Provider store={makeStore()}>
			<Router>
				<div>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/project" element={<Projects />} />
						<Route path="/blog" element={<BlogPage />}>
							<Route path=':slug' element={<BlogPage />} />
						</Route>
						<Route path="/dashboard" element={<DashboardLayout />}>
							<Route path='/dashboard' element={<PostPage />} />
							<Route path='/dashboard/create-post' element={<PostForm />} />
							<Route path="/dashboard/post" element={<PostPage />}>
								<Route path=':slug' element={<PostPage />} />
							</Route>
							{/* <Route path="/category" element={<CategoryPage />} /> */}
						</Route>
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
