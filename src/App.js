import React, { useState, useEffect } from "react";
import { Header } from './Component.js/ToDoForm';
import { List } from './Component.js/ToDoList';

 function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "attend lecture", done: false },
    { id: 2, text: "assignment", done: false },
    { id: 3, text: "Lecture review", done: false },
  ]);
  const [value, setValue] = useState("");

  const handleCheckBox = (id, e) => {
    const result = tasks.map((task) => {
      if (task.id === id) {
        task.done = e.target.checked;
        return task;
      }
      return task;
    });
    setTasks(result);
  };

  const handleClickAdd = () => {
    setTasks([...tasks, { id: tasks.length + 1, text: value, done: false }]);
  };

  const handleDelete = (id) => {
    const filterTasks = tasks.filter((task) => task.id !== id);
    setTasks(filterTasks);
  };

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App ">
      <Header  handleChangeInput={handleChangeInput} handleClickAdd={handleClickAdd} />
      
      <List handleDelete={handleDelete}  handleCheckBox={handleCheckBox} tasks={tasks} />
    </div>
  );
}

export default App; 