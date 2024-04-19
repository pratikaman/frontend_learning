import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
  
      // console.log(action.payload);
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
