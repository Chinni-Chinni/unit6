import React from "react";

const TodoList = ({ title, status, handleDelete, id,handleTaggle  }) => {
  //  console.log(data);
  return <>
    <div id="inputlist">
      <h3>{title}</h3>
      < h2 > {status ? "Completed" : "Not Completed"}</h2>
      <button onClick={()=>handleTaggle(id)}>Taggle</button>
      <button onClick={() => handleDelete(id)}>DELETE</button>


    </div>
  </>

}

export default TodoList; 