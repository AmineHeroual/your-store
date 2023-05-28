import React from 'react';

const Newsletter = () => {
    return (
        <div className="w-full rounded-lg shadow-lg my-20 flex flex-row ">
            <div className="lg:w-3/5 w-full  bg-gradient-to-r from-[#00bfa6]/40 to-[#00bfa6]/20 lg:from-[#00bfa6]/40  lg:via-green-100 lg:to-transparent rounded-lg text-gray-600  p-12">
                <div className="w-full  lg:w-3/4  ">
                    <h3 className="text-sm text-center md:text-left md:text-3xl font-extrabold mb-4">
                        Subscribe to get our offers first.
                    </h3>
                    <p className="text-xs text-center md:text-left md:text-xl mb-4 leading-relaxed">
                        want to hear from us when we have new offers? Sign up
                        for our newsletter and we'll email you every time we
                        have new sale offers.
                    </p>
                    <div className="md:flex md:gap-2">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full md:w-[70%] mb-4 rounded-lg focus:outline-none"
                        />
                        <button className="bg-[#00bfa6] rounded-lg h-12 inline-block  w-full md:w-[25%] hover:bg-[#00dfa6] hover:text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:w-2/5 w-full lg:flex lg:felx-row hidden">
                <img
                    src="/assets/footer.svg"
                    alt="hero image"
                    className="w-[80%]"
                />
            </div>
        </div>
    );
};

export default Newsletter;
