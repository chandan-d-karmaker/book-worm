import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <ToastContainer />
        </div>
    );
};

export default Root;