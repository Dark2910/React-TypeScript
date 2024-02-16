import React from "react"
import './Screen.css'

interface ScreenProps {
    input: string,
}

const Screen : React.FC<ScreenProps> = ({input}) => {

    const text: number | string = (input === '=' || input === 'clear')? '' : input;

    return (
        <div className='input d-flex align-items-center justify-content-end border border-3 border-secondary rounded-pill bg-light p-3 mb-2'>
            <span>{text}</span>
        </div>
    );
}

export default Screen;