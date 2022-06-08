import profile from './profile.jpg';
import React from "react";
// import { useState } from 'react';
import './App.css';




function App() {

  const details = [
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
  ]

  const [age, settingValue] = React.useState(18);
  const [show,setButton] = React.useState("true");

  const increase = (val) => {
    settingValue(age + val)
  }
  const decrease = (val) => {
    settingValue(age - val);
  }
  const toggle = ()=>{
    setButton(!show);
  }

  return (
    <div className="App">
      <div className='left-part'>
        <img src={profile} className="profile"></img>
        <h1>Name:Chinni</h1>
        <h2>AGE:{age}</h2>

        <button onClick={() => increase(1)}>IncreaseAge</button>
        <button onClick={() => decrease(1)}>DecreaseAge</button>
        <br></br>
        <button className='showDetails' onClick={toggle}> showDetails</button>
        {show?<h3 style={{color:"blue"}}>Masai School Bangelore,Karnataka</h3>:null}

      </div>

      <div>TODOLIST
        {

          details.map((data) => {
            if (data.status === true) {
              return <h3 style={{ color: "red" }}>{data.title}</h3>
            }else{
              return <h3 style={{color:"green"}}>{data.title}</h3>
            }

          })
        }

      </div>

    </div>
  );
}

export default App;
