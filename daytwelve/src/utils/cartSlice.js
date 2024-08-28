import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: 1,
  },
  reducers: {
    addToCart: (state, action) => {
      state.item = state.item + 1;
    },
    removeFromCart: (state) => {
      if (state.item > 0) {
        state.item -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
