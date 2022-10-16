import Card from '../UI/Card';
import './ToDoItem.css';

export default function ToDoItem(props) {

    const date = new Date();

    return (
        <Card className='todo-item'>
            <div className='date'> {date.toDateString()}</div>
            <div className='todo-item__description'>
                <h2>{props.textToDo}</h2>
                <button className='todo-item__btn'>Remove</button>
            </div>
        </Card>
    )
};