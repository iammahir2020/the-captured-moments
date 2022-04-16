import "./App.css";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./components/Pages/Home/Home/Home";
import About from "./components/Pages/About/About";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
