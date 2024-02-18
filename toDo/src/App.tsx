import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import React, { useState } from 'react';
import { ToDoType } from './vite-env';
import Form from './components/Form/Form';
import addToDo from './use-cases/add-toDo.js';
import changeToDoStatus from './use-cases/change-toDo-status.js';
import renderToDos from './presentation/render-toDo.js';
import deleteToDo from './use-cases/delete-toDo.js';


const App: React.FC = () => {  
  const[toDos, setToDos] = useState<Array<ToDoType>>([]);

  const handleSubmit = (inputText: string): void => {
    const updateToDos: Array<ToDoType> = addToDo(inputText, toDos);
    setToDos(updateToDos);
  }

  const handleStatus = (id: string): void => {
    const updateToDos: Array<ToDoType> = changeToDoStatus(id, toDos);
    setToDos(updateToDos);
  }

  const handleDelete = (id: string) => {
    const updateToDos: Array<ToDoType> = deleteToDo(id, toDos);
    setToDos(updateToDos);
  }

  return(
    <div className='container d-flex flex-column flex-wrap align-items-center justify-content-center'>
      <div className='app-container container rounded-5 px-auto py-3 m-5'>
        <h1 className='text-center fw-bold fs-1 my-3'>ToDo-List</h1>
        <Form formSubmit={handleSubmit}/>
        <div className='container d-flex flex-column flex-wrap align-items-center justify-content-center mb-3'>
            {renderToDos(toDos, handleStatus, handleDelete)}
        </div>
      </div>
    </div>
  );
}

export default App
