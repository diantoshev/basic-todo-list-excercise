import { useState } from "react";
import "./NewToDo.css"

export default function NewToDo(props) {

    let [inputValue, setInputValue] = useState('');

    const updateInput = (e) => {
        setInputValue(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.setToDos(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={submitHandler} className="addItemForm">
            <div className='card form__container'>
                <label className="addTaskLabel" htmlFor="taksItemInput"> Add a task to complete:</label>
                <input className="addTaskInput" onChange={updateInput} type="text" id="taksItemInput" value={inputValue} name="taksItemInput" placeholder="Add a task..." />
                <button className="addTask__btn">Add task!</button>
            </div>
        </form>
    )
}