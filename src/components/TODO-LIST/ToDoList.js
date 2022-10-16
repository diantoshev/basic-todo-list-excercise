import './ToDoList.css';
import ToDoItem from './ToDoItem';
import Card from '../UI/Card';
import '../UI/Card.css';

export default function ToDoList(props) {

    const deleteHandler = (id) => {
        props.onDeleteItem(id);
    }
    return (
        <Card className='toDoList_container'>
            <div>Your To-Do items will apear here:</div>
            {props.tasks.map((task) => {
                return < div >
                    <ToDoItem
                        key={task.id}
                        textToDo={task.value}
                        id={task.id}
                        tasks={props.tasks}
                        onDelete={deleteHandler} />
                </div>
            })}
            {localStorage.setItem("toDos", JSON.stringify(props.tasks))}
        </Card >
    )
};

