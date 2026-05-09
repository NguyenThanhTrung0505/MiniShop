import "./register.scss";
const Register = () => {
    return (
        <div className="register-container">
            <form className="form">
                <p className="title">Đăng kí tài khoản </p>
                <p className="message">
                    Đăng kí ngay để có thể sử dụng tiện lợi.{" "}
                </p>
                <div className="flex">
                    <label>
                        <input
                            required=""
                            placeholder=""
                            type="text"
                            className="input"
                        />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input
                            required=""
                            placeholder=""
                            type="text"
                            className="input"
                        />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input
                        required=""
                        placeholder=""
                        type="email"
                        className="input"
                    />
                    <span>Email</span>
                </label>

                <label>
                    <input
                        required=""
                        placeholder=""
                        type="password"
                        className="input"
                    />
                    <span>Password</span>
                </label>
                <label>
                    <input
                        required=""
                        placeholder=""
                        type="password"
                        className="input"
                    />
                    <span>Confirm password</span>
                </label>
                <button className="submit">Đăng kí</button>
                <p className="signin">
                    Bạn đã có tài khoản ? <a href="/login">Đăng nhập</a>{" "}
                </p>
            </form>
        </div>
    );
};
export default Register;
