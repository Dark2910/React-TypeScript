import ToDo from "../components/ToDo/ToDo";
import { ToDoType } from "../vite-env";


const renderToDos = ( toDos: Array<ToDoType>, handleStatus: (id: string) => void , handleDelete: (id: string) => void) => {
    const toDosComponent = toDos.map((toDo) => {
        return (
            <ToDo
                key={toDo.id}
                toDo={{ id: toDo.id, isFinished: toDo.isFinished, text: toDo.text }}
                handleStatus={handleStatus}
                handleDelete={handleDelete}
            />
        );
    })
    return toDosComponent;
}

export default renderToDos;