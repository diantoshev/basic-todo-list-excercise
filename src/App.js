import { useState } from 'react';
import './App.css';
import ToDoList from './components/TODO-LIST/ToDoList';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewToDo from './components/ADD-TODO/NewToDo';
import Navigation from './components/Navigation/Navigation';

const initialTasks = JSON.parse(localStorage.getItem("toDos")) || [];

function App() {
  const [toDos, setToDos] = useState(initialTasks);

  const addToDoHandler = (enteredData) => {
    const newToDo = {
      value: enteredData,
      id: (Math.random() * 1).toString()
    }
    setToDos((previousToDos) => {
      localStorage.setItem("toDos", JSON.stringify([newToDo, ...previousToDos]));
      return [newToDo, ...previousToDos];
    })
  }

  const deleteItemHandler = (id) => {
    setToDos(toDos.filter(toDo => id !== toDo.id))
  }

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Navigate to='add-to-do' replace />} />
        <Route path='allTasks' element={
          <ToDoList onAddToDo={addToDoHandler} tasks={toDos} onDeleteItem={deleteItemHandler} />
        } />
        <Route path='add-to-do' element={<NewToDo setToDos={addToDoHandler} />} />
      </Routes>
    </div>
  );
}

export default App;
