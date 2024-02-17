import React, { useState } from 'react';
import { ToDoProps } from '../../vite-env';
import { RiDeleteBin6Line } from "react-icons/ri";
import './ToDo.css';


const ToDo: React.FC<ToDoProps> = (props) => {
    const[isChecked, setCheck] = useState(props.toDo.isFinished);

    const onChangeToDoStatus = async () => {
        props.toDo.isFinished = !props.toDo.isFinished;
    }

    const onHandleChange = async () => {
        await Promise.all([
            onChangeToDoStatus(),
            setCheck((prevIsFinished) => !prevIsFinished),
        ])
        console.log(`isFinished: ${props.toDo.isFinished} isCheck: ${isChecked}`)
    };

    return(
        <div className={`container d-flex align-items-center justify-content-between border border-2 border-secondary rounded-4 py-2 mb-2 ${(props.toDo.isFinished)? 'checked': ''}`.trim()}>
            <form className="form-check-container d-flex align-items-center justify-content-center">
                <input 
                    className="form-check-input m-0 mx-2" 
                    type="checkbox" 
                    id={props.toDo.id} 
                    checked={isChecked}
                    onChange={onHandleChange}
                />
                <label className="form-check-label fs-5 m-0 me-2" htmlFor={props.toDo.id}>{props.toDo.text}</label>
            </form>

            <span className='btn-container'>
                <button type='button' className='btn btn-warning fs-5 m-1 py-1'><RiDeleteBin6Line /></button>
            </span>
        </div>
    );
}

export default ToDo;