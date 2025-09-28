import ProductCatalogPage from "../pages/productCatalogPage";
import { createBrowserRouter, Navigate } from "react-router";
import ServerError from "../components/errors/ServerError";
import NotFound from "../components/errors/NotFound";
import HomePage from "../pages/homePage";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'products', element: <ProductCatalogPage /> },
            { path: "not-found", element: <NotFound />},
            { path: "server-error", element: <ServerError />},
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ]
    }
])