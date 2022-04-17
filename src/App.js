import "./App.css";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./components/Pages/Home/Home/Home";
import About from "./components/Pages/About/About";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
// import Services from "./components/Pages/Home/Services/Services";

import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Pages/Blogs/Blogs";
function App() {
  return (
    <div className="backgroundImg">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        {/* <Route path="/services" element={<Services></Services>}></Route> */}
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
