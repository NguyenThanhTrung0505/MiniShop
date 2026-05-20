import { NavLink } from "react-bootstrap";
import "./Navbar.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
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
const Navbar = (props) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");
    const handleLogout = () => {
        localStorage.clear;
        // window.location.reload();
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-content-top">
                    {token ? (
                        <Link className="navbar-brand" to="/">
                            Xin chào
                            <br />
                            {username}
                        </Link>
                    ) : (
                        <Link className="navbar-brand" to="/">
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
                                <Link to="/shopping-cart" className="nav-link">
                                    <LiaShoppingCartSolid /> Giỏ hàng
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-content-bottom">
                    <ul className="navbar-nav mr-auto flex-row">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                <FaHome></FaHome>Trang chủ
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span>
                                <ImGift />
                            </span>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Sản phẩm"
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
            </nav>
        </>
    );
};
export default Navbar;
