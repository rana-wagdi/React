import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: 0};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCart(state){
            state.cart++;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;