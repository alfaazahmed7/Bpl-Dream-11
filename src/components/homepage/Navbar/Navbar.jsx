import React from 'react';
import CurrencyIcon from "../../../assets/Currency.png";
import LogoPng from "../../../assets/logo.png";

const Navbar = ({ coin }) => {
    return (
        <div className="navbar md:w-10/12 mx-auto flex justify-between pb-3">
            <div>
                <img src={LogoPng} alt="" />
            </div>
            <div className="flex items-center gap-14">
                <div className='lg:flex list-none gap-8 font-semibold cursor-pointer hidden'>
                    <li className='hover:text-[#e9405f] text-[#a6a2a2]'>Home</li>
                    <li className='hover:text-[#e9405f] text-[#a6a2a2]'>Fixure</li>
                    <li className='hover:text-[#e9405f] text-[#a6a2a2]'>Teams</li>
                    <li className='hover:text-[#e9405f] text-[#a6a2a2]'>Subscribe</li>
                </div>
                <div>
                    <button className="btn flex justify-between items-center gap-2">
                        <span className='text-[#131313] font-semibold'>{coin} Coins</span>
                        <img src={CurrencyIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;