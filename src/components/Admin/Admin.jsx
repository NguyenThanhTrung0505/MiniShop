import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./Admin.scss";
import { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";
import { PiNotePencilBold } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Image from "react-bootstrap/Image";
const Admin = (props) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
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
        formData.append("image", image);
        try {
            const response = await axios.post(
                "http://localhost:3000/uploads",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );
            toast.success("Upload Success");
            setName("");
            setPrice("");
            setImage(null);
        } catch (error) {
            console.log(error);
            toast.error("Upload fail");
        }
    };
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const handleAllProduct = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/products",
                );
                setProducts(response.data.data);
                toast.success("Success get all products");
            } catch (error) {
                console.error(error);
                toast.error("Do not get all products");
            }
        };
        handleAllProduct();
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
        } catch (err) {
            toast.error(err.response?.data?.error || "Không thể xóa!");
        }
    };
    return (
        <>
            <Form className="admin-create-product mt-4" onSubmit={handleSubmit}>
                <Row>
                    <Form.Label column lg={2}>
                        Name
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Name"
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
                                        <span>
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
