import nike from '../utils/db.json';
import { useState } from 'react';

// const products = [
//     {
//         id: 1,
//         title: 'Nike Legend Essential 2',
//         description: 'black and white nike athletic shoe',
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f9d31118-d3fd-4336-bb85-a9fd8b1555fb/chaussure-de-running-sur-route-renew-ride-3-pour-6RP4QJ.png',
//         updatePrice: '$76.97',
//         oldPrice: '$90',
//     },
//     {
//         id: 2,
//         title: 'Nike SuperRep Go',
//         description: 'green and black nike athletic shoe',
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/117f6544-f4f3-41e1-bbd0-dbec3be739c4/chaussure-de-golf-infinity-pro-2-pour-Ls11rN.png',
//         updatePrice: '$87.94',
//         oldPrice: '$110',
//     },
//     {
//         id: 3,
//         title: 'Nike Black and White Basketball Shoe',
//         description: 'black and white nike athletic shoes',
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7976955f-0e80-4972-9530-9a1988b78dbb/chaussure-de-tennis-pour-terre-battue-nikecourt-air-zoom-nxt-pour-KTR069.png',
//         updatePrice: '$56.97',
//         oldPrice: '$70',
//     },
//     {
//         id: 4,
//         title: 'unpaired red Nike sneaker',
//         description: 'black and white nike athletic shoes',
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c81f6c3a-40f9-4ece-89fb-fe42ea9b372f/chaussure-de-training-superrep-go-3-next-nature-flyknit-pour-clwc8v.png',
//         updatePrice: '$66.79',
//         oldPrice: '$80',
//     },
// ];

export default function Test() {
    const [modelImage, setModelImage] = useState(0);

    const modelHandler = (model, index) => {
        // let n = nike.products.models[0].images[0];
        // setModelImage(1);
        console.log(model, index);
    };
    return (
        // <main
        //     className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        // ></main>

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
                    {nike.products.map((product, index) => (
                        <div className="shadow-lg rounded-lg bg-gray-100">
                            <a href="#">
                                <img
                                    key={index}
                                    src={product.models[0].images[0]}
                                    className="w-full  -mb-24  rounded-tl-lg rounded-tr-lg"
                                />
                            </a>
                            <div className="p-5 bg-gray-100 ">
                                <div className="flex flex-row flex-wrap my-3 items-start gap-2">
                                    {product.models.map((model, index) => (
                                        <img
                                            key={index}
                                            src={model.images[0]}
                                            className="w-[20%] h-[20%]  rounded-md cursor-pointer hover:border-2 hover:border-green-600"
                                            onClick={() =>
                                                modelHandler(
                                                    model.modelId,
                                                    index
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                                <h3>
                                    <a
                                        href="#"
                                        className="text-2xl md:text-sm lg:text-xl"
                                    >
                                        {product.title}
                                    </a>
                                </h3>
                                <div className="text-2xl md:text-sm lg:text-xl">
                                    <span className="">
                                        {product.models[0].newPrice}
                                    </span>
                                    <span className="ml-2 line-through text-gray-600">
                                        {product.models[0].oldPrice}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
