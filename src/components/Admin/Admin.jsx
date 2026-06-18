import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
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
import "aos/dist/aos.css";
import AOS from "aos";
import { formatVND } from "../../utils/formatters";
const Admin = (props) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
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
            const response = await axios.get(
                `http://localhost:3000/products?page=${page}&limit=10&search=${search}`,
            );
            setTotalPages(response.data.data.pagination.totalPages);
            setPage(response.data.data.pagination.currentPage);
            setProducts(response.data.data.data);
        } catch (error) {
            console.error(error);
            toast.error("Don't fetch all products");
        }
    };
    useEffect(() => {
        try {
            handleAllProduct();
            toast.success("Success get all products");
        } catch (err) {
            console.log(err);
            toast.error("Don't get all products");
        }
    }, [page]);
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
                        <Button type="submit">Thêm sản phẩm</Button>
                    </Col>
                </Row>
            </Form>
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
                                    <td>{formatVND(e.price)}</td>
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
                    <Pagination.Item
                        className="custom-page-item"
                        id="main-page"
                    >
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
