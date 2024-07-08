import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  totalAmount: JSON.parse(localStorage.getItem('totalAmount')) || 0
};

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price * item.count, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push({ ...action.payload, count: 1 });
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      toast.success(`${action?.payload?.title} is added to cart`);
    },
    deleteFromCart(state, action) {
      const filtered = state.items.filter(item => item.id !== action.payload);
      state.items = filtered;
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      toast.error(`Item is removed from cart`);
    },
    incrementQuantity(state, action) {
      const updated = state.items.map(item => {
        if (item.id === action.payload) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      state.items = updated;
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    },
    decrementQuantity(state, action) {
      const updated = state.items.map(item => {
        if (item.id === action.payload) {
          return { ...item, count: Math.max(item.count - 1, 1) };
        }
        return item;
      });
      state.items = updated;
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    }
  }
});

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
