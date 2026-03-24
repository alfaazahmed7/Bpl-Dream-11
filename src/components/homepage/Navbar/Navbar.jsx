import React from 'react';
import CurrencyIcon from "../../../assets/Currency.png";

const Navbar = ({ coin }) => {
    return (
        <div className="navbar w-10/12 mx-auto">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="btn flex justify-between items-center gap-2">
                    <span className='text-[#131313] font-semibold'>{coin} Coins</span>
                    <img src={CurrencyIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;