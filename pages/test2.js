import { Inter } from 'next/font/google';
import nike from '../utils/db.json';
import { useState } from 'react';
import Cart from '@/components/Cart';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [modelImage1, setModelImage1] = useState(
        nike.products[0].models[0].images[0]
    );

    const [modelOldPrice1, setModelOldPrice1] = useState(
        nike.products[0].models[0].oldPrice
    );

    const [modelNewPrice1, setModelNewPrice1] = useState(
        nike.products[0].models[0].newPrice
    );

    const [modelImage2, setModelImage2] = useState(
        nike.products[1].models[0].images[0]
    );

    const [modelOldPrice2, setModelOldPrice2] = useState(
        nike.products[1].models[0].oldPrice
    );

    const [modelNewPrice2, setModelNewPrice2] = useState(
        nike.products[1].models[0].newPrice
    );

    const [modelImage3, setModelImage3] = useState(
        nike.products[2].models[0].images[0]
    );

    const [modelOldPrice3, setModelOldPrice3] = useState(
        nike.products[2].models[0].oldPrice
    );

    const [modelNewPrice3, setModelNewPrice3] = useState(
        nike.products[2].models[0].newPrice
    );

    const [modelImage4, setModelImage4] = useState(
        nike.products[3].models[0].images[0]
    );

    const [modelOldPrice4, setModelOldPrice4] = useState(
        nike.products[3].models[0].oldPrice
    );

    const [modelNewPrice4, setModelNewPrice4] = useState(
        nike.products[3].models[0].newPrice
    );

    const modelHandler1 = (model, index) => {
        setModelImage1(nike.products[0].models[model].images[0]);
        setModelOldPrice1(nike.products[0].models[model].oldPrice);
        setModelNewPrice1(nike.products[0].models[model].newPrice);
        console.log(model, index);
    };

    const modelHandler2 = (model, index) => {
        setModelImage2(nike.products[1].models[model].images[0]);
        setModelOldPrice2(nike.products[1].models[model].oldPrice);
        setModelNewPrice2(nike.products[1].models[model].newPrice);
        console.log(model, index);
    };

    const modelHandler3 = (model, index) => {
        setModelImage3(nike.products[2].models[model].images[0]);
        setModelOldPrice3(nike.products[2].models[model].oldPrice);
        setModelNewPrice3(nike.products[2].models[model].newPrice);
        console.log(model, index);
    };

    const modelHandler4 = (model, index) => {
        setModelImage4(nike.products[3].models[model].images[0]);
        setModelOldPrice4(nike.products[3].models[model].oldPrice);
        setModelNewPrice4(nike.products[3].models[model].newPrice);
        console.log(model, index);
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full">
                <div className="flex flex-row justify-between">
                    <h2>Men's Collection</h2>
                    <a href="#" className="text-xl flex">
                        View All
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-7 ml-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </a>
                </div>
                <div className="grid md:grid-flow-row md:grid-cols-4 gap-10">
                    <Cart
                        brand={nike.products}
                        currentState={modelImage1}
                        category={nike.products[0].category}
                        price={nike.products[0].models[0].newPrice}
                        model={nike.products[0].models.map((product, index) => (
                            <img
                                key={index}
                                src={product.images[0]}
                                className="w-[20%] h-[20%]  rounded-md cursor-pointer hover:border-2 hover:border-green-600"
                                onMouseMove={() => {
                                    modelHandler1(index);
                                }}
                            />
                        ))}
                        title={nike.products[0].title}
                        // oldPrice={nike.products[0].models[0].oldPrice}
                        oldPrice={modelOldPrice1}
                        newPrice={modelNewPrice1}
                    />
                    <Cart
                        brand={nike.products}
                        currentState={modelImage2}
                        category={nike.products[1].category}
                        price={nike.products[1].models[0].newPrice}
                        model={nike.products[1].models.map((product, index) => (
                            <img
                                key={index}
                                src={product.images[0]}
                                className="w-[20%] h-[20%]  rounded-md cursor-pointer hover:border-2 hover:border-green-600"
                                onMouseMove={() => {
                                    modelHandler2(index);
                                }}
                            />
                        ))}
                        title={nike.products[1].title}
                        oldPrice={modelOldPrice2}
                        newPrice={modelNewPrice2}
                    />

                    <Cart
                        brand={nike.products}
                        currentState={modelImage3}
                        category={nike.products[2].category}
                        price={nike.products[2].models[0].newPrice}
                        model={nike.products[2].models.map((product, index) => (
                            <img
                                key={index}
                                src={product.images[0]}
                                className="w-[20%] h-[20%]  rounded-md cursor-pointer hover:border-2 hover:border-green-600"
                                onMouseMove={() => {
                                    modelHandler3(index);
                                }}
                            />
                        ))}
                        title={nike.products[2].title}
                        oldPrice={modelOldPrice3}
                        newPrice={modelNewPrice3}
                    />
                    <Cart
                        brand={nike.products}
                        currentState={modelImage4}
                        category={nike.products[3].category}
                        price={nike.products[3].models[0].newPrice}
                        model={nike.products[3].models.map((product, index) => (
                            <img
                                key={index}
                                src={product.images[0]}
                                className="w-[20%] h-[20%]  rounded-md cursor-pointer hover:border-2 hover:border-green-600"
                                onMouseMove={() => {
                                    modelHandler4(index);
                                }}
                            />
                        ))}
                        title={nike.products[3].title}
                        oldPrice={modelOldPrice4}
                        newPrice={modelNewPrice4}
                    />
                </div>
            </div>
        </main>
    );
}
