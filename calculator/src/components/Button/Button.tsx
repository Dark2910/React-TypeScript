import React from 'react';
import './Button.css'

interface ButtonProps {
    value: number | string,
    onButtonClick: () => void,
}

const Button : React.FC<ButtonProps> = (props) => {

    const isOperator = (value: number | string): boolean => {
        return(isNaN(Number(value)) && (value !== '.') && (value !== '=') && (value !== 'clear') )
    }

    const isClear = (value: number | string): boolean => {
        return (value === 'clear');
    }

    const isOperatorValue: boolean = isOperator(props.value);
    const isClearValue: boolean = isClear(props.value);

    const operatorClass: string = (isOperatorValue)? 'btn-operator' : '';
    const clearClass: string = (isClearValue)? 'btn-clear' : '';

    const btnClasses : string[] = ['btn','btn-secondary','rounded-pill', 'px-3', 'm-1', operatorClass, clearClass ].filter(Boolean);
    
    return(
        <button className={btnClasses.join(' ')} onClick={props.onButtonClick}><span>{props.value}</span></button>
    );
}

export default Button;