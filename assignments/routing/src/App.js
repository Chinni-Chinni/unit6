// import "./styles.css";
import React  from "react";
import { Navbar } from "./components/navbar";
import {HomePage} from "./components/Home";
import {AboutPage} from "./components/About";
import {ContactPage} from "./components/Contact";
import {LoginPage} from "./components/Login";
import { ProductPage } from "./components/Product";
import { NotFoundPage } from "./components/NotFound";
import { Routes,Route } from "react-router-dom";
import { ProductDetailsPage } from "./components/ProductDetails";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<HomePage />}></Route>
        <Route path = "/About" element = {<AboutPage />}></Route>
        <Route path = "/Contact" element = {<ContactPage />}></Route>
        <Route path = "/Login" element = {<LoginPage />}></Route>
        <Route path = "*" element = { <NotFoundPage />} ></Route>
        <Route path = "/Product" element = {<ProductPage />} ></Route>
        <Route path = "/Product/:itemId" element = {<ProductDetailsPage />}></Route>
        </Routes>
    </div>
  );
}