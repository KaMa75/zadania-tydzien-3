import React from 'react';

const placeholder = 'Wpisz temat wiadomości'

function Input(props) {
    const {bgColor, color, borderColor, borderSize, borderRadius} = props;
    const styles = {
        backgroundColor: bgColor,
        color,
        borderColor,
        borderRadius,
        borderWidth: borderSize
    }

    return <input style={styles} placeholder={placeholder} />;
}

export default Input;
