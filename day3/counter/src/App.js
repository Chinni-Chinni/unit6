import logo from './logo.svg';
import './App.css';
import React from "react"
function App() {
  const [counter,settingValue] = React.useState(0);

  const handleIncre = (value)=>{
    settingValue(counter+value);
  }

  const handleDecre = (value)=>{
    settingValue(counter-value)
  }

  const double = (value)=>{
        settingValue(counter*value);
  }

  if(counter%2===0){
    return (
      <div className="App">
      <h1>COUNTER</h1>
      <h2 style={{color:"green"}}>{counter}</h2>
      <button onClick={()=>handleIncre(1)}>ADD</button>
      <button onClick = {()=>handleDecre(1)}>DECREMENT</button>
      <button onClick={()=>double(2)}>Double</button>
      </div>
    );

  }
  return (
    <div className="App">
    <h1>COUNTER</h1>
    <h2 style={{color:"red"}}>{counter}</h2>
    <button onClick={()=>handleIncre(1)}>ADD</button>
    <button onClick = {()=>handleDecre(1)}>DECREMENT</button>
    <button onClick={()=>double(2)}>Double</button>
    </div>
  );
}

export default App;
