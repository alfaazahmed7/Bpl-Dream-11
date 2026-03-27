import React from 'react';
import BannerImage from "../../../assets/baner-bg.jpg";
import BannerTopImage from "../../../assets/banner-main.png";

const Banner = ({ coin, setCoin }) => {
    const increaseCoinHandler = () => {
        let newCoin = coin + 100000;
        setCoin(newCoin);
    }

    return (
        <div className='w-10/12 mx-auto mb-15'>
            <div
                className="hero min-h-[50vh] rounded-4xl overflow-hidden"
                style={{ backgroundImage: `url(${BannerImage})`, }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-full flex flex-col items-center">
                        <img className='mx-auto mb-3 w-[150px] md:w-[200px] ' src={BannerTopImage} alt="" />
                        <h1 className="mb-5 text-3xl lg:text-[40px] font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 opacity-70 md:text-2xl">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <div className='max-w-48 border-2 border-[#E7FE29] rounded-2xl p-2'>
                            <button
                            onClick={increaseCoinHandler}
                            className='text-base font-bold p-3 bg-[#E7FE29] text-black rounded-xl cursor-pointer hover:bg-[#fefee3]'>Claim Free Credit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;