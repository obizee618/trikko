
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem("trikko__cart")) || [],
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find(el => el.id === action.payload.id)
        
            if(findProduct) {
                toast.error(`This Product is already in your cart`, {id: "123"})
            }
            else {
                action.payload.qty = 1
                state.push(action.payload)
                toast.success("New product added to cart", {id: "123"})
                localStorage.setItem("trikko__cart", JSON.stringify(state))
            }
            state = [...state, action.payload]
        },
        changeInCart: (state, action) => {
            state.forEach((cart,i) => {
                if(cart.id === action.payload.id){
                    state[i].qty = action.payload.qty
                }
            })
            localStorage.setItem("trikko__cart", JSON.stringify(state))
        },
        removeFromCart: (state, action) => {
            state.splice(action.payload, 1)
            toast.success("New product added to cart", {id: "123"})
            localStorage.setItem("trikko__cart", JSON.stringify(state))
        }
    }
})

export const {addToCart, changeInCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer;