import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AddItems from "./Pages/AddItems/AddItems";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import ProductDetail from "./Pages/Home/ProductDetail/ProductDetail";
import Products from "./Pages/Home/Products/Products";
import LogIn from "./Pages/LogIn/LogIn/LogIn";
import Register from "./Pages/LogIn/Register/Register";
import MyItem from "./Pages/MyItem/MyItem";
import Header from "./Pages/SharedPages/Header/Header";
import NotFound from "./Pages/SharedPages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route
          path="/productsdetails"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/addItems" element={<AddItems></AddItems>}></Route>
        <Route path="/myItems" element={<MyItem></MyItem>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
