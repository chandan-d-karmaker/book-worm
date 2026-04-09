import React, { useContext, useEffect, useState } from 'react';
import { bookContext } from '../ContextAPI/BookContext';
import EmptyState from './EmptyState';
import ListedBookCard from './ListedBookCard';
import { useNavigate } from 'react-router';

const Wishlist = ({ sortType }) => {

    const { wishlist } = useContext(bookContext);

    const [sortedWishlist, setSortedWishlist] = useState(wishlist);

    useEffect(() => {
        if (sortType) {
            if (sortType == 'pages') {
                const sortedData = [...sortedWishlist].sort((a, b) => a.totalPages - b.totalPages);
                setSortedWishlist(sortedData);
            }
            else if (sortType == 'publish') {
                const sortedData = [...sortedWishlist].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
                setSortedWishlist(sortedData);
            } else if (sortType == 'rating') {
                const sortedData = [...sortedWishlist].sort((a, b) => b.rating - a.rating);
                setSortedWishlist(sortedData);
            }
        }

    }, [sortType, sortedWishlist])


    let navigate = useNavigate();
    if (sortedWishlist.length === 0) {

        return <div>
            <EmptyState onAction={() => navigate('/#books')} />
        </div>
    }
    return (
        <div className='mb-10'>

            <div className='space-y-4'>
                {
                    sortedWishlist.map(book => <ListedBookCard key={book.bookId} book={book} />)
                }
            </div>

        </div>
    );
};

export default Wishlist;