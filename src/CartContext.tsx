import React from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
    addToCart: (product: Product) => void;
}

// Create the context with a default value of undefined
export const CartContext = React.createContext<CartContextType | undefined>(
    undefined
);

export const CartProvider = CartContext.Provider;
export const CartConsumer = CartContext.Consumer;
