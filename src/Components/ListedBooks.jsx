import React, { useContext } from 'react';
import { bookContext } from '../ContextAPI/BookContext';
import ListedBookCard from './ListedBookCard';

const ListedBooks = () => {

    const {storedBooks} = useContext(bookContext);
    console.log(storedBooks);

    return (
        <div className='w-4/5 mx-auto mt-9'>

            <div className='bg-base-200 py-9 rounded-2xl'>
                <h2 className='font-bold text-4xl text-center'>Books</h2>
            </div>

            <div className='flex justify-center mt-8'>
                <select defaultValue="Sort by" className="select text-white font-semibold bg-[#23BE0A] max-w-25">
                    <option disabled={true}>Sort by</option>
                    <option>Pages</option>
                    <option>Publish Year</option>
                    <option>Date</option>
                </select>
            </div>

            <div className='mt-8 space-y-4'>
                {
                    storedBooks.map(book => <ListedBookCard key={book.bookId} book={book}/>)
                }
            </div>

        </div>
    );
};

export default ListedBooks;