import React from "react";
const TodoInput = ({ handledData }) => {
  const [title, setTitle] = React.useState("");

  return (
    <>
      <input type="text" placeholder='ADD TO DO' value={title} onChange={(event) => setTitle(event.target.value)} />
      <button onClick={() => handledData(title)}>ADD</button>
    </>
  )



}
export default TodoInput; 