import "./editProduct.scss";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import testPicture from "../../assets/sg-11134201-7rblg-llyqam7r7ymddd.jpg";
import { useParams } from "react-router-dom";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const editProduct = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const fileRef = useRef(null);
    const handleGoToAdmin = () => {
        navigate("/admin");
    };
    const fetchProductById = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:3000/products/${id}`,
            );
            await setProduct(response.data.data);
        } catch (error) {
            console.log(error);
            toast.error("Lỗi không lấy được dữ liệu");
        }
    };
    const handleSubmitChangeProduct = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (name.length === 0) {
            toast.error("Name is null");
            return;
        }
        if (price.length === 0) {
            toast.error("Price is null");
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("image", image);
        try {
            const response = await axios.put(
                `http://localhost:3000/products/${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            toast.success("Update Success");
            setName("");
            setPrice("");
            setImage(null);
            if (fileRef.current) {
                fileRef.current.value = "";
            }
            handleGoToAdmin();
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.error || "Không thể update!");
        }
    };
    useEffect(() => {
        fetchProductById(id);
    }, []);
    useEffect(() => {
        if (product && product.length > 0) {
            setName(product[0].name);
            setPrice(product[0].price);
        }
    }, [product]);
    if (!product) {
        return <div>Đang tải dữ liệu sản phẩm...</div>;
    }

    return (
        <div className="edit-product-container">
            <div className="nav-back-admin">
                <button onClick={handleGoToAdmin}>
                    <div>
                        <IoArrowBackOutline />
                    </div>
                    <span>Back Admin ⚙️</span>
                </button>
            </div>
            <div className="edit-product-form">
                <h5 className="text-center">Sản phẩm có số thứ tự: {id}</h5>
                <Form onSubmit={handleSubmitChangeProduct}>
                    <Row>
                        <Col>
                            <Form.Label column lg={2}>
                                Name
                            </Form.Label>
                            <Form.Control
                                defaultValue={product[0].name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Label column lg={2}>
                                Price
                            </Form.Label>
                            <Form.Control
                                defaultValue={product[0].price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                type="file"
                                ref={fileRef}
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <Form.Text>File name: {product[0].image}</Form.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Image
                            src={`http://localhost:3000/uploads/${product[0].image}`}
                            rounded
                        />
                    </Row>
                    <Row>
                        <Col xs="auto" className="my-1">
                            <Button type="submit">Change</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
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

export default editProduct;
