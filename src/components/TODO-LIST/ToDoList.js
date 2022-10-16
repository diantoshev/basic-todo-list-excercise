import './ToDoList.css';
import ToDoItem from './ToDoItem';
import Card from '../UI/Card';
import '../UI/Card.css';
import NewToDo from '../ADD-TODO/NewToDo';

export default function ToDoList(props) {
    return (
        <Card className='toDoList_container'>
            <NewToDo />
            <div><ToDoItem textToDo={props.tasks[0]} /></div>
            <div><ToDoItem textToDo={props.tasks[1]} /></div>
            <div><ToDoItem textToDo={props.tasks[2]} /></div>
            <div><ToDoItem textToDo={props.tasks[3]} /></div>
        </Card>
    )
};

