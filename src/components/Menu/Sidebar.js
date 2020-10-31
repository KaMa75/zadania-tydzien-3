import React from 'react';

import {Menu, MenuLink} from './';

const menuLinks = [
    {id:1, name: 'Home', linkTo: '/', isActive: false},
    {id:2, name: 'About', linkTo: '/about', isActive: false},
    {id:3, name: 'Contact', linkTo: '/contact', isActive: true},
    {id:4, name: 'Posts', linkTo: '/posts', isActive: false},
];

function Sidebar() {
    const links = menuLinks.map((link) => {
        const {id, name, linkTo, isActive} = link;
        return (
            <MenuLink
                key={id}
                to={linkTo}
                isActive={isActive}
            >
                {name}
            </ MenuLink>
        );
    });
    return (
        <Menu>
            {links}
        </Menu>
    );
}

export default Sidebar;
