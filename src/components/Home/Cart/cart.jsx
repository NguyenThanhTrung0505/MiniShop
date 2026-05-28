import "./cart.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import testPicture from "../../../assets/sg-11134201-7rblg-llyqam7r7ymddd.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { formatVND } from "../../../utils/formatters";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const cartShopping = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [productsPrice, setProductsPrice] = useState([]);
    const [tempPrice, setTempPrice] = useState(0);
    const [shippingFree, setShippingFree] = useState(0);
    const navigate = useNavigate();
    const typingTimeoutRef = useRef({});
    const fetchProductsInCart = async () => {
        try {
            const userId = localStorage.getItem("userId");
            const token = localStorage.getItem("token");
            const response = await axios.get(
                `http://localhost:3000/home/cart/products?userId=${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            setProducts(response.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    const handleChangeQuantity = (productId, newValue) => {
        let numValue = newValue;
        if (newValue !== "") {
            numValue = parseInt(newValue, 10);
            if (isNaN(numValue) || numValue < 1) numValue = 1;
        }
        setProducts((prevProducts) =>
            prevProducts.map((p) =>
                p.id === productId ? { ...p, quantity: numValue } : p,
            ),
        );
        if (numValue === "") return;
        if (typingTimeoutRef.current[productId]) {
            clearTimeout(typingTimeoutRef.current[productId]);
        }
        typingTimeoutRef.current[productId] = setTimeout(async () => {
            try {
                const token = localStorage.getItem("token");
                const userId = localStorage.getItem("userId");
                await axios.patch(
                    `http://localhost:3000/home/cart/update-product-quantity/${productId}`,
                    { userId, quantity: numValue },
                    { headers: { Authorization: `Bearer ${token}` } },
                );
            } catch (error) {
                console.error("Lỗi cập nhật số lượng:", error);
            }
        }, 500);
    };
    const handleBlur = (productId, currentValue) => {
        if (currentValue === "" || currentValue < 1) {
            handleChangeQuantity(productId, 1);
        }
    };
    const handleChooseProducts = (price, quantity) => {
        setTempPrice(parseInt(price * quantity) * 1000 + tempPrice);
        setShippingFree(shippingFree + 10000 * parseInt(quantity));
    };

    const handleDechooseProducts = (price, quantity) => {
        setTempPrice(tempPrice - parseInt(price * quantity) * 1000);
        setShippingFree(shippingFree - 10000 * parseInt(quantity));
    };
    const handleGoToHome = () => {
        navigate("/home");
    };
    const handleGoToOrder = () => {
        navigate("/home/order");
    };
    useEffect(() => {
        fetchProductsInCart();
        AOS.init({ duration: 1000, offset: 0 });
    }, []);
    if (products.length === 0) {
        <div>Loading data ... </div>;
    }
    return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="number-product">
                    <p>Giỏ hàng</p>
                    <Form.Text>({products.length} sản phẩm)</Form.Text>
                </div>
                <div className="cart-content">
                    <div className="products-content">
                        {products.map((p) => (
                            <div
                                className="product-card"
                                key={p.id}
                                data-aos="fade-up"
                            >
                                <div className="choose-product">
                                    <Form.Check
                                        aria-label="option 1"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? handleChooseProducts(
                                                      p.price,
                                                      p.quantity,
                                                  )
                                                : handleDechooseProducts(
                                                      p.price,
                                                      p.quantity,
                                                  )
                                        }
                                    />
                                </div>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={`http://localhost:3000/uploads/${p.image}`}
                                    />
                                    <Card.Body>
                                        <Card.Text>
                                            {p.name}
                                            <span
                                                className="detail-product"
                                                style={{ display: "block" }}
                                            >
                                                Some quick example text to
                                            </span>
                                        </Card.Text>
                                        <Card.Title>
                                            <p>{formatVND(p.price)}</p>
                                            <div className="quantity">
                                                <Button
                                                    onClick={() =>
                                                        handleChangeQuantity(
                                                            p.id,
                                                            p.quantity - 1,
                                                        )
                                                    }
                                                    variant="outline-secondary"
                                                >
                                                    -
                                                </Button>
                                                <input
                                                    type="text"
                                                    value={p.quantity}
                                                    onChange={(e) =>
                                                        handleChangeQuantity(
                                                            p.id,
                                                            e.target.value,
                                                        )
                                                    }
                                                    onBlur={() =>
                                                        handleBlur(
                                                            p.id,
                                                            p.quantity,
                                                        )
                                                    }
                                                />
                                                <Button
                                                    onClick={() =>
                                                        handleChangeQuantity(
                                                            p.id,
                                                            p.quantity + 1,
                                                        )
                                                    }
                                                    variant="outline-success"
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <div className="payment">
                        <Card data-aos="fade-up">
                            <Card.Header>
                                <p
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "large",
                                    }}
                                >
                                    Tóm tắt đơn hàng
                                </p>
                                <div className="payment-content-top">
                                    <div className="payment-content-letft-top">
                                        <p>Tạm tính</p>
                                        <p>Phí vận chuyển</p>
                                        <p>Thuế</p>
                                    </div>
                                    <div className="payment-content-right-top">
                                        <p>{formatVND(tempPrice)}</p>
                                        <p>{formatVND(shippingFree)}</p>
                                        <p>Đã bao gồm</p>
                                    </div>
                                </div>
                            </Card.Header>

                            <Card.Body>
                                <div className="payment-content-bottom">
                                    <div className="payment-content-letft-bottom">
                                        <p>Tổng cộng</p>
                                    </div>
                                    <div className="payment-content-right-bottom">
                                        <p>
                                            {formatVND(
                                                tempPrice + shippingFree,
                                            )}
                                        </p>
                                        <p>Đã bao gồm VAT</p>
                                    </div>
                                </div>
                                <Button
                                    className="go-to-payment"
                                    onClick={() => handleGoToOrder()}
                                >
                                    Thanh toán <FaArrowRight />
                                </Button>
                                <Button
                                    className="go-to-shopping"
                                    onClick={() => handleGoToHome()}
                                >
                                    <FaArrowLeft /> Tiếp tục mua sắm
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cartShopping;
