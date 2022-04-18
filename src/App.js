import "./App.css";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./components/Pages/Home/Home/Home";
import About from "./components/Pages/About/About";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import Blogs from "./components/Pages/Blogs/Blogs";
import Login from "./components/Pages/Authentication/Login/Login";
import Register from "./components/Pages/Authentication/Register/Register";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/Pages/Authentication/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="backgroundImg">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
