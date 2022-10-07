import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mx-5 font-semibold p-3'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;