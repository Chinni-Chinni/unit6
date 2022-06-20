// import "./styles.css";
import React  from "react";
import { Navbar } from "./components/navbar";
import {HomePage} from "./components/Home";
import {LoginPage} from "./components/Login";
import { ProductPage } from "./components/Product";
import { Routes,Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<HomePage />}></Route>
        <Route path = "/Login" element = {<LoginPage />}></Route>
      
        <Route path = "/Product" element = {<ProductPage />} ></Route>
      
        </Routes>
    </div>
  );
}