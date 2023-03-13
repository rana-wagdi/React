import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id)
            state.totalAmount++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    decrption: newItem.decription,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id)
            state.totalAmount--;
            if(existingItem.quantity === 1){
              state.items =   state.items.filter((item) => item.id !== newItem.id)
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - newItem.price;
            }
       }
    },
 
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;