import { createSlice } from "@reduxjs/toolkit"

const initalState = { ui: false }

const uiSLice = createSlice({
    name: 'ui-cart',
    initialState: initalState,
    reducers: {
        toggleShow(state){
            state.ui = !state.ui
        }
    }
})

export const uiAction = uiSLice.actions;
export default uiSLice.reducer