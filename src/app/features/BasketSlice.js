import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem("food")) || [],
    count: 0,
}

export const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const existingIndex = state.value.findIndex(item => item.id === action.payload.id);
            if (existingIndex !== -1) {
                state.value[existingIndex] = { ...state.value[existingIndex], ...action.payload };
            } else {
                state.value.push({ ...action.payload, count: 1 });
            }
            localStorage.setItem("food", JSON.stringify(state.value))
        },
        deleteFromBasket: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload)
            localStorage.setItem("food", JSON.stringify(state.value))
        }
    },
})


export const { addToBasket, deleteFromBasket } = BasketSlice.actions

export default BasketSlice.reducer