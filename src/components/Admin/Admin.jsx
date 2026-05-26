import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./Admin.scss";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";
import { PiNotePencilBold } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
const Admin = (props) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (name.length === 0) {
            toast.error("You have not enter name");
            return;
        }
        if (price.length === 0) {
            toast.error("You have not enter price");
            return;
        }
        if (!image) {
            toast.error("You have not upload file");
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("image", image);
        try {
            const response = await axios.post(
                "http://localhost:3000/products",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            toast.success("Upload Success");
            setName("");
            setPrice("");
            setImage(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
            handleAllProduct();
        } catch (err) {
            toast.error(err.response?.data?.error || "Không thể thêm!");
        }
    };
    const [products, setProducts] = useState([]);
    const handleAllProduct = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            setProducts(response.data.data.data);
        } catch (error) {
            console.error(error);
            toast.error("Don't fetch all products");
        }
    };
    useEffect(() => {
        try {
            // handleAllProduct();
            toast.success("Success get all products");
        } catch (err) {
            console.log(err);
            toast.error("Don't get all products");
        }
    }, []);
    const handleEditProduct = () => {};
    const handledDeleteProduct = async (id) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.delete(
                `http://localhost:3000/products/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            toast.success(response.data.message);
            handleAllProduct();
        } catch (err) {
            toast.error(err.response?.data?.error || "Không thể xóa!");
        }
    };
    const navigate = useNavigate();
    const handleGoToHome = () => {
        navigate("/home");
    };
    const handleGoToEditProduct = (id) => {
        navigate(`/admin/edit-product/${id}`);
    };
    return (
        <>
            <div className="nav-back-home">
                <button onClick={handleGoToHome}>
                    <div>
                        <IoArrowBackOutline />
                    </div>
                    <span>Back home 🏠</span>
                </button>
            </div>
            <Form className="admin-create-product mt-4" onSubmit={handleSubmit}>
                <Row>
                    <Form.Label column lg={2}>
                        Name
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                        Price
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Form.Label column lg={2}>
                        Upload image
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="file"
                            ref={fileInputRef}
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto" className="my-1">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
            <Button type="button" onClick={() => handleAllProduct()}>
                Show All Products
            </Button>
            <div className="admin-table-products col-11">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((e) => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    <td style={{ textAlign: "center" }}>
                                        <Image
                                            src={`http://localhost:3000/uploads/${e.image}`}
                                            rounded
                                        />
                                    </td>
                                    <td className="admin-active">
                                        <span
                                            onClick={() =>
                                                handleGoToEditProduct(e.id)
                                            }
                                        >
                                            <PiNotePencilBold className="admin-active-edit" />
                                        </span>
                                        <span
                                            onClick={() =>
                                                handledDeleteProduct(e.id)
                                            }
                                        >
                                            <MdDelete className="admin-active-delete" />
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
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
        </>
    );
};
export default Admin;
