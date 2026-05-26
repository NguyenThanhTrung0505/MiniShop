import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* Cột 1: Giới thiệu thương hiệu */}
                    <div className="footer-col brand-col">
                        <h2 className="footer-logo">
                            Mini<span>Shop</span>
                        </h2>
                        <p className="footer-desc">
                            Dự án website bán hàng Full-Stack hiện đại, tối ưu
                            hóa giao diện người dùng và hiệu năng xử lý dữ liệu
                            hệ thống.
                        </p>
                    </div>

                    {/* Cột 2: Điều hướng nhanh */}
                    <div className="footer-col links-col">
                        <h3>Khám Phá</h3>
                        <ul>
                            <li>
                                <a href="/">Trang chủ</a>
                            </li>
                            <li>
                                <a href="/products">Sản phẩm</a>
                            </li>
                            <li>
                                <a href="/cart">Giỏ hàng</a>
                            </li>
                            <li>
                                <a href="/orders">Đơn hàng</a>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 3: Kết nối cá nhân */}
                    <div className="footer-col social-col">
                        <h3>Kết Nối Công Nghệ</h3>
                        <p>
                            Theo dõi tiến độ dự án, mã nguồn và kết nối với tôi
                            qua các nền tảng:
                        </p>
                        <div className="social-icons">
                            <a
                                href="https://github.com/NguyenThanhTrung0505/MiniShop.git"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-github"
                                title="GitHub"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                >
                                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-facebook"
                                title="Facebook"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                >
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                                </svg>
                            </a>
                            <a
                                href="https://discord.com"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-discord"
                                title="Discord"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                >
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.093 13.093 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bản quyền và Tag tác giả */}
                <div className="footer-bottom">
                    <p>
                        &copy; {new Date().getFullYear()} MiniShop. Tất cả các
                        quyền được bảo lưu.
                    </p>
                    <p className="developer-tag">
                        Developed with ❤️ by <span>Nguyễn Thành Trung</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
