import { ToDoType } from "../vite-env";
import { v4 as uuidv4 } from "uuid";

const addToDo = (inputText: string, toDos: Array<ToDoType>) => {
    if (inputText) {
        const newToDo: ToDoType = {
            id: uuidv4(),
            isFinished: false,
            text: inputText.trim(),
        }
        const updateToDos: Array<ToDoType> = [newToDo, ...toDos];
        return updateToDos
    }
    return toDos;
};


export default addToDo