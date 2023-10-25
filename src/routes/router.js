import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductsPage/ProductPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import DefaultComponent from "../components/DefaultComponent/DefaultComponent";

const routes = [
	{ path: "/", page: <HomePage />, isShowHeader: true },
	{ path: "/products", page: <ProductPage />, isShowHeader: true },
	{ path: "/order", page: <OrderPage />, isShowHeader: true },
	{ path: "*", page: <NotFoundPage /> },
];

const router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => {
					const Layout = route.isShowHeader ? DefaultComponent : React.Fragment;
					return (
						<Route
							path={route.path}
							element={<Layout>{route.page}</Layout>}
							key={index}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
};

export default router;
