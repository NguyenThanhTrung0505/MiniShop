import "./products.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import testPicture from "../../../assets/sg-11134201-7rblg-llyqam7r7ymddd.jpg";
import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import { formatVND } from "../../../utils/formatters";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";

const getAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/products?page=${page}&limit=10&search=${search}`,
            );
            setTotalPages(response.data.data.pagination.totalPages);
            setPage(response.data.data.pagination.currentPage);
            setProducts(response.data.data.data);
        } catch (error) {
            console.log("Không lấy được trang", error);
        }
    };
    const handleGoToProduct = (id) => {
        navigate(`/home/${id}`);
    };
    useEffect(() => {
        fetchProducts();
    }, [page]);
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: "ease-in-sine",
            delay: 100,
        });
    }, []);
    if (!products) {
        <div>Loading data ...</div>;
    }
    return (
        <div className="products-container col-12 d-flex gap-5 p-5 ">
            <div className="left-content col-2"></div>
            <div className="right-content col-9 p-4">
                {products.map((p) => (
                    <Card
                        style={{ width: "12rem" }}
                        key={p.id}
                        onClick={() => handleGoToProduct(p.id)}
                        data-aos="fade-up"
                    >
                        <Card.Img
                            variant="top"
                            src={`http://localhost:3000/uploads/${p.image}`}
                        />
                        <Card.Body>
                            <Card.Title className="truncate-text">
                                {p.name}
                            </Card.Title>
                            <Card.Text>{formatVND(p.price)}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
                <div className="pagination">
                    <Pagination>
                        <Pagination.First
                            onClick={() => {
                                if (page > 5) {
                                    setPage(page - 5);
                                }
                            }}
                        />
                        <Pagination.Prev
                            onClick={() => {
                                if (page > 1) {
                                    setPage(page - 1);
                                }
                            }}
                        />
                        <Pagination.Item className="custom-page-item">
                            {page}
                        </Pagination.Item>
                        <Pagination.Item onClick={() => setPage(page + 1)}>
                            {page + 1}
                        </Pagination.Item>
                        <Pagination.Item onClick={() => setPage(page + 2)}>
                            {page + 2}
                        </Pagination.Item>
                        <Pagination.Item onClick={() => setPage(page + 3)}>
                            {page + 3}
                        </Pagination.Item>
                        <Pagination.Item onClick={() => setPage(page + 4)}>
                            {page + 4}
                        </Pagination.Item>
                        <Pagination.Next
                            onClick={() => {
                                if (page < totalPages) {
                                    setPage(page + 1);
                                }
                            }}
                        />
                        <Pagination.Last
                            onClick={() => {
                                if (page + 5 < totalPages) {
                                    setPage(page + 5);
                                }
                            }}
                        />
                    </Pagination>
                </div>
            </div>
        </div>
    );
};
export default getAllProducts;
