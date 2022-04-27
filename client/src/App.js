import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Cart from "./components/cart";
import ItemState from './context/item/ItemState';

function App() {
  return (
    <>
    <ItemState> 
      <Router>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>

      </Router>
    </ItemState>
    </>
  );
}

export default App;
