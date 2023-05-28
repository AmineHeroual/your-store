import React, { createContext, useState } from 'react';

// Create a single context to combine the values
const AppContext = createContext();

// Create a provider component
const StateProvider = ({ children }) => {
    const [modelIndex, setModelIndex] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        // setCartItems([...cartItems, product]);
        const existingProduct = cartItems.find(
            (item) => item.modelId === product.modelId
        );
        if (existingProduct) {
            existingProduct.count += 1;
            setCartItems((prevCart) => [...prevCart]);
        } else {
            const newProduct = { ...product, count: 1 };
            setCartItems((prevCart) => [...prevCart, newProduct]);
        }
    };

    const removeFromCart = (product) => {
        // setCartItems([...cartItems, product]);
        // try {
        const existingProduct = cartItems.find(
            (item) => item.modelId === product.modelId
        );
        // if (!existingProduct) {
        //     return;
        // }

        if (existingProduct.count > 0) {
            existingProduct.count -= 1;
            setCartItems((prevCart) => [...prevCart]);
        } else {
            setCartItems((prevCart) =>
                prevCart.filter((item) => item.modelId !== product.modelId)
            );
        }
        // } catch (error) {
        //     console.log(error);
        // }
    };

    // Function to remove a product from the cart
    const deleteFromCart = (productId) => {
        // const updatedCartItems = cartItems.filter(
        //     (product) => product.id !== productId
        // );
        // setCartItems(updatedCartItems);

        try {
            setCartItems((prevCart) =>
                prevCart.filter((product) => product.modelId !== productId)
            );
            console.log('product removed!', productId);
        } catch (error) {
            console.log('deleteFromCart from MyContextProvider', error);
        }
    };

    const clearCart = () => {
        try {
            setCartItems([]);
        } catch (error) {
            console.log('clearCart from MyContextProvider', error);
        }
    };

    // Value object to be provided by the context
    const contextValue = {
        modelIndex,
        setModelIndex,
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, StateProvider };
