import React from "react";

export const Header = (props) => {
  return (
    <div  className=" container  bg-dark pb-4 pt-4 text-light">
      <h1 className="my-4">To-Do App!</h1>
      <label htmlFor="newTask ">
        Add new task
      </label>
      
      <input id="newTask" type="text"
        onChange={props.handleChangeInput}
        className="form-control"
      />
      <button onClick={props.handleClickAdd} className="btn btn-secondary mt-2"> Add Task </button>
    </div>
  );
};
