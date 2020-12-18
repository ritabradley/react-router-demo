import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div>
            <nav className='navbar-expand-lg relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-gray-700'>
                <div className='container flex flex-wrap items-center justify-between px-4 mx-auto'>
                    <div className='lg:w-auto lg:static lg:block lg:justify-start relative flex justify-between w-full px-4'>
                        <Link
                            to='/'
                            className='inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-no-wrap'
                        >
                            Router Demo
                        </Link>
                        <button
                            className='lg:hidden focus:outline-none block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer'
                            type='button'
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <span className='relative block w-6 h-px bg-white rounded-sm'></span>
                            <span className='relative block w-6 h-px mt-1 bg-white rounded-sm'></span>
                            <span className='relative block w-6 h-px mt-1 bg-white rounded-sm'></span>
                        </button>
                    </div>
                    <div
                        className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')}
                        id='example-navbar-warning'
                    >
                        <ul className='lg:flex-row flex flex-col ml-auto list-none'>
                            <li className='nav-item'>
                                <Link
                                    to='/'
                                    className='hover:opacity-75 flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase'
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className='hover:opacity-75 flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase'
                                    to='/category'
                                >
                                    Category
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className='hover:opacity-75 flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase'
                                    to='/products'
                                >
                                    Products
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className='hover:opacity-75 flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase'
                                    to='/admin'
                                >
                                    Admin area
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
