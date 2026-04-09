import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const bookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        const doesExist = storedBooks.find((book) => book.bookId === currentBook.bookId);
        if (doesExist) {
            toast.error("Already in list");
        } else {
            toast.success("Marked as read");
            setStoredBooks([...storedBooks, currentBook]);
        }
    }

    const handleWishlist = (currentBook) =>{

        const doesExitInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId);

        if(doesExitInReadList){
            toast.error("Already marked as Read!");
            return;
        }
        const doesExist = wishlist.find(book => book.bookId == currentBook.bookId);
        if(doesExist){
            toast.error("Already in wishlist");
        } else {
            toast.success("Added to wishlist");
            setWishlist([...wishlist, currentBook]);
        }
    }

    const data ={
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        handleWishlist,
        wishlist
    }


    return <bookContext.Provider value={data}>{children}</bookContext.Provider>
};

export default BookProvider;