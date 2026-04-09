import React from 'react';
import indicator from '../assets/indicator.svg';
import pages from '../assets/pages.svg';
import user from '../assets/publisher.svg'
import { Link } from 'react-router';

const ListedBookCard = ({ book }) => {
    return (
        <div className='flex flex-col md:flex-row gap-10 p-6 border border-[#13131326] rounded-2xl'>

            <div className='bg-[#F3F3F3] flex items-center justify-center px-8 py-5 rounded-2xl'>
                <img src={book.image} className='rotate-x-15 rotate-y-30 hover:-rotate-y-30 duration-700 max-h-screen' alt="" width='134px' />
            </div>

            <div className='w-full'>

                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold! playfair'>{book.bookName}</h1>
                    <p className='font-medium! text-[#131313CC]'>By: {book.author}</p>
                </div>
                {/* tags */}
                <div className='space-x-2 space-y-2 mb-4 mt-4 flex flex-wrap items-center'>
                    <span className='font-semibold'>Tags:</span>
                    <span className='font-medium! text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-2xl'>{book.tags[0]}</span>
                    <span className='font-medium! text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-2xl'>{book.tags[1]}</span>
                    <span className='flex gap-2'> <img src={indicator} alt="" /> Year of Publishing: {book.yearOfPublishing}</span>
                </div>
                <div className='flex flex-wrap gap-4 items-center'>
                    <span className='flex gap-2'> <img src={user} alt="" /> Publisher: {book.publisher}</span>
                    <span className='flex gap-2'> <img src={pages} alt="" /> Pages: {book.totalPages}</span>
                </div>
                <div className="divider"></div>

                <div className='flex flex-wrap gap-2'>

                    <p className='font-medium!  text-[#328EFF] bg-[#328EFF26] px-4 py-2 rounded-2xl'>  Category: {book.category}</p>
                    <p className='font-medium!  text-[#FFAC33] bg-[#FFAC3326] px-4 py-2 rounded-2xl'>  Rating: {book.rating}</p>
                    <Link to={`/book-details/${book.bookId}`}>
                        <button className='font-medium! btn text-white bg-[#23BE0A] px-4 py-2 rounded-2xl'>View Details</button>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default ListedBookCard;