import React from 'react';
import LogoFooterPng from "../../../assets/logo-footer.png";

const Footer = () => {
    return (
        <>
            <div className='overflow-hidden '>
                <div className='bg-[#121F5E] text-white'>
                    <div className='w-10/12 mx-auto'>
                        <div className='pt-40 pb-10 px-10'>
                            <div className='mb-10'>
                                <img className='mx-auto' src={LogoFooterPng} alt="" />
                            </div>

                            <div className='grid grid-cols-3 gap-10'>
                                <div className='max-w-[250px]'>
                                    <p className='text-2xl font-semibold mb-2'>About Us</p>
                                    <p className='opacity-50'>We are a passionate team dedicated to providing the best services to our customers.</p>
                                </div>
                                <div>
                                    <p className='text-2xl font-semibold mb-2'>Quick Links</p>
                                    <div className='opacity-50 ml-10'>
                                        <li>Home</li>
                                        <li>Service</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-2xl font-semibold mb-2'>Subscribe</p>
                                    <p className='opacity-50 mb-3'>Subscribe to our newsletter for the latest updates.</p>
                                    <div>
                                        <input
                                            className='w-[350px] border-2 bg-white text-[#000000] rounded-xl p-2 mr-3 font-semibold'
                                            type="text" placeholder='Enter your email' />
                                        <button className='font-bold text-base bg-linear-to-r from-[#ffc2d1] to-[#fca311] py-2 px-3 rounded-xl'>Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#121F5E]'>
                    <div className='w-10/12 mx-auto'>
                        <div className='w-full '>
                            <hr className='border-[#00000050] ' />
                            <p className='text-center text-white py-5 opacity-50'>@2024 Your Company All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;