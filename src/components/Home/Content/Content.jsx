import { useEffect } from "react";
import "./Content.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { Value } from "sass";
import background from "../../../assets/background.png";
import { FaTruckFast } from "react-icons/fa6";
import { GiWaterRecycling } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import testPicture from "../../../assets/sg-11134201-7rblg-llyqam7r7ymddd.jpg";
import { LiaShoppingCartSolid } from "react-icons/lia";
import Image from "react-bootstrap/Image";
const Content = (props) => {
    const { listProduct, count, setCount } = props;
    const handleCountProduct = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <div className="home-container">
            <div className="home-picture">
                <Image src={background} fluid></Image>
            </div>
            <div className="home-title">
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <FaTruckFast />
                        <Card.Title>Miễn phí vận chuyển</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Chỉ với đơn từ 100k
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <GiWaterRecycling />
                        <Card.Title>Đổi trả dễ dàng</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Trong vòng 7 ngày
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <MdOutlinePayment></MdOutlinePayment>
                        <Card.Title>Thanh toán đơn giản</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Chỉ với một cái click
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <BiSupport />
                        <Card.Title>Hỗ trợ 24/7</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Luôn sẵn sàng hỗ trợ
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            <div className="home-outstanding">
                <h5 className="home-outstanding-text">Danh mục nổi bật ⭐</h5>
                <div className="home-outstanding-card">
                    <div className="card" id="card1">
                        <h5>Quần áo</h5>
                    </div>
                    <div className="card" id="card2">
                        <h5>Mỹ phẩm</h5>
                    </div>
                    <div className="card" id="card3">
                        <h5>Đồ dùng</h5>
                    </div>
                    <div className="card" id="card4">
                        <h5>Phụ kiện</h5>
                    </div>
                    <div className="card" id="card5">
                        <h5>Quà tặng</h5>
                    </div>
                    <div className="card" id="card6">
                        <h5>Văn phòng phẩm</h5>
                    </div>
                </div>
            </div>
            <div className="home-bestselling">
                <h5 className="home-bestselling-text">Sản phẩm bán chạy 🔥</h5>
                <div className="home-bestselling-card">
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="home-product">
                <h5 className="home-bestselling-text">Sản phẩm 📦</h5>
                <div className="home-bestselling-card">
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={testPicture} />
                        <Card.Body>
                            <div>
                                <Card.Title>Gấu bông</Card.Title>
                                <Card.Text>199.000đ</Card.Text>
                            </div>
                            <div className="btn-buy">
                                <Button variant="primary">
                                    <LiaShoppingCartSolid />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            {/* <div className="home-product">
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
            </div> */}
        </div>
    );
};
export default Content;
