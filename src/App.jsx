import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Products from "./pages/products.jsx";


export default function App() {
  return (
    <>
      <Banner />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/products" element={<Products/>} />


      </Routes>
      <Footer/>
    </>
  );
}