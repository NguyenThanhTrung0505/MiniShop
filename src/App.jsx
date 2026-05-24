import { useState, createContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Home from "./components/Home/Home";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    // const [cart, setCart] = useState([]);
    // const addToCart = (product, quantity) => {
    //     const existingItem = cart.find((item) => item.id === product[0].id);
    //     if (existingItem && existingItem.product !== undefined) {
    //         setCart(
    //             cart.map((item) =>
    //                 item.id === product[0].id
    //                     ? { ...item, quantity: item.quantity + quantity }
    //                     : item,
    //             ),
    //         );
    //     } else {
    //         setCart([
    //             ...cart,
    //             {
    //                 id: product[0].id,
    //                 quantity: quantity,
    //                 price: product[0].price,
    //                 name: product[0].name,
    //                 image: product[0].image,
    //             },
    //         ]);
    //     }
    // };
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
