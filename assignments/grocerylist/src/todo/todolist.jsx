import React from "react";
const TodoList = ({ data }) => {
  //  console.log(data);
  return <>
    {data.map((item) =>
    (<h1> {item.title}</h1>
    ))}

  </>



}

export default TodoList; 