import React from 'react';
import '../index.css'
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar md:w-4/5 md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : ''}>Home</NavLink></li>
                            <li><NavLink to={'/listed-books'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : ''}>Listed Books</NavLink></li>
                            <li><NavLink to={'/toread'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : ''}>Pages to Read</NavLink></li>
                        </ul>
                    </div>
                    <a className="work text-[#131313] text-3xl font-bold! w-full">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-4 work">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : ''}>Home</NavLink></li>
                        <li><NavLink to={'/listed-books'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : ''}>Listed Books</NavLink></li>
                        <li><NavLink to={'/toread'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A]' : ''}>Pages to Read</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-4 hidden md:flex">
                    <a className="btn bg-[#23BE0A] text-white rounded-lg">Signin</a>
                    <a className="btn bg-[#59C6D2] text-white rounded-lg">Signup</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;