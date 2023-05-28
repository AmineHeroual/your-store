import { useState } from 'react';
import Link from 'next/link';
export default function Cart(props) {
    const [play, setPlay] = useState(true);

    const enterHandler = () => {
        setPlay(false);
    };

    const leaveHandler = () => {
        setPlay(true);
    };

    const infoHandler = () => {
        console.log(props.id);
    };

    return (
        <div
            onMouseEnter={() => {
                enterHandler();
            }}
            onMouseLeave={() => {
                leaveHandler();
            }}
            className={
                play
                    ? 'shadow-lg rounded-lg bg-gray-100 mb-8 md:mb-32'
                    : 'shadow-lg rounded-lg bg-gray-100 border-2 border-[#00bfa6] mb-24 transition-all duration-200 ease-in'
            }
        >
            {/* href={`products/${props.id}/${props.modelId}`} */}
            {/* <Link href={`products/${props.id}/${props.modelId}`}> */}
            <Link
                href={{
                    pathname: `products/${props.id}`,
                }}
                onClick={infoHandler}
            >
                <img
                    src={props.currentState}
                    className="w-full -mb-24 rounded-tl-lg rounded-tr-lg"
                />
            </Link>
            <div className="p-5 bg-gray-100">
                <div
                    className={
                        play
                            ? 'hidden'
                            : 'flex flex-row flex-wrap my-3 mt-10 items-start gap-2'
                    }
                >
                    {props.model}
                </div>
                <h3 className="mt-8">
                    <a
                        href="#"
                        className={!play ? 'hidden' : 'text-sm md:text-xl'}
                    >
                        {props.title}
                    </a>
                </h3>
                <h3 className={!play ? 'hidden' : 'text-xs md:text-sm'}>
                    {props.category}
                </h3>
                <h4 className={!play ? 'hidden' : 'text-2xl md:text-xl'}>
                    {props.price}
                </h4>
                <div className={play ? 'hidden' : 'text-2xl md:text-xl'}>
                    <span className="">{props.newPrice}</span>
                    <span className="ml-2 line-through text-gray-600">
                        {props.oldPrice}
                    </span>
                </div>
            </div>
        </div>
    );
}
