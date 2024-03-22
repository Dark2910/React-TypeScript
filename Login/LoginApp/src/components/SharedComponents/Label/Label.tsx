import React from 'react';
import './Label.css';

const Label: React.FC<LabelProps> = ({htmlFor, text}) => {
    return(
        <label htmlFor={htmlFor}>{text}</label>
    );
}

export default Label;