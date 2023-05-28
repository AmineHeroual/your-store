import React, { createContext, useState } from 'react';

// Create the CartContext
const CartContext = createContext();

// Create the CartProvider component
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    // Function to remove a product from the cart
    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(
            (product) => product.id !== productId
        );
        setCartItems(updatedCartItems);
    };

    // Value object to be provided by the context
    const cartContextValue = {
        cartItems,
        addToCart,
        removeFromCart,
    };

    // Return the provider with the value object and children components
    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
