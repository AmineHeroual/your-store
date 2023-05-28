import { Inter } from 'next/font/google';
import nike from '../utils/db.json';
import { useState } from 'react';
import Cart from '@/components/Cart';

export default function Collection(props) {
    const [modelImage1, setModelImage1] = useState(
        nike.products[props.item].models[0].images[0]
    );

    const [modelOldPrice1, setModelOldPrice1] = useState(
        nike.products[props.item].models[0].oldPrice
    );

    const [modelNewPrice1, setModelNewPrice1] = useState(
        nike.products[props.item].models[0].newPrice
    );

    const modelHandler1 = (model) => {
        setModelImage1(nike.products[props.item].models[model].images[0]);
        setModelOldPrice1(nike.products[props.item].models[model].oldPrice);
        setModelNewPrice1(nike.products[props.item].models[model].newPrice);
    };

    const modelHandler2 = (model) => {
        console.log(model, nike.products[props.item]);
    };

    return (
        <Cart
            brand={nike.products}
            currentState={modelImage1}
            category={nike.products[props.item].category}
            price={nike.products[props.item].models[0].newPrice}
            model={nike.products[props.item].models.map((product, index) => (
                <img
                    key={index}
                    src={product.images[0]}
                    className="w-[20%] h-[20%]  rounded-md cursor-pointer hover:border-2 hover:border-[#00bfa6]"
                    onMouseMove={() => {
                        modelHandler1(index);
                    }}
                    onClick={() => {
                        modelHandler2(index);
                    }}
                />
            ))}
            // title={nike.products[product.images[0]].title}

            // oldPrice={nike.products[0].models[0].oldPrice}
            title={nike.products[props.item].title}
            oldPrice={modelOldPrice1}
            newPrice={modelNewPrice1}
        />
    );
}
