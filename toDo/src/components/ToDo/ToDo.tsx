import React from 'react';
import { ToDoProps } from '../../vite-env';
import { RiDeleteBin6Line } from "react-icons/ri";
import './ToDo.css';


const ToDo: React.FC<ToDoProps> = ({toDo, handleStatus, handleDelete}) => {
    
    const handleChange = () => {
        handleStatus(toDo.id);
    };

    const handleClick = () => {
        handleDelete(toDo.id);
    };

    return(
        <div className={`container d-flex align-items-center justify-content-between border border-2 border-secondary rounded-4 py-2 mb-2 ${(toDo.isFinished)? 'checked': ''}`.trim()}>
            <form className="form-check-container d-flex align-items-center justify-content-center">
                <input 
                    className="form-check-input m-0 mx-2" 
                    type="checkbox" 
                    id={toDo.id} 
                    checked={toDo.isFinished}
                    onChange={handleChange}
                />
                <label className="form-check-label fs-5 m-0 me-2" htmlFor={toDo.id}>{toDo.text}</label>
            </form>

            <span className='btn-container'>
                <button onClick={handleClick} type='button' className='btn btn-warning fs-5 m-1 py-1'><RiDeleteBin6Line /></button>
            </span>
        </div>
    );
}

export default ToDo;