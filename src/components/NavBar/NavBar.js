import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Products', path: '/products' },
        { id: 3, name: 'Orders', path: '/orders' },
        { id: 4, name: 'Contacts', path: '/contact' },
        { id: 5, name: 'About', path: '/about' },
    ]
    return (
        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className='md:hidden h-6 w-6'>
                {
                    open ? <XMarkIcon/> : <Bars3Icon/>
                }
            </div>
            <ul className={`bg-indigo-300 w-full md:flex justify-center absolute md:static duration-200 ease-in-out ${open ? 'top-6' : 'top-[-300px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;