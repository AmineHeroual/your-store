import { Inter } from 'next/font/google';
// import nike from '../utils/db.json';
import { AppContext } from '@/utils/StateContext';
import { useContext, useState } from 'react';
import Cart from '@/components/Cart';

export default function Collection(props) {
    const { modelIndex, setModelIndex } = useContext(AppContext);
    const [modelImage1, setModelImage1] = useState(
        props.products[props.item].models[0].images[0]
    );

    const [modelOldPrice1, setModelOldPrice1] = useState(
        props.products[props.item].models[0].oldPrice
    );

    const [modelNewPrice1, setModelNewPrice1] = useState(
        props.products[props.item].models[0].newPrice
    );

    const modelHandler1 = (model) => {
        setModelIndex(props.products[props.item].models[model].modelId);
        setModelImage1(props.products[props.item].models[model].images[0]);
        setModelOldPrice1(props.products[props.item].models[model].oldPrice);
        setModelNewPrice1(props.products[props.item].models[model].newPrice);
    };

    const modelHandler2 = (model) => {
        console.log(
            'product id:',
            model,
            'modelId:',
            props.products[props.item].models[model].modelId
        );
    };

    return (
        <Cart
            brand={props.products}
            id={props.products[props.item].id}
            // id={props.products[props.item]}
            state={modelIndex}
            currentState={modelImage1}
            category={props.products[props.item].category}
            price={props.products[props.item].models[0].newPrice}
            model={props.products[props.item].models.map((product, index) => (
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
            modelID={modelIndex}
            // title={props.products[product.images[0]].title}

            // oldPrice={props.products[0].models[0].oldPrice}
            title={props.products[props.item].title}
            oldPrice={modelOldPrice1}
            newPrice={modelNewPrice1}
        />
    );
}
