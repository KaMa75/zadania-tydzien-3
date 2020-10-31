import React from 'react';

function Menu({children}) {
    return (
        <menu>
            <ul>
                {children}
            </ul>
        </menu>
    );
}

export default Menu;
