import { Cart } from "../../interface";

// Khởi tạo state từ localStorage
const initialState = JSON.parse(localStorage.getItem("cart") || "[]");

// Hàm reducer cho giỏ hàng
const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
            const existingItemIndex = state.findIndex((item: Cart) => item.id === action.payload.id);

            if (existingItemIndex === -1) {
                // Nếu chưa tồn tại, thêm sản phẩm mới vào giỏ hàng với quantity là 1
                const newProduct = { ...action.payload, quantity: 1 };
                const updatedState = [...state, newProduct];
                localStorage.setItem("cart", JSON.stringify(updatedState));
                return updatedState;
            } else {
                // Nếu đã tồn tại, tăng quantity lên 1 đơn vị
                const updatedState = [...state];
                updatedState[existingItemIndex].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(updatedState));
                return updatedState;
            }
        }

        case "UPDATE_QUANTITY": {
            // Cập nhật quantity của sản phẩm trong giỏ hàng
            const updatedState = state.map((item: Cart) => {
                if (item.id === action.payload.id) {
                    // Xử lý khi quantity nhỏ hơn 1
                    item.quantity = Math.max(Number(action.payload.value), 1);
                }
                return item;
            });
            localStorage.setItem("cart", JSON.stringify(updatedState));
            return updatedState;
        }

        case "DELETE_CART": {
            // Xử lý xóa sản phẩm trong giỏ hàng
            const updatedState = state.filter((item: Cart) => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(updatedState));
            return updatedState;
        }
        default:
            return state;
    }
};

export default cartReducer;
