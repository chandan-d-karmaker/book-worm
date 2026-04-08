import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();

    const books = useLoaderData();

    const ebook = books.find(book => book.bookId == id);



    return (
        <div className='w-4/5 mx-auto flex gap-12 mt-14'>
            <div className='bg-[#F3F3F3] flex items-center justify-center p-10 rounded-2xl'>
                <img src={ebook.image} className='rotate-x-15 rotate-y-30 hover:-rotate-y-30 duration-700 h-100' alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default BookDetails;