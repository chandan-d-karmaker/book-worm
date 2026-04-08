import React, { use } from 'react';
import BookCard from './BookCard';

const Books = ({booksPromise}) => {

    const booksData = use(booksPromise);
    return (
        <div className='md:w-4/5 md:mx-auto mt-25 mb-20 mx-4'>
            <div className='mb-6'>
                <h1 className='text-4xl font-bold! playfair text-center'>Books</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    booksData.map(book => <BookCard key={book.bookId} book={book}/>)
                }
            </div>
        </div>
    );
};

export default Books;