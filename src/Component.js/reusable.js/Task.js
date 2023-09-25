import React, { useEffect, useRef } from "react";

export const Task = (props) => {
  const span = useRef(null);
  const checkBox = useRef(null);
  useEffect(() => {
    props.task.done
      ? (checkBox.current.checked = true)
      : (checkBox.current.checked = false);
  });

  return (
    <div className="task d-flex  align-items-center justify-content-between w-60 my-1">
      <div className="div">
        <input
          ref={checkBox}
          className="form-check-input p-3 m-2"
          type="checkbox"
          id={"checkbox-" + props.task.id}
          onChange={(e) => props.handleCheckBox(props.task.id, e)}
        />{" "}

        <span ref={span}
          style={{ fontSize: "1.5rem", textDecoration: `${props.task.done ? "line-through" : "none"}` }}>
          {props.task.text}
        </span>
      </div>
      
      <button onClick={props.handleDelete} className="btn btn-warning mx-2 "> Delete </button>
       
    </div>
  );
};
