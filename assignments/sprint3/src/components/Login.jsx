import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = styled.div`
width:40%;
margin:auto;
  display:flex;
  padding:10px;
  flex-direction : column;
  `;

  const Button = styled.button `
  width:40%;
  margin : auto;
  margin-top : 10px;
  width:200px;

  `; 
const LoginPage = ()=>{
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  const navigate = useNavigate();

  const HandleLogin = ()=>{
    const payload = {email,password};
    fetch(`http://localhost:8080/loginDetails`,
    {
        method : "POST",
        body : JSON.stringify(payload),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res){
            navigate("/Product")

        }
    })
    .catch((err)=>console.log(err));
    

  }

  return (
    <Login>
    <h1>Login</h1>
    <label>
      Email : <input type = "text" placeholder = "Email" value = {email} onChange = {(e)=> setEmail(e.target.value)}  />
      </label>
       <label>
      password<input type = "text" placeholder = "password" value = {password} onChange = {(e)=>setPassword(e.target.value)} />
      </label>
      <Button onClick = {HandleLogin}>Login</Button>
      </Login>
 
  )
}
export {LoginPage};