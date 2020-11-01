import React from 'react';

import defaultImage from 'images/default.jpg';

function Image() {
    return (
        <img
            className='Image'
            src={defaultImage}
            alt='Default image'
        />
    );
}

export default Image;
