import React from 'react';

import {Button, Input, Textarea} from './';

const colors = {
    fadedPoster: '#81ecec',
    americanRiver:'#636e72'
}

function Form() {
    const {fadedPoster, americanRiver} = colors;
    return (
        <Button
            icon='user'
            bgColor={fadedPoster}
            color={americanRiver}
            >
            Click me!
        </Button>
    );
}

export default Form;
