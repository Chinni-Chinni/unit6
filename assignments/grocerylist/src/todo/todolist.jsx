import React from "react";

const TodoList = ({ data }) => {
  //  console.log(data);
  return <>
    {data.map((item) =>
    (
      <div id="inputlist">
        <h3>{item.title}</h3>
        < h2 > {item.status ? "Completed" : "Not Completed"}</h2>
        <button>DELETE</button>

      </div>

    ))}

  </>



}

export default TodoList; 