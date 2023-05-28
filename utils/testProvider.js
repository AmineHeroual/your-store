import React, { createContext, useState } from 'react';

// Create a new context
const StateContext = createContext();
const CartContext = createContext();
// Create a provider component
const StateProvider = ({ children }) => {
    const [modelIndex, setModelIndex] = useState(1);
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
    return (
        <StateContext.Provider value={{ modelIndex, setModelIndex }}>
            {children}
        </StateContext.Provider>
    );
};

export { CartContext, StateContext, StateProvider };
