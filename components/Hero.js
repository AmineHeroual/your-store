import React from 'react';
// import heroImage from '../public/assets/hero.svg';

const Hero = () => {
    return (
        <div className="container mx-auto  md:flex md:flex-row items-center justify-between mt-20  px-4">
            <div className="md:w-2/5 flex flex-col justify-center items-center md:items-start md:ml-12">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-7xl text-gray-600 mb-4 text-center md:text-left">
                    Some Catchy title.
                </h2>
                <p className="uppercase text-gray-600 tracking-wide text-sm md:text-xl  text-center md:text-left">
                    Our brand tagline goes here.
                </p>
                <p className="uppercase text-gray-600 tracking-wide text-sm md:text-xl  text-center md:text-left">
                    Our brand motto goes here.
                </p>
                <a
                    href="#"
                    className="bg-gradient-to-r from-[#00bfa6] to-[#00bfa5]/40 rounded-lg py-2 md:py-4 px-8 font-bold text-gray-50 uppercase text-xs md:text-xl md:self-start my-5 hover:bg-gradient-to-r hover:from-[#00dfa6]/40 hover:to-[#00dfa5]"
                >
                    Shop Now
                </a>
            </div>
            <div className="md:w-3/5">
                <img
                    src="/assets/hero.svg"
                    alt="hero image"
                    className="w-[80%] md:ml-24"
                />
            </div>
        </div>
    );
};

export default Hero;
