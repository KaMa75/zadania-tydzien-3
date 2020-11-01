import React from 'react';

import Card from 'components/Card';
import './Posts.css';

const cardData = [
    {
        title: 'Shrim and Chorizo Paella',
        intro: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        content: 'Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes....'
    }
];


function Posts() {

    const {title, intro, content} = cardData[0];

    return (
        <div className='Posts'>
            <Card
                title={title}
                intro={intro}
                content={content}
                showMore={false}
            />
            <Card
                title={title}
                intro={intro}
                content={content}
                showMore={true}
            />
        </div>
    );
}

export default Posts;
