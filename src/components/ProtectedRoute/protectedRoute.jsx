import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requireAdmin = false }) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
        return <Navigate to="/login" replace />;
    }
    if (requireAdmin && role !== "admin") {
        alert("Bạn không có quyền truy cập vào trang này!");
        return <Navigate to="/home" replace />;
    }
    return children;
};

export default ProtectedRoute;
