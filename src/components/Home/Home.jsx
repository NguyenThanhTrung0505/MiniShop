import Content from "./Content/Content";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import { Outlet } from "react-router-dom";
const countProductPerson = createContext(null);
const Home = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/products?page=3&limit=5`,
                );
                setProducts(response.data.data);
            } catch (error) {
                console.error("Lỗi lấy dữ liệu:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAllProducts();
    }, []);
    if (loading) {
        return (
            <div className="home-loader">
                <div className="wrapper">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                </div>
            </div>
        );
    }
    return (
        <div className="home">
            <div>
                <Content products={products.data} />
            </div>
        </div>
    );
};

export default Home;
