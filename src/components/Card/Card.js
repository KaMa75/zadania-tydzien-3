import React from 'react';

import {Title} from './';
import './Card.css';

function Card({title, intro, content, showMore}) {
    return (
        <div className='Card'>
            <Title letter='R'>
                {title}
            </Title>
            <p className="intro">{intro}</p>
            <p className="content">{content}</p>
        </div>
    );
}

export default Card;
