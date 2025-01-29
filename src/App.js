import HeroSection from "./Components/Atoms/HeroSection/HeroSection";
import Navbar from "./Components/Atoms/Navbar/Navbar";
import {  Routes, Route } from "react-router-dom";
import Products from "./Components/Atoms/Products/Products";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import  React from 'react'
// import WelcomePage from './Components/WelcomePage/WelcomePage'

function App() {


  return (
    <div> 
      <Navbar  /> 
      <Routes>
      {/* <Route   path="/welcome" element={<WelcomePage />} /> */}

        <Route   path="/" element={<HeroSection />} />
        <Route    path="/products" element={<Products  />} />
        <Route    path="/products/:id" element={<Product />} />
        <Route    path="/cart" element ={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
