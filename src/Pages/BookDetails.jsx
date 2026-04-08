import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();

    const books = useLoaderData();

    const ebook = books.find(book => book.bookId == id);



    return (
        <div className='w-4/5 mx-auto flex gap-12 mt-14'>
            <div className='bg-[#F3F3F3] flex items-center justify-center p-10 rounded-2xl'>
                <img src={ebook.image} className='rotate-x-15 rotate-y-30 hover:-rotate-y-30 duration-700 max-h-screen' alt="" />
            </div>
            <div className='w-full'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold! playfair'>{ebook.bookName}</h1>
                    <p className='font-medium! text-[#131313CC]'>By: {ebook.author}</p>
                </div>
                <div className="divider my-1"></div>
                <div>
                    <p className='font-semibold! text-[#131313CC]'>{ebook.category}</p>
                </div>
                <div className="divider my-1"></div>
                <div className='space-y-4'>
                    <p className='text-[#131313B2] max-h-30 overflow-scroll overflow-x-hidden'><span className='font-bold'>Review:</span> {ebook.review}</p>
                    <div className='space-x-2 mb-4'> <span className='font-bold'>Tags:</span>
                        <span className='work font-medium! text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-2xl'>{ebook.tags[0]}</span>
                        <span className='work font-medium! text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-2xl'>{ebook.tags[1]}</span>
                    </div>
                </div>
                <div className='space-y-4 mt-6'>
                    <p>Number of Pages: <span className='font-semibold'>{ebook.totalPages}</span>  </p>
                    <p>Publisher: <span className='font-semibold'>{ebook.publisher}</span> </p>
                    <p>Year of Publishing: <span className='font-semibold'>{ebook.yearOfPublishing}</span> </p>
                    <p>Rating: <span className='font-semibold'>{ebook.rating}</span> </p>
                </div>
                <div className='flex gap-4 mt-2'>
                    <button className='btn btn-outline btn-secondary text-black'>Read</button>
                    <button className='btn btn-secondary'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;