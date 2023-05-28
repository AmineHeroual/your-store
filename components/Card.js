import React from 'react';

const Card = (props) => {
    let diffPrice =
        100 -
        (parseFloat(props.newPrice.replace('$', '')) * 100) /
            parseFloat(props.oldPrice.replace('$', ''));
    return (
        <div className="w-[87%] lg:w-[92%] md:w-[87%] h-[220px] flex flex-row items-center justify-between bg-gray-100 text-black m-4 rounded-lg">
            <div className="w-1/2 mx-1 md:mx-8 flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center items-center gap-4">
                    <h1 className="text-xl">{props.newPrice}</h1>
                    <h1 className="text-xl line-through text-gray-600">
                        {props.oldPrice}
                    </h1>
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl text-[#00bfa6]">
                        {diffPrice.toFixed(2)}% Off
                    </h1>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center gap-0 mb-2">
                <div>
                    <img
                        src={props.image}
                        alt={props.title}
                        className="w-32 h-30"
                    />
                </div>
                <div className="flex items-center justify-between gap-0 md:gap-2">
                    <button
                        className="w-4 h-7 flex items-center justify-center font-bold bg-[#00bfa6] rounded-lg border-none rounded-r-none p-4 mr-2 hover:bg-[#00bfa6]/90 hover:text-xl hover:text-white"
                        onClick={props.onRemove}
                    >
                        -
                    </button>
                    <span>{props.count}</span>
                    <button
                        className="w-4 h-7 flex items-center justify-center font-bold bg-[#00bfa6] rounded-lg border-none rounded-l-none p-4 ml-2 hover:bg-[#00bfa6]/90 hover:text-xl hover:text-white"
                        onClick={props.onAdd}
                    >
                        +
                    </button>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                        onClick={props.onDelete}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Card;
