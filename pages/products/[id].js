import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AppContext } from '@/utils/StateContext';
import Dropdown from '@/components/Dropdown';

const ProductId = ({ product }) => {
    const { modelIndex } = useContext(AppContext);
    const model = product.models[modelIndex - 1];
    const { addToCart, cartItems } = useContext(AppContext);
    const [productSelected, setProductSelected] = useState(model);

    //console.log(productSelected);

    const [modelImages, setModelImages] = useState({
        image1: model.images[0],
        image2: model.images[1],
        image3: model.images[2],
        image4: model.images[3],
    });

    const [modelInfo, setModelInfo] = useState({
        oldPrice: model.oldPrice,
        newPrice: model.newPrice,
        sizes: model.sizes,
        description: model.description,
        benefits: model.benefits,
        details: model.details,
    });

    const modelHandler1 = (model) => {
        const selectedModel = product.models[model];
        setProductSelected(selectedModel);

        setModelImages({
            image1: selectedModel.images[0],
            image2: selectedModel.images[1],
            image3: selectedModel.images[2],
            image4: selectedModel.images[3],
        });
        setModelInfo({
            oldPrice: selectedModel.oldPrice,
            newPrice: selectedModel.newPrice,
            sizes: selectedModel.sizes,
            description: selectedModel.description,
            benefits: selectedModel.benefits,
            details: selectedModel.details,
        });

        // console.log(selectedModel);
    };

    // dropdown
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);
    const toggleDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };
    const toggleBenefits = () => {
        setIsBenefitsOpen(!isBenefitsOpen);
    };

    const addToCartHandler = () => {
        addToCart(productSelected);

        //console.log('Product >>>>>>>', productSelected);

        //console.log('CartItems ===============>', cartItems);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                <div className="w-full flex overflow-scroll md:w-1/2 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4">
                    <img src={modelImages.image1} alt={product.title} />
                    <img src={modelImages.image2} alt={product.title} />
                    <img src={modelImages.image3} alt={product.title} />
                    <img src={modelImages.image4} alt={product.title} />
                </div>
                <div className="md:w-1/2 md:flex flex-col items-start justify-between gap-3">
                    <h1 className="text-3xl">{product.title}</h1>
                    <h2>{product.category}</h2>
                    <div className="text-2xl md:text-xl">
                        <span>{modelInfo.newPrice}</span>
                        <span className="ml-2 line-through text-gray-600">
                            {modelInfo.oldPrice}
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
                            {modelInfo.sizes.map((size, index) => (
                                <div
                                    key={index}
                                    className="text-xs font-bold border-2 border-gray-100 m-1 p-2"
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Dropdown
                        toggle={toggleDescription}
                        name="Description"
                        state={isDescriptionOpen}
                        description={modelInfo.description}
                    />
                    <Dropdown
                        toggle={toggleBenefits}
                        name="Benefits"
                        state={isBenefitsOpen}
                        description={modelInfo.benefits}
                    />
                    <div className="text- w-full">
                        <h1 className="text-2xl">Details</h1>
                        <p>{modelInfo.details}</p>
                    </div>
                    <button
                        onClick={addToCartHandler}
                        className="text-2xl mx-auto bg-[#00bfa6] rounded-lg h-14 mt-10 inline-block  w-full md:w-[50%] hover:bg-[#00dfa6] hover:text-white"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ProductId;

export async function getServerSideProps(context) {
    try {
        const res = await axios.get(
            `https://your-store-4ly8.onrender.com/products/${context.query.id}`
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
