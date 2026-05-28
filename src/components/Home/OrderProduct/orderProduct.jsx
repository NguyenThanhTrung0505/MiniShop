import "./orderProduct.scss";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { MdPayment } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import Card from "react-bootstrap/Card";
const orderProduct = (props) => {
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
                        <div className="transport-base">
                            <Form.Check
                                type="radio"
                                name="transport_method"
                                aria-label="radio 1"
                                className="method-transport-radio"
                            />
                            <div className="transport-base-text">
                                <p>
                                    Giao hàng tiêu chuẩn
                                    <p>
                                        Dự kiến giao hàng trong 3-5 ngày làm
                                        việc
                                    </p>
                                </p>
                                <p>30.000d</p>
                            </div>
                        </div>
                        <div className="transport-flash">
                            <Form.Check
                                type="radio"
                                name="transport_method"
                                aria-label="radio 1"
                                className="method-flash-radio"
                            />
                            <div className="transport-flash-text">
                                <p>
                                    Giao hàng hỏa tốc
                                    <p>Dự kiến giao hàng trong 48 giờ</p>
                                </p>
                                <p>70.000d</p>
                            </div>
                        </div>
                    </div>
                    <div className="method-payment">
                        <h4>Phương thức thanh toán</h4>
                        <ListGroup>
                            <ListGroup.Item>
                                <Form.Check
                                    type="radio"
                                    name="payment_method"
                                    aria-label="radio 1"
                                    className="method-payment-radio"
                                />
                                <div className="method-payment-text">
                                    <TbTruckDelivery />
                                    Thanh toán khi nhận hàng
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Form.Check
                                    type="radio"
                                    name="payment_method"
                                    aria-label="radio 1"
                                    className="method-payment-radio"
                                />
                                <div className="method-payment-text">
                                    <BsBank />
                                    Chuyển khoản ngân hàng
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Form.Check
                                    type="radio"
                                    name="payment_method"
                                    aria-label="radio 1"
                                    className="method-payment-radio"
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
                            <Card.Title>Tóm tắt đơn hàng</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Card Subtitle
                            </Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default orderProduct;
