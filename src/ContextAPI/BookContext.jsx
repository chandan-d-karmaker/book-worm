import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const bookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        const doesExist = storedBooks.find((book) => book.bookId === currentBook.bookId);
        if (doesExist) {
            toast("Already in list");
        } else {
            toast("Marked as read");
            setStoredBooks([...storedBooks, currentBook]);
        }
    }

    const data ={
        storedBooks,
        setStoredBooks,
        handleMarkAsRead
    }


    return <bookContext.Provider value={data}>{children}</bookContext.Provider>
};

export default BookProvider;