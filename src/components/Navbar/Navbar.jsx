import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navbar.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlineSell } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { ImGift } from "react-icons/im";
import axios from "axios";
import { useEffect, useState } from "react";
import testPricturte from "../../assets/sg-11134201-7rblg-llyqam7r7ymddd.jpg";
const Navbar = (props) => {
    const [totalProducts, setTotalProducts] = useState(0);
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");
    const [products, setProducts] = useState([]);
    const [hideSearch, setHideSearch] = useState(true);
    const navigate = useNavigate();
    const fetchTotalProducts = async () => {
        const userId = localStorage.getItem("userId");
        try {
            const response = await axios.get(
                "http://localhost:3000/home/cart/total-products",
                {
                    params: {
                        userId: userId,
                    },

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            setTotalProducts(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchSearchProducts = async (e) => {
        try {
            const response = await axios.get(
                `http://localhost:3000/products/name?page=1&limit=10&search=${e}`,
            );
            setProducts(response.data.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleInput = (e) => {
        setTimeout(() => fetchSearchProducts(e), 1000);
        setHideSearch(false);
    };
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleOnclickSearch(e.target.value);
        }
    };
    const handleOnclickSearch = (value) => {
        setHideSearch(true);
        navigate("./home/products", { state: value });
    };
    const handleLogout = () => {
        localStorage.clear();
        // window.location.reload();
    };
    const handleHileSearch = () => {
        setTimeout(() => {
            setHideSearch(true);
        }, 100);
    };
    useEffect(() => {
        fetchTotalProducts();
    }, [totalProducts]);
    if (totalProducts === null) {
        return <div>Đang lấy dữ liệu ...</div>;
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-content-top">
                    {token ? (
                        <Link className="navbar-brand" to="/home">
                            Xin chào
                            <br />
                            {username}
                        </Link>
                    ) : (
                        <Link className="navbar-brand" to="/home">
                            {/* <img src={logo} alt="logo" /> */}
                            CatTV
                            <br />
                            Mua sắm thả ga
                        </Link>
                    )}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <div className="navbar-seacrh">
                            <span className="icon">
                                <CiSearch />
                            </span>
                            <input
                                placeholder="Hôm nay bạn muốn mua gì"
                                type="search"
                                className="input"
                                onChange={(e) => handleInput(e.target.value)}
                                onBlur={() => handleHileSearch()}
                                onClick={() => setHideSearch(false)}
                                onKeyDown={(e) => handleEnter(e)}
                            />
                        </div>
                    </div>
                    <div
                        className="collapse navbar-collapse"
                        id="navbar-top-right"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active" id="nav-link-login">
                                {token ? (
                                    <Link
                                        to="/login"
                                        className="nav-link"
                                        onClick={handleLogout}
                                    >
                                        <IoPersonOutline /> Đăng xuất
                                    </Link>
                                ) : (
                                    <Link to="/login" className="nav-link">
                                        <IoPersonOutline /> Đăng nhập
                                    </Link>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link to="/home/cart" className="nav-link">
                                    <div className="cart-icon-wrapper">
                                        <LiaShoppingCartSolid className="icon-cart" />
                                        <span className="cart-badge">
                                            {totalProducts}
                                        </span>
                                    </div>
                                    <span className="cart-text">Giỏ hàng</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-content-bottom">
                    <ul className="navbar-nav mr-auto flex-row">
                        <li className="nav-item active">
                            <Link to="/home" className="nav-link">
                                <FaHome></FaHome>Trang chủ
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={
                                    <span className="dropdown-title-custom">
                                        <ImGift />
                                        <span>Sản phẩm</span>
                                    </span>
                                }
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li className="nav-item active">
                            <Link to="/order" className="nav-link">
                                <TiDocumentText />
                                Đơn hàng
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/sell" className="nav-link">
                                <MdOutlineSell />
                                Mã giảm giá
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/hot-search" className="nav-link">
                                <BsFire></BsFire>
                                Thịnh hành
                            </Link>
                        </li>
                        {token && role === "admin" && (
                            <li className="nav-item">
                                <Link
                                    to="/admin"
                                    className="nav-link d-lg-flex d-none"
                                >
                                    <RiAdminFill />
                                    Admin
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={hideSearch ? "d-none" : "products-search"}>
                    <Container>
                        {products?.length === 0 || !products ? (
                            <p>Không tìm thấy sản phẩm</p>
                        ) : (
                            products.map((v) => (
                                <p
                                    key={v.id}
                                    onMouseDown={(e) =>
                                        handleOnclickSearch(v.name)
                                    }
                                >
                                    {v.name}
                                </p>
                            ))
                        )}
                    </Container>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
