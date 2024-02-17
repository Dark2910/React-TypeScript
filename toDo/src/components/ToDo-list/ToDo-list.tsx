import React from 'react';
import ToDo from '../ToDo/ToDo';
import { ToDoListProps } from '../../vite-env';
import './ToDo-list.css';


const ToDoList: React.FC<ToDoListProps> = ({toDos}) => {

    const renderToDos = toDos.map((toDo) => {
        return(
            <ToDo key={toDo.id} toDo={{id: toDo.id, isFinished: toDo.isFinished, text: toDo.text}} />
        );
    });

    return(
        <div className='container d-flex flex-column flex-wrap align-items-center justify-content-center mb-3'>
            {renderToDos}
        </div>
    );
}

export default ToDoList;