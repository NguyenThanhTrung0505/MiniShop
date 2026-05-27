import { useEffect, useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatVND } from "../../../utils/formatters";
import AOS from "aos";
import "aos/dist/aos.css";
const Content = (props) => {
    const { products } = props;
    const navigate = useNavigate();
    const handleGoToProduct = (id) => {
        navigate(`/home/${id}`);
    };
    const handleGoToProductPage = () => {
        navigate("/home/products");
    };
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 0 });
    }, []);
    if (!products) {
        return <div>đang lấy dữ liệu ...</div>;
    }
    return (
        <div className="home-container">
            <div className="home-picture">
                <Image src={background} fluid></Image>
            </div>
            <div className="home-title" data-aos="fade-up">
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
                <h5 className="home-outstanding-text" data-aos="fade-up">
                    Danh mục nổi bật ⭐
                </h5>
                <div className="home-outstanding-card" data-aos="fade-up">
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
                <div className="home-bestselling-text">
                    <h3
                        className="home-bestselling-left-text"
                        data-aos="fade-up"
                    >
                        Sản phẩm bán chạy 🔥
                    </h3>
                    <button
                        className="learn-more"
                        onClick={() => handleGoToProductPage()}
                        data-aos="fade-up"
                    >
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Xem thêm</span>
                    </button>
                </div>

                <div className="home-bestselling-card" data-aos="fade-up">
                    <Card style={{ width: "15rem", height: "20.5rem" }}>
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
                <div className="home-bestselling-text">
                    <h3
                        className="home-bestselling-left-text"
                        data-aos="fade-up"
                    >
                        Sản phẩm 📦
                    </h3>
                    <button
                        className="learn-more"
                        onClick={() => handleGoToProductPage()}
                        data-aos="fade-up"
                    >
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Xem thêm</span>
                    </button>
                </div>
                <div className="home-bestselling-card">
                    {products.map((p) => {
                        return (
                            <div
                                className="home-product-card"
                                key={p.id}
                                onClick={() => handleGoToProduct(p.id)}
                                data-aos="fade-up"
                            >
                                <Card
                                    style={{
                                        width: "15rem",
                                        height: "20.5rem",
                                    }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={`http://localhost:3000/uploads/${p.image}`}
                                    />
                                    <Card.Body>
                                        <div>
                                            <Card.Title className="truncate-text">
                                                {p.name}
                                            </Card.Title>
                                            <Card.Text>
                                                {formatVND(p.price)}
                                            </Card.Text>
                                        </div>
                                        <div className="btn-buy">
                                            <Button variant="primary">
                                                <LiaShoppingCartSolid />
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Content;
