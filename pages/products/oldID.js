import axios from 'axios';
import React, { useState, useContext } from 'react';

import { StateContext } from '@/utils/StateContext';
const productId = ({ product }) => {
    const { modelIndex } = useContext(StateContext);

    const [modelImage1, setModelImage1] = useState(
        product.models[modelIndex - 1].images[0]
    );
    const [modelImage2, setModelImage2] = useState(
        product.models[modelIndex - 1].images[1]
    );
    const [modelImage3, setModelImage3] = useState(
        product.models[modelIndex - 1].images[2]
    );
    const [modelImage4, setModelImage4] = useState(
        product.models[modelIndex - 1].images[3]
    );

    const [modelOldPrice1, setModelOldPrice1] = useState(
        product.models[modelIndex - 1].oldPrice
    );

    const [modelNewPrice1, setModelNewPrice1] = useState(
        product.models[modelIndex - 1].newPrice
    );

    const [modelSize, setModelSize] = useState(
        product.models[modelIndex - 1].sizes
    );

    const [modelDescription, setModelDescription] = useState(
        product.models[modelIndex - 1].description
    );

    const [modelBenefits, setModelBenefits] = useState(
        product.models[modelIndex - 1].benefits
    );

    const [modelDetails, setModelDetails] = useState(
        product.models[modelIndex - 1].details
    );

    const modelHandler1 = (model) => {
        // setModelIndex(product.models[model].modelId);
        setModelImage1(product.models[model].images[0]);
        setModelImage2(product.models[model].images[1]);
        setModelImage3(product.models[model].images[2]);
        setModelImage4(product.models[model].images[3]);
        setModelOldPrice1(product.models[model].oldPrice);
        setModelNewPrice1(product.models[model].newPrice);
        setModelSize(product.models[model].sizes);
        setModelDescription(product.models[model].description);
        setModelBenefits(product.models[model].benefits);
        setModelDetails(product.models[model].details);
    };

    console.log(product);

    return (
        // <h1>Hello</h1>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex items-start justify-between gap-10">
                <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
                    <img src={modelImage1} alt={product.title} />
                    <img src={modelImage2} alt={product.title} />
                    <img src={modelImage3} alt={product.title} />
                    <img src={modelImage4} alt={product.title} />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-between gap-3">
                    <h1 className="text-3xl">{product.title}</h1>
                    <h2>{product.category}</h2>
                    <div className="text-2xl md:text-xl">
                        <span className="">{modelNewPrice1}</span>
                        <span className="ml-2 line-through text-gray-600">
                            {modelOldPrice1}
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        {product.models.map((model, index) => (
                            <img
                                key={index}
                                src={model.images[0]}
                                className="w-24 h-24 rounded-md cursor-pointer hover:border-2  hover:border-[#00bfa6]"
                                onClick={() => {
                                    modelHandler1(index);
                                }}
                            />
                        ))}
                    </div>
                    <div>
                        <h2 className="text-2xl">Sizes</h2>
                        <div className="flex flex-wrap">
                            {modelSize.map((size) => (
                                <div className="text-xs font-bold border-2 border-gray-100 m-1 p-2">
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text- w-full">
                        <h1 className="text-2xl">Description</h1>
                        <p>{modelDescription}</p>
                    </div>
                    <div className="text- w-full">
                        <h1 className="text-2xl">Benefits</h1>
                        <ul>{modelBenefits}</ul>
                    </div>
                    <div className="text- w-full">
                        <h1 className="text-2xl">Details</h1>
                        <p>{modelDetails}</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default productId;

export async function getServerSideProps(context) {
    // const { params } = context;

    try {
        const res = await axios.get(
            `http://localhost:9000/products/${context.query.id}`
        );
        console.log(res.data);

        return {
            props: { product: res.data },
        };
    } catch (error) {
        console.log(error);
        return {
            props: { product: null },
        };
    }
}
