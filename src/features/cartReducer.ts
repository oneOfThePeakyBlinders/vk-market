import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartState, Status} from "./types.ts";
import {fetchCartItems} from "./asyncActions.ts";


const initialState: CartState = {
    cartItems: [],
    status: Status.LOADING,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementItem: (state, action: PayloadAction<number>) => {
            state.cartItems.filter((item) => {
                if(action.payload === item.id) {
                    if(item.left !== 0) {
                        item.amount++;
                        item.left--;
                    }
                }
            })
        },
        decrementItem: (state, action: PayloadAction<number>) => {
            state.cartItems.filter((item) => {
                if(action.payload === item.id && item.amount !== 1) {
                    item.amount--;
                    item.left++;
                }
            })
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter((item) => {
                if(item.id !== action.payload) {
                    return item;
                }
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartItems.pending, (state) => {
            state.status = Status.LOADING;
            state.cartItems = [];
        });

        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            if (action.payload) {
                state.cartItems = action.payload;
                state.status = Status.SUCCESS;
            } else {
                state.status = Status.ERROR;
                state.cartItems = [];
            }
        });

        builder.addCase(fetchCartItems.rejected, (state) => {
            state.status = Status.ERROR;
            state.cartItems = [];
        })
    }
});

//export const {incrementItem, decrementItem, removeItem} = cartSlice.actions

export default cartSlice.reducer