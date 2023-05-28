import React from 'react';

const Footer = () => {
    return (
        <div className="border-t-2 border-gary-300 flex flex-col justify-between py-5 text-xs md:text-sm">
            <div className="mb-4 flex felx-col md:flex-row items-center justify-between ">
                <a href="#" className="mx-1 md:mx-3">
                    About
                </a>
                <a href="#" className="mx-1 md:mx-3">
                    Privacy Police
                </a>
                <a href="#" className="mx-1 md:mx-3">
                    Terms of Services
                </a>
            </div>
            <p className="text-center">&copy; Copyright Reserved 2023</p>
        </div>
    );
};

export default Footer;
