import React from 'react';
import { Outlet } from 'react-router';
import Banner from '../Components/Banner';
import Books from '../Components/Books';

const booksPromise = fetch('./booksData.json').then(res => res.json());


const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Books booksPromise={booksPromise}></Books>
            
        </div>
    );
};

export default Homepage;