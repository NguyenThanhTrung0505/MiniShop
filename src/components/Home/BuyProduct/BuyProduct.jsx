import "bootstrap";
import { useState } from "react";
import "react-bootstrap";
import { Form, Button, Row, Col } from "react-bootstrap";
const BuyProduct = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [delivery, setdelivery] = useState("Giao hành thông thường");
    const [checkbox, setCheckBox] = useState(false);
    const handleOrder = () => {};
    return (
        <>
            <form className="container mt-4 p-4">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            // onChange={setEmail}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Địa chỉ</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                    />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Thành phố/Tỉnh</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputCity"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">
                            Phương thức giao hàng
                        </label>
                        <select
                            id="inputState"
                            className="form-control"
                            defaultValue="Giao hàng thông thường"
                        >
                            <option>Giao hàng nhanh</option>
                            <option>Giao hàng thông thường</option>
                            <option>Giao hàng tiết kiệm</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => handleOrder()}
                >
                    Đặt hàng
                </button>
            </form>
        </>
    );
};
export default BuyProduct;
