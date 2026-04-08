import React from 'react';
import heroImg from '../assets/heroimg.png';

const Banner = () => {
    return (
        <div className='md:w-4/5 md:mx-auto bg-[#1313130D] flex flex-col md:flex-row items-center justify-between mt-14 md:py-20 md:px-30 mx-4 py-6 px-12 rounded-xl'> 
            <div className='flex flex-col justify-center text-center items-center md:justify-start md:text-start md:items-start'>
                <h2 className='playfair md:text-5xl text-4xl font-bold! max-w-md mb-12'>Books to freshen up your bookshelf</h2>
                <button className='btn bg-[#23BE0A] text-white text-xl font-bold! work rounded-xl'>View The List</button>
            </div>

            <div>
                <img src={heroImg} className='rounded-xl mt-10 md:mt-0' alt="" />
            </div>

        </div>
    );
};

export default Banner;