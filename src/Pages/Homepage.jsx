import React from 'react';
import { Outlet } from 'react-router';
import Banner from '../Components/Banner';
import Books from '../Components/Books';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            
        </div>
    );
};

export default Homepage;