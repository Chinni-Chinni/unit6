import React  from "react";
import TodoInput from "./todoinput";
import TodoList from "./todolist";

const Todo = () => {

    const [data, setData] = React.useState([]);
  
    const HandleData = (title) => {
      const todoItem = {
        title: title,
        status: false,
        // id:uuid(),
  
      }
      setData([...data, todoItem])
  
    }
    console.log(data);
  
    return (
      <>
        <TodoInput handledData={HandleData} />
        <TodoList data={data} />
  
      </>
    )
  }
  export default Todo;