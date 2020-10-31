import React from 'react';

// function Card({title, intro, content, showMore}) {
function Card(props) {
    // console.log(props)
    return (
        <div className='Card'>
            <h3>{props.title}</h3>
            {/* <h3>{title}</h3> */}
            {/* <p>{intro}</p> */}
            {/* <p>{content}</p> */}
        </div>
    );
}

export default Card;
