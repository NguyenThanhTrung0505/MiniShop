import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Admin from "./components/Admin/Admin.jsx";
import BuyProduct from "./components/Home/BuyProduct/BuyProduct.jsx";
import Login from "./components/login/login.jsx";
import Register from "./components/Register/register.jsx";
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="/buyproduct" element={<BuyProduct />} />
            </Route>
            <Route path="/admin" element={<Admin />}></Route>

            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
        </Routes>
    </BrowserRouter>,
);
