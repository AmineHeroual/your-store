import React from 'react';

const Dropdown = (props) => {
    return (
        <div className="text- w-full">
            <h1 className="text-2xl">
                <button
                    className="flex items-center focus:outline-none"
                    onClick={props.toggle}
                >
                    {props.name}
                    <svg
                        className={`ml-2 h-5 w-5 transform transition-transform ${
                            props.state ? 'rotate-180' : 'rotate-0'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </h1>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    props.state ? 'max-h-96' : 'max-h-0'
                }`}
            >
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Dropdown;
