import { ToDoType } from "../vite-env";

const deleteToDo = (id: string, toDos: Array<ToDoType>) => {
    const updateToDos = toDos.filter((toDo) => toDo.id !== id);
    return updateToDos;
}

export default deleteToDo;