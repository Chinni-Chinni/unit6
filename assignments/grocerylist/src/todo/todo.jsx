import React  from "react";
import TodoInput from "./todoinput";
import TodoList from "./todolist";
import {v4 as uuid} from "uuid";


const Todo = () => {

    const [data, setData] = React.useState([]);
  
    const HandleData = (title) => {
      const todoItem = {
        title: title,
        status: false,
        id:uuid()
  
      }
      setData([...data, todoItem])
  
    }
    const handleDelete = (id)=>{
      const Delete = data.filter((item)=> item.id !== id);
      setData(Delete)

    }

    const handleTaggle = (id)=>{
      const updatedData = data.map((todo)=> todo.id === id? {...todo,status:!todo.status}:todo);

      setData(updatedData);

    }
    
  
    return (
      <>
        <TodoInput handledData={HandleData} />

        {data.map((item)=>(
          <TodoList {...item} 
           handleDelete = {handleDelete} 
           handleTaggle = {handleTaggle} />
        ))}
      
  
      </>
    )
  }
  export default Todo;