import React from 'react';
import heroImg from '../assets/heroimg.png';

const Banner = () => {
    return (
        <div className='w-4/5 mx-auto bg-[#1313130D] flex items-center justify-between mt-14 py-20 px-30 rounded-xl'>
            <div>
                <h2 className='playfair text-5xl font-bold! max-w-md mb-12'>Books to freshen up your bookshelf</h2>
                <button className='btn bg-[#23BE0A] text-white text-xl font-bold! work px-7
                 py-6 rounded-xl'>View The List</button>
            </div>

            <div>
                <img src={heroImg} className='rounded-xl' alt="" />
            </div>

        </div>
    );
};

export default Banner;