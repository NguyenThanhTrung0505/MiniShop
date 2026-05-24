import "./cart.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import testPicture from "../../../assets/sg-11134201-7rblg-llyqam7r7ymddd.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const cartShopping = () => {
    const [quality, setQuality] = useState(1);
    const navigate = useNavigate();
    const handleChangeQuality = (v) => {
        if (v === "") {
            setQuality("");
            return;
        }
        const numValue = v === "" ? 1 : parseInt(v, 10);
        setQuality(numValue);
    };
    const handleGoToHome = () => {
        navigate("/home");
    };
    return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="number-product">
                    <p>Giỏ hàng</p>
                    <Form.Text>(2 sản phẩm)</Form.Text>
                </div>
                <div className="cart-content">
                    <div className="product">
                        <div className="choose-product">
                            <Form.Check aria-label="option 1" />
                        </div>
                        <Card>
                            <Card.Img variant="top" src={testPicture} />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                    <span
                                        className="detail-product"
                                        style={{ display: "block" }}
                                    >
                                        Some quick example text to
                                    </span>
                                </Card.Text>
                                <Card.Title>
                                    <p>199.999 $</p>
                                    <div className="quality">
                                        <Button
                                            onClick={() => {
                                                setQuality((prev) =>
                                                    prev > 1 ? prev - 1 : 1,
                                                );
                                            }}
                                            variant="outline-secondary"
                                        >
                                            -
                                        </Button>
                                        <input
                                            type="text"
                                            value={quality}
                                            onChange={(e) =>
                                                handleChangeQuality(
                                                    e.target.value,
                                                )
                                            }
                                            onBlur={() => {
                                                if (
                                                    quality === "" ||
                                                    quality < 1
                                                ) {
                                                    setQuality(1);
                                                }
                                            }}
                                        />
                                        <Button
                                            onClick={() =>
                                                setQuality((prev) => prev + 1)
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
                    <div className="payment">
                        <Card>
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
                                        <p>425.000</p>
                                        <p>30.000</p>
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
                                        <p>425.000</p>
                                        <p>Đã bao gồm VAT</p>
                                    </div>
                                </div>
                                <Button className="go-to-payment">
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
