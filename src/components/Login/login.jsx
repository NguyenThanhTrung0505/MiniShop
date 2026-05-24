import { useState } from "react";
import "./login.scss";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/login", {
                username,
                password,
            });
            const { token, role, id } = response.data.data;

            console.log(response.data.data);
            console.log("id ne: ", id);

            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("userId", id);
            localStorage.setItem("username", username);
            toast.success("Đăng nhập thành công");
            setTimeout(() => {
                window.location.href = "/home";
            }, 1500);
        } catch (error) {
            setError(error.response?.data?.message || "Đăng nhập thất bại!");
            toast.error("Tài khoản hoặc mật khẩu bị sai!");
        }
    };
    return (
        <div className="login-container">
            <div className="container">
                <div className="heading">Trang đăng nhập</div>
                <form action="" className="form" onSubmit={handleLogin}>
                    <input
                        // required=""
                        className="input"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        // required=""
                        className="input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="forgot-password">
                        <a href="#">Quên mật khẩu ?</a>
                    </span>
                    <input
                        className="login-button"
                        type="submit"
                        value="Đăng nhập"
                    />
                </form>
                <span className="agreement">
                    <a href="/register">Đăng ký tài khoản</a>
                </span>
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
            ;
        </div>
    );
};

export default Login;
