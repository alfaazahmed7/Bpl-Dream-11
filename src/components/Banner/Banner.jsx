import React from 'react';
import BannerImage from "../../assets/baner-bg.jpg";
import BannerTopImage from "../../assets/banner-main.png";

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div
                className="hero min-h-[50vh] rounded-4xl overflow-hidden"
                style={{ backgroundImage: `url(${BannerImage})`, }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-full flex flex-col items-center">
                        <img className='mx-auto mb-3' src={BannerTopImage} alt="" />
                        <h1 className="mb-5 text-3xl lg:text-[40px] font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 opacity-70 text-2xl">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <div className='max-w-48 border-2 border-[#E7FE29] rounded-lg p-2'>
                            <button className='text-base font-bold p-3 bg-[#E7FE29] text-black rounded-xl cursor-pointer'>Claim Free Credit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;