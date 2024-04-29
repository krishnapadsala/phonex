import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import { UserLayout } from "./UserLayout";
import { AdminLauout } from "./AdminLauout";
import { Dashbord } from "./components/Admin/Dashbord";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/admin" element={<AdminLauout />}>
            <Route path="" element={<Dashbord />} />
          </Route>
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
