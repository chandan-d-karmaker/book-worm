import React, { useContext, useState } from 'react';
import { bookContext } from '../ContextAPI/BookContext';
import ListedBookCard from './ListedBookCard';
import { NavLink } from 'react-router';

const ListedBooks = () => {

    const [active, setActive] = useState('read');

    const handleActive = () => {
        if (active == 'read') {
            setActive('wishlist');
        } else {
            setActive('read');
        }
    }

    const { storedBooks } = useContext(bookContext);
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

            <div>
                <button onClick={handleActive} className={`btn btn-secondary btn-outline ${active == 'read'? 'border-b-0 rounded-b-none' : 'border-0'}`}>Read Books</button>
                <button onClick={handleActive} className={`btn btn-secondary btn-outline ${active == 'wishlist'? 'border-b-0 rounded-b-none' : 'border-0'}`}>Wishlist Books</button>
                <hr className={`${active == 'read'? 'ml-28.5' : 'ml-62'}`} />
            </div>

            {
                active == 'read' && <div className='mt-8 space-y-4'>
                {
                    storedBooks.map(book => <ListedBookCard key={book.bookId} book={book} />)
                }
                </div>
            }

        </div>
    );
};

export default ListedBooks;