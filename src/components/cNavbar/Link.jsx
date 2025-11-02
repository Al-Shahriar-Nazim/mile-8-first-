import React from 'react';

const Link = ({route}) => {
    console.log(route)
    return (
        <div>
            <ul>
                <li className='px-2 lg:mr-10 hover:bg-amber-400'><a href={route.path}>{route.name}</a></li>
            </ul>
        </div>
    );
};

export default Link;