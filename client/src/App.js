import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Cart from "./components/cart";
import ItemState from './context/item/ItemState';
import Wishlist from "./components/wishlist";
import Viewitem from "./components/viewitem";


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
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/viewitem" element={<Viewitem/>} />


        </Routes>

      </Router>
    </ItemState>
    </>
  );
}

export default App;
