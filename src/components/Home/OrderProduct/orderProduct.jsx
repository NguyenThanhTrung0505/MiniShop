import "./orderProduct.scss";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import testPicture from "../../../assets/sg-11134201-7rblg-llyqam7r7ymddd.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import { MdPayment } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { MdLock } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatVND } from "../../../utils/formatters";

const orderProduct = (props) => {
    const [products, setProducts] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [transportMethod, setTransportMethod] = useState("base");
    const productsSession = JSON.parse(sessionStorage.getItem("productsId"));
    const freeTransportBase = 30000;
    const freeTransportFlash = 70000;
    const fetchProducts = async () => {
        const userId = localStorage.getItem("userId");
        try {
            const promises = productsSession.map((item) =>
                axios.get(
                    `http://localhost:3000/order/products-by-id?userId=${userId}&productId=${item.id}`,
                ),
            );
            const response = await Promise.all(promises);
            const fetchedProducts = response.map(
                (response) => response.data.data,
            );
            setProducts(fetchedProducts);
        } catch (error) {
            console.log(error);
        }
    };
    const totalPrice = products.reduce((total, p) => {
        const price = p[0].price || 0;
        const quantity = p[0].quantity || 0;
        return total + price * quantity * 1000;
    }, 0);
    const handleRadioChangePayment = (e) => {
        setPaymentMethod(e.target.value);
    };
    const handleRadioChangeTransport = (e) => {
        setTransportMethod(e.target.value);
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    if (!products) {
        <div>Loading data ...</div>;
    }
    return (
        <div className="order-page">
            <div className="order-page-content">
                <div className="order-page-content-left">
                    <div className="infomation-shipping">
                        <h4>Thông tin giao hàng</h4>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nguyễn Văn A"
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Group
                                className="mb-3"
                                controlId="formGridAddress1"
                            >
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control placeholder="Số nhà, Tên đường, Phường/Xã" />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Tỉnh/Thành phố</Form.Label>
                                    <Form.Select defaultValue="Chọn Tỉnh/Thành phố">
                                        <option>Chọn Tỉnh/Thành phố</option>
                                        <option>Tây Ninh</option>
                                        <option>Đồng nai</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="090 123 4567"
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="email@example.com"
                                />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="method-transport">
                        <h4>Phương thức vận chuyển</h4>
                        <div
                            className={`transport-base ${transportMethod === "base" ? "active" : ""}`}
                            onClick={() => setTransportMethod("base")}
                        >
                            <Form.Check
                                type="radio"
                                name="transport_method"
                                aria-label="radio 1"
                                className="method-transport-radio"
                                checked={transportMethod === "base"}
                                value="base"
                                onChange={handleRadioChangeTransport}
                            />
                            <div className="transport-base-text">
                                <div>
                                    Giao hàng tiêu chuẩn
                                    <p>
                                        Dự kiến giao hàng trong 3-5 ngày làm
                                        việc
                                    </p>
                                </div>
                                <p>{formatVND(freeTransportBase)}</p>
                            </div>
                        </div>
                        <div
                            className={`transport-flash ${transportMethod === "flash" ? "active" : ""}`}
                            onClick={() => setTransportMethod("flash")}
                        >
                            <Form.Check
                                type="radio"
                                name="transport_method"
                                aria-label="radio 1"
                                className="method-flash-radio"
                                checked={transportMethod === "flash"}
                                value="flash"
                                onChange={handleRadioChangeTransport}
                            />
                            <div className="transport-flash-text">
                                <div>
                                    Giao hàng hỏa tốc
                                    <p>Dự kiến giao hàng trong 48 giờ</p>
                                </div>
                                <p>{formatVND(freeTransportFlash)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="method-payment">
                        <h4>Phương thức thanh toán</h4>
                        <ListGroup>
                            <ListGroup.Item
                                onClick={() => setPaymentMethod("cod")}
                            >
                                <Form.Check
                                    type="radio"
                                    name="payment_method"
                                    aria-label="radio 1"
                                    className="method-payment-radio"
                                    value="cod"
                                    checked={paymentMethod === "cod"}
                                    onChange={handleRadioChangePayment}
                                />
                                <div className="method-payment-text">
                                    <TbTruckDelivery />
                                    Thanh toán khi nhận hàng
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                                onClick={() => setPaymentMethod("banking")}
                            >
                                <Form.Check
                                    type="radio"
                                    name="payment_method"
                                    aria-label="radio 1"
                                    className="method-payment-radio"
                                    value="banking"
                                    checked={paymentMethod === "banking"}
                                    onChange={handleRadioChangePayment}
                                />
                                <div className="method-payment-text">
                                    <BsBank />
                                    Chuyển khoản ngân hàng
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                                onClick={() => setPaymentMethod("card")}
                            >
                                <Form.Check
                                    type="radio"
                                    name="payment_method"
                                    aria-label="radio 1"
                                    className="method-payment-radio"
                                    value="card"
                                    checked={paymentMethod === "card"}
                                    onChange={handleRadioChangePayment}
                                />
                                <div className="method-payment-text">
                                    <MdPayment />
                                    Thẻ tín dụng/ Thẻ ghi nợ
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
                <div className="order-page-content-right">
                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-4">
                                Tóm tắt đơn hàng
                            </Card.Title>
                            {products.map((p) => (
                                <Row key={p[0].id} className="info-products">
                                    <Col xs={6} md={3}>
                                        <Image
                                            src={`http://localhost:3000/uploads/${p[0].image}`}
                                            // src={testPicture}
                                            rounded
                                        />
                                    </Col>
                                    <Col xs={8} md={5}>
                                        <p>{p[0].name}</p>
                                    </Col>
                                    <Col
                                        xs={4}
                                        md={4}
                                        style={{ textAlign: "right" }}
                                    >
                                        <p>{formatVND(p[0].price)}</p>
                                        <div className="quantity">
                                            x{p[0].quantity}
                                        </div>
                                    </Col>
                                </Row>
                            ))}
                            <hr />
                            <Row className="discount">
                                <Col sm={8} className="my-1">
                                    <Form.Label
                                        htmlFor="inlineFormInputName"
                                        visuallyHidden
                                    >
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        id="inlineFormInputName"
                                        placeholder="Mã giảm giá"
                                    />
                                </Col>
                                <Col xs="2" className="my-1">
                                    <Button type="submit">Áp dụng</Button>
                                </Col>
                            </Row>
                            <hr />
                            <Row className="price">
                                <Col xs={8} md={5}>
                                    Tạm tính
                                </Col>
                                <Col xs={10} md={7}>
                                    {formatVND(totalPrice)}
                                </Col>
                            </Row>
                            <Row className="price">
                                <Col xs={8} md={5}>
                                    Phí vận chuyển
                                </Col>
                                <Col xs={10} md={7}>
                                    {transportMethod === "base"
                                        ? formatVND(freeTransportBase)
                                        : formatVND(freeTransportFlash)}
                                </Col>
                            </Row>
                            <hr />
                            <div className="total-price">
                                <span>Tổng cộng</span>
                                <span>
                                    {" "}
                                    {transportMethod === "base"
                                        ? formatVND(
                                              freeTransportBase + totalPrice,
                                          )
                                        : formatVND(
                                              freeTransportFlash + totalPrice,
                                          )}
                                </span>
                            </div>
                            <Button
                                variant="primary"
                                // style={{ backgroundColor: "#1e40af" }}
                            >
                                {" "}
                                <MdLock className="mb-1" /> Đặt hàng
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default orderProduct;
