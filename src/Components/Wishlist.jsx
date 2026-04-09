import React, { useContext } from 'react';
import { bookContext } from '../ContextAPI/BookContext';
import EmptyState from './EmptyState';
import ListedBookCard from './ListedBookCard';
import { useNavigate } from 'react-router';

const Wishlist = () => {

    const { wishlist } = useContext(bookContext);
    let navigate = useNavigate();


    if (wishlist.length === 0) {

        return <div>
            <EmptyState onAction={()=> navigate('/#books')} />
        </div>
    }
    return (
        <div className='mb-10'>

            <div className='space-y-4'>
                {
                    wishlist.map(book => <ListedBookCard key={book.bookId} book={book} />)
                }
            </div>

        </div>
    );
};

export default Wishlist;