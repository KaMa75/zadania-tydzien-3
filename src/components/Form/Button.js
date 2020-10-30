import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({children, bgColor, color, icon}) {
    const styles = {
        color: color,
        backgroundColor: bgColor
    }

    return (
        <div className='btn'>
            <button
                style={styles}
            >
                <FontAwesomeIcon icon={icon} />
                <span>{children}</span>
            </button>
        </div>
    );
}

Button.defaultProps = {
    bgColor: '#dfe6e9',
    color: '#6c5ce7'
}

export default Button;
