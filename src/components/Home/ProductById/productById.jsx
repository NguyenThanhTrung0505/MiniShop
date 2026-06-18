import "./productById.scss";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import testPicture from "../../../assets/sg-11134201-7rblg-llyqam7r7ymddd.jpg";
import { FormGroup, FormLabel, FormText } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { formatVND } from "../../../utils/formatters";
const productById = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState("");
    const { id } = useParams();
    const fetchProductById = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/products/${id}`,
            );
            setProduct(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleChangeQuantity = (v) => {
        if (v === "") {
            setQuantity("");
            return;
        }
        const numValue = v === "" ? 1 : parseInt(v, 10);
        setQuantity(numValue);
    };
    const handleAddToCart = async () => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        try {
            const response = await axios.post(
                "http://localhost:3000/home/cart",
                { userId, id, quantity },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            toast.success("Đã thêm vào giỏ hàng");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProductById();
    }, []);
    if (!product || product.length === 0) {
        return <div>Đang lấy dữ liệu ... </div>;
    }
    return (
        <div className="page-product-by-id">
            <div className="product-container">
                <div className="product">
                    <Container className="col-6">
                        <Row>
                            <Col xs={12} md={12}>
                                <Image
                                    src={`http://localhost:3000/uploads/${product.image}`}
                                    thumbnail
                                    className="w-100"
                                />
                            </Col>
                        </Row>
                    </Container>
                    <Form>
                        <FormGroup className="product-intro">
                            <h4>{product.name}</h4>
                            <h4 className="product-price">
                                {formatVND(product.price)}
                            </h4>
                            <FormLabel>Vận chuyển</FormLabel>
                            <FormText>Từ 7-14 ngày</FormText>
                        </FormGroup>
                        <FormGroup className="product-quantity">
                            <Col sm={12}>
                                <Form.Label as="legend" column sm={2}>
                                    Số lượng
                                </Form.Label>
                                <div className="up-down-quantity">
                                    <Button
                                        onClick={() => {
                                            setQuantity((prev) =>
                                                prev > 1 ? prev - 1 : 1,
                                            );
                                        }}
                                        variant="outline-secondary"
                                    >
                                        -
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        value={quantity}
                                        onChange={(e) =>
                                            handleChangeQuantity(e.target.value)
                                        }
                                        onBlur={() => {
                                            if (
                                                quantity === "" ||
                                                quantity < 1
                                            ) {
                                                setQuantity(1);
                                            }
                                        }}
                                    />
                                    <Button
                                        onClick={() =>
                                            setQuantity((prev) => prev + 1)
                                        }
                                        variant="outline-success"
                                    >
                                        +
                                    </Button>
                                </div>
                            </Col>
                        </FormGroup>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 4, offset: 0 }}>
                                <Button
                                    type="button"
                                    id="btn-add-shopping-cart"
                                    onClick={() => handleAddToCart()}
                                >
                                    Thêm vào giỏ hàng
                                </Button>
                            </Col>
                            <Col sm={{ span: 4, offset: 0 }}>
                                <Button type="button" id="btn-buy-product">
                                    Mua ngay
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};
export default productById;
