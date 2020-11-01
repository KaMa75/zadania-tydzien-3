import React from 'react';

function Content({children, showMore}) {
    return showMore && (
        <p className="Content">
            {children}
        </p>
    );
}

export default Content;
