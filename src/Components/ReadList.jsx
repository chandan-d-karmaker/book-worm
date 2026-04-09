import React, { useContext, useEffect, useState } from 'react';
import { bookContext } from '../ContextAPI/BookContext';
import EmptyState from './EmptyState';
import ListedBookCard from './ListedBookCard';
import { useNavigate } from 'react-router';

const ReadList = ({ sortType }) => {

    const { storedBooks } = useContext(bookContext);

    const [sortedStoredBooks, setSortedStoredBooks] = useState(storedBooks);

    useEffect(() => {
        if (sortType) {
            if (sortType == 'pages') {
                const sortedData = [...storedBooks].sort((a, b) => a.totalPages - b.totalPages);
                setSortedStoredBooks(sortedData);
            }
            else if (sortType == 'publish') {
                const sortedData = [...storedBooks].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
                setSortedStoredBooks(sortedData);
            } else if (sortType == 'rating') {
                const sortedData = [...storedBooks].sort((a, b) => b.rating - a.rating);
                setSortedStoredBooks(sortedData);
            }
        }

    }, [sortType, storedBooks])



    let navigate = useNavigate();
    if (sortedStoredBooks.length === 0) {

        return <div>
            <EmptyState onAction={() => navigate('/#books')} />
        </div>
    }
    return (
        <div className='mb-10'>

            <div className='space-y-4'>
                {
                    sortedStoredBooks.map(book => <ListedBookCard key={book.bookId} book={book} />)
                }
            </div>

        </div>
    );
};

export default ReadList;