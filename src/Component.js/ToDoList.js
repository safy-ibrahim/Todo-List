import React from "react";
import { Task } from './reusable.js/Task';


export const List = ({tasks,handleDelete,handleCheckBox}) => {
  return (
    <div className="container">
      <div className="tasks-list text-start">
        {tasks.map((task, idx) => (
          <Task
            handleDelete={() => handleDelete(task.id)}
            handleCheckBox={handleCheckBox}
            key={idx}
           task={task}
          />
        ))}
      </div>
    </div>
  );
};