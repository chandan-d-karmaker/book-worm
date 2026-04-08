import React from 'react';
import '../index.css'

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div> */}
                    <a className="work text-[#131313] text-3xl font-bold!">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-4 work">
                        <li><a href="" className="btn font-normal">Home</a></li>
                        <li><a href="" className="btn font-normal">Listed Books</a></li>
                        <li><a href="" className="btn font-normal">Pages to Read</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-4 ">
                    <a className="btn bg-[#23BE0A] text-white rounded-lg">Signin</a>
                    <a className="btn bg-[#59C6D2] text-white rounded-lg">Signup</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;