import React from 'react';

import {Icon} from './';

function Title({children, letter}) {
    return (
        <div className='Title'>
            <Icon letter={letter} />
            <h4>{children}</h4>
        </div>
    )
}

export default Title;
