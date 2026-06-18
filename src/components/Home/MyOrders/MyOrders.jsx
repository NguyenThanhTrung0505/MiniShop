import "./MyOrders.scss";
import OrderList from "./OrderList/OrderList";
import Pagination from "react-bootstrap/Pagination";
const MyOrders = () => {
    return (
        <div className="my-orders-container">
            <header className="order-header">
                <h1>Đơn hàng của tôi</h1>
                <p>Quản lý và theo dõi trạng thái các đơn hàng của bạn.</p>
            </header>
            <div className="order-status">
                <div className="order-status-button">
                    <button>Tất cả</button>
                    <button>Chờ thanh toán</button>
                    <button>Đang xử lý</button>
                    <button>Đang vận chuyển</button>
                    <button>Đã giao</button>
                    <button>Đã hủy</button>
                </div>
                <div className="order-status-search">
                    <span>Q</span>
                    <input
                        type="text"
                        placeholder="Tìm theo Mã ĐH hoặc Tên SP"
                    />
                </div>
            </div>
            <div className="my-orders-content">
                <OrderList />
            </div>
            <footer className="order-footer">
                <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item disabled>{2}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </footer>
        </div>
    );
};

export default MyOrders;
