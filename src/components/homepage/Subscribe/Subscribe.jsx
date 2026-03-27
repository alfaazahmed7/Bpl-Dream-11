import React from 'react';

const Subscribe = () => {
    return (
        <div className='w-10/12 mx-auto bg-linear-to-r from-[#caf0f8] to-[#ffe5ec] border-2 border-[#00000030] rounded-xl p-10 text-center my-5'>
            <h2 className='text-[32px] font-bold text-[#131313]'>Subscribe to our Newsletter</h2>
            <p className='text-[20px] text-[#13131370] mb-2 font-semibold'>Get the latest update and news right in your inbox</p>
            <div>
                <input
                    className='w-[350px] border-2 border-[#00000030] rounded-xl p-2 mr-3 font-semibold'
                    type="text" placeholder='Enter your email' />
                <button className='font-bold text-base bg-linear-to-r from-[#ffc2d1] to-[#fca311] py-2 px-3 rounded-xl'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;