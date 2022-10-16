import Card from '../UI/Card';
import './ToDoItem.css';
import React, { useState } from 'react';

export default function ToDoItem(props) {

    const date = new Date();

    let [strikeClass, setstrikeClass] = useState(true);

    const classClickHandler = () => {
        setstrikeClass(strikeClass => !strikeClass);
    }

    let toggleClass = strikeClass ? 'no-strike' : 'strike';


    return (
        <Card className='todo-item' value={props.id}>
            <div className='date'> {date.toDateString()}</div>
            <div className='todo-item__description'>
                <h2 onClick={classClickHandler} className={toggleClass}>{props.textToDo}</h2>
                <button onClick={() => props.onDelete(props.id)} className='todo-item__btn'>Remove</button>
            </div>
        </Card>
    )
};