export const formatVND = (price) => {
    if (!price) return "0đ";

    // Tạo một biến lưu giá trị an toàn
    let safePrice = price;

    // Nếu dữ liệu từ DB trả về là chuỗi (ví dụ: "150.000")
    if (typeof price === "string") {
        // Dùng replace xóa toàn bộ dấu chấm đi, biến "150.000" thành "150000"
        safePrice = price.replace(/\./g, "");
    }

    // Bây giờ ép kiểu Number(150000) sẽ chuẩn xác
    return Number(safePrice).toLocaleString("vi-VN") + "đ";
};
