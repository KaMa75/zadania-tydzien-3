import React from 'react';

import {Title, Intro, Content, Image, ShowBtn} from './';
import './Card.css';

function Card({title, intro, content, showMore}) {
    return (
        <div className='Card'>
            <Title letter='R'>
                {title}
            </Title>
            <Image />
            <Intro>
                {intro}
            </Intro>
            <ShowBtn />
            <Content showMore={showMore}>
                {content}
            </Content>
        </div>
    );
}

export default Card;
