import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import "./App.css";
import { useState } from "react";
import { CartProvider } from "./CartContext";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
}

const Router = () => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart((prevCart: Product[]) => {
            const existingProductIndex = prevCart.findIndex(
                (p) => p.id === product.id
            );
            if (existingProductIndex !== -1) {
                // If the product is already in the cart, increase its quantity
                const newCart = [...prevCart];
                newCart[existingProductIndex] = {
                    ...newCart[existingProductIndex],
                    quantity:
                        newCart[existingProductIndex].quantity +
                        product.quantity,
                };
                return newCart;
            } else {
                // If the product is not in the cart, add it
                return [...prevCart, product];
            }
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart: Product[]) => {
            return prevCart.filter((product) => product.id !== productId);
        });
    };

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

    return (
        <CartProvider value={{ cart, addToCart, setCart, removeFromCart }}>
            <RouterProvider router={router} />
        </CartProvider>
    );
};

export default Router;
