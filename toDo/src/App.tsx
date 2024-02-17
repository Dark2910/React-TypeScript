import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './vite-env';
import React, { useState } from 'react';
import Form from './components/Form/Form';
import ToDoList from './components/ToDo-list/ToDo-list';
import './App.css';


const App: React.FC = () => {  
  const[toDos, setToDos] = useState<Array<ToDo>>([]);

  const addToDo = (inputText: string) => {
    if(inputText){
      const newToDo: ToDo = {
        id: uuidv4(),
        isFinished: false,
        text: inputText.trim(),
      }
      const updateToDos: Array<ToDo> = [newToDo, ...toDos];
      setToDos(updateToDos);
    }
  };

  return(
    <div className='container d-flex flex-column flex-wrap align-items-center justify-content-center'>
      <div className='app-container container rounded-5 px-auto py-3 m-5'>
        <h1 className='text-center fw-bold fs-1 my-3'>ToDo-List</h1>
        <Form onFormSubmit={addToDo}/>
        <ToDoList toDos={toDos}/>
      </div>
    </div>
  );
}

export default App
