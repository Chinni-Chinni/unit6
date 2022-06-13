import React  from "react";
import TodoInput from "./todoinput";
import TodoList from "./todolist";
import {v4 as uuid} from "uuid";


const Todo = () => {

    const [data, setData] = React.useState([]);
    React.useEffect(()=>{
      fetch(`http://localhost:3001/Grocery`)
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((err)=>console.log(err))

    },[])
  
    const HandleData = (title) => {

      const todoItem = {
        title: title,
        status: false,
        id:uuid()
  
      }
     

       fetch(` http://localhost:3001/Grocery`,{
       method: "POST",
      body: JSON.stringify(todoItem),
      headers: {
        "content-type": "application/json"
      }
         
       }).then((res)=>res.json())
       .then((res)=>{
        setData()
       })
       .catch((err)=>console.log(err))
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