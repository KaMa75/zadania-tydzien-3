import React from 'react';

import Card from 'components/Card';

const cardData = 
    {
        title: 'Shrim and Chorizo Paella',
        intro: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        content: 'Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes....'
    }
;


function Posts() {

    const {title, intro, content} = cardData;

    return (
        <div>
            <Card
                title={title}
                intro={intro}
                content={content}
                showMore
            />
            <Card
                title={title}
                intro={intro}
                content={content}
            />
        </div>
    );
}

export default Posts;
