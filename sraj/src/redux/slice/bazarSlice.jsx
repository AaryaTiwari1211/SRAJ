import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    userInfo: null,
}

export const bazarSlice = createSlice({
    name: 'bazar',
    initialState,
    reducers: {
        deleteItem: (state, action) => {
            state.productData = state.productData.filter((item) => item.id != action.payload)
        },
        resetCart: (state) => {
            state.productData = []
        },
        incrementQuantity: (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id);
            if (item && item.quantity<20) {
                item.quantity += 1;
            } 
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id);
            if (item && item.quantity>1) {
                item.quantity -= 1;
            }
        },
        addToCart: (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        }
    }
})

export const { addToCart , deleteItem , incrementQuantity , decrementQuantity , resetCart } = bazarSlice.actions
export default bazarSlice.reducer;
