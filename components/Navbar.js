import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { AppContext } from '@/utils/StateContext';
import Card from './Card';
import classes from './Nav.module.css';
const Navbar = () => {
    const { cartItems, addToCart, deleteFromCart, removeFromCart, clearCart } =
        useContext(AppContext);

    const [card, setCard] = useState(false);
    const [ring, setRing] = useState(false);

    const cardHandler = () => {
        setCard(!card);
    };

    let totalCount = 0;
    let totalCost = 0;
    let diffPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
        totalCount += cartItems[i].count;
        let price = parseFloat(cartItems[i].newPrice.replace('$', ''));
        totalCost += price * cartItems[i].count;

        diffPrice =
            100 -
            (parseFloat(cartItems[i].newPrice.replace('$', '')) * 100) /
                parseFloat(cartItems[i].oldPrice.replace('$', ''));
    }
    // console.log('Total Count =>', totalCost);

    const btnClass = `${ring ? classes.bump : ''}`;
    useEffect(() => {
        if (totalCount === 0) {
            // console.log(myCard.length);
            // console.log(items);
            return;
        }
        setRing(true);
        const timer = setTimeout(() => {
            setRing(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [totalCount]);

    return (
        <nav className="fixed w-full bg-white  h-12 mx-auto flex flex-row items-center justify-between pt-10 px-4 pb-10">
            <div className="flex flex-row">
                <div className="text-gray-50 bg-gradient-to-r from-[#00bfa6] to-green-200 w-10 h-10 rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                        />
                    </svg>
                </div>
                <Link href="/">
                    <h1 className="text-3xl text-gray-600 ml-2">LOGO</h1>
                </Link>
            </div>
            <div className="mt-2">
                <ul className="hidden md:inline-block md:list-none">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-[#00bfa6] p-4"
                    >
                        Home
                    </Link>
                    <Link
                        href="products"
                        className="text-gray-600 hover:text-[#00bfa6] p-4"
                    >
                        Shop
                    </Link>
                    <a
                        href="#"
                        className="text-gray-600 hover:text-[#00bfa6] p-4"
                    >
                        Blog
                    </a>
                    <a
                        href="#"
                        className="text-gray-600 hover:text-[#00bfa6] p-4"
                    >
                        Contact
                    </a>
                </ul>
                <a
                    href="#"
                    className={`bg-[#00bfa6] text-gray-50 hover:text-gray-100 hover:bg-[#00cfa6] p-3 px-5 rounded-full ${btnClass}`}
                    onClick={cardHandler}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 inline-block"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                    cart ({totalCount})
                </a>
            </div>
            <div
                className={
                    !card
                        ? 'hidden'
                        : ' absolute flex flex-col items-center  z-50 bg-[#009683]/60  w-[80%] h-[700px] px-0 pb-5 left-[20%] top-[90%] md:w-[50%] md:left-[50%] lg:w-[40%] lg:left-[60%] text-white overflow-y-scroll rounded-lg rounded-r-none'
                }
            >
                <div className="w-full text-center">
                    {totalCount === 0 ? (
                        <div className="text-center mx-auto">
                            <div className="flex items-center justify-center mt-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-72 h-72"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                    />
                                </svg>
                            </div>
                            <h1 className="text-4xl mt-2">Cart Is Empty</h1>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <button
                                onClick={() => {
                                    clearCart();
                                }}
                                className="text-xl md:text-2xl mx-auto text-black bg-white rounded-lg h-14 p-3 my-5 inline-block w-[50%] hover:bg-[#00bfa6] hover:text-white"
                            >
                                Remove All
                            </button>
                            <div>
                                <h1 className="text-2xl">
                                    Total: ${totalCost.toFixed(2)}
                                </h1>
                            </div>
                        </div>
                    )}
                </div>
                {cartItems.map((item) => (
                    // <div>
                    //     <img src={item.images[0]} className="w-[30%]" />
                    // </div>
                    <Card
                        key={item.modelId}
                        title={item.title}
                        image={item.images[0]}
                        newPrice={item.newPrice}
                        oldPrice={item.oldPrice}
                        diffPrice={[item.newPrice, item.oldPrice]}
                        count={item.count}
                        onAdd={() => {
                            addToCart(item);
                        }}
                        onRemove={() => {
                            removeFromCart(item);
                        }}
                        onDelete={() => {
                            deleteFromCart(item.modelId);
                        }}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
