import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Banner from '../Components/Banner';
import Books from '../Components/Books';

const booksPromise = fetch('/booksData.json').then(res => res.json());


const Homepage = () => {

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const timer = setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100); // 100ms is usually enough for React to mount children

            return () => clearTimeout(timer);
        }
    }, [hash]);
    return (
        <div>
            <Banner></Banner>
            <Books booksPromise={booksPromise}></Books>

        </div>
    );
};

export default Homepage;