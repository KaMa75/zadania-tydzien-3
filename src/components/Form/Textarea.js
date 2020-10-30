import React from 'react';

const placeholder = 'Wpisz treść wiadomości';
const rows = 6;

function Textarea(props) {
    const {bgColor, color, borderColor, borderSize, borderRadius} = props;

    const styles = {
        backgroundColor: bgColor,
        color,
        borderColor,
        borderRadius,
        borderWidth: borderSize
    }
    return (
        <textarea
            style={styles}
            placeholder={placeholder}
            rows={rows}
        >

        </textarea>
    );
}

export default Textarea;
