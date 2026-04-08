import React from 'react';
import { FaStar } from "react-icons/fa";

const BookCard = ({ book }) => {
    return (
        <div className='space-y-6 p-6 border border-[#13131326] rounded-2xl'>

            <div className='bg-[#F3F3F3] flex items-center justify-center p-10 rounded-2xl'>
                <img src={book.image} className='rotate-x-15 rotate-y-30 hover:-rotate-y-30 duration-500' alt="" width='134' />
            </div>

            <div>
                {/* tags */}
                <div className='space-x-2 mb-4'>
                    <span className='work font-medium! text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-2xl'>{book.tags[0]}</span>
                    <span className='work font-medium! text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-2xl'>{book.tags[1]}</span>
                </div>
                <div className='space-y-6'>
                    <h1 className='text-2xl font-bold! playfair'>{book.bookName}</h1>
                    <p className='font-medium! text-[#131313CC]'>By: {book.author}</p>
                </div>
                <div className="divider"></div>

                <div className='flex justify-between'>
                    <p className='font-medium! text-[#131313CC]'>{book.category}</p>
                    <p className='font-medium! text-[#131313CC] flex items-center justify-center gap-1'>{book.rating} <FaStar /></p>
                </div>


            </div>
        </div>
    );
};

export default BookCard;