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
import ProtectedRoute from "./components/ProtectedRoute/protectedRoute.jsx";
import EditProduct from "./components/Admin/editProduct.jsx";
import ProductById from "./components/Home/ProductById/productById.jsx";
import OrderProduct from "./components/Home/OrderProduct/orderProduct.jsx";
import CartShopping from "./components/Home/Cart/cart.jsx";
import Products from "./components/Home/Products/products.jsx";
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <App />
                    </ProtectedRoute>
                }
            >
                <Route
                    path="home/:id"
                    element={
                        <ProtectedRoute>
                            <ProductById />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="home/order"
                    element={
                        <ProtectedRoute>
                            <OrderProduct />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="home/cart"
                    element={
                        <ProtectedRoute>
                            <CartShopping />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="home/products"
                    element={
                        <ProtectedRoute>
                            <Products />
                        </ProtectedRoute>
                    }
                />
                <Route path="home" element={<Home />} />
                <Route
                    path="buyproduct"
                    element={
                        <ProtectedRoute>
                            <BuyProduct />
                        </ProtectedRoute>
                    }
                />
            </Route>
            <Route
                path="/admin"
                element={
                    <ProtectedRoute requireAdmin={true}>
                        <Admin />
                    </ProtectedRoute>
                }
            ></Route>
            <Route
                path="/admin/edit-product/:id"
                element={
                    <ProtectedRoute requireAdmin={true}>
                        <EditProduct />
                    </ProtectedRoute>
                }
            ></Route>
            <Route path="*" element={<Login />} />
        </Routes>
    </BrowserRouter>,
);
