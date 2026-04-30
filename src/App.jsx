import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Home from "./components/Home/Home";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Home/Navbar";

const App = () => {
    return (
        <div className="app-container">
            <Navbar></Navbar>
            <div className="main-container">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default App;
