import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import "./App.css";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "home",
            element: <Home />,
        },
        {
            path: "shop",
            element: <Shop />,
        },
        {
            path: "cart",
            element: <ShoppingCart />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
