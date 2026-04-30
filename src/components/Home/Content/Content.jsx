import { useEffect } from "react";
import "./Content.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { Value } from "sass";
const Content = (props) => {
    const { listProduct, count, setCount } = props;
    const handleCountProduct = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <div className="home-content">
            {listProduct.map((value) => (
                <div key={value.id}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{value.Name}</Card.Title>
                            <Card.Text>{value.Price}</Card.Text>
                            <NavLink to="/buyproduct" className="nav-link">
                                <Button variant="primary">Mua ngay</Button>
                            </NavLink>
                            <br></br>
                            <Button
                                variant="primary"
                                onClick={() => handleCountProduct()}
                            >
                                Thêm vào giỏ hàng
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};
export default Content;
