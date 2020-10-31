import React from 'react';

function MenuLink({children, to, isActive}) {
    return (
        <li className={isActive ? 'active' : ''}>
            <a href={to}>
                {children}
            </a>
        </li>
    );
}

export default MenuLink;
