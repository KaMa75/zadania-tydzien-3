import React from 'react';

import {Button, Input, Textarea} from './';
import './Form.css';

const borderParameters = {
    borderSize: 1,
    borderRadius: 5
}

const colors = {
    fadedPoster: '#81ecec',
    americanRiver:'#636e72',
    robinsBlue: '#00cec9',
    white: '#fff'
}

function Form() {
    const {fadedPoster, americanRiver, robinsBlue, white} = colors;
    const {borderSize, borderRadius} = borderParameters;

    return (
        <div className='Form'>
            <Input
                bgColor={white}
                color={americanRiver}
                borderColor={robinsBlue}
                borderSize={borderSize}
                borderRadius={borderRadius}
            />

            <Textarea
                bgColor={white}
                color={americanRiver}
                borderColor={robinsBlue}
                borderSize={borderSize}
                borderRadius={borderRadius}
            />

            <Button
                icon='user'
                bgColor={fadedPoster}
                color={americanRiver}
            >
                Click me!
            </Button>
        </div>
    );
}

export default Form;
