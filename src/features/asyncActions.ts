import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {CartItem} from "./types.ts";
import {URL} from "../constants/data.ts";
interface ApiResponse<Data> {
    data?: Data;
}

async function Fetcher<Data>(url: string) {
    const res = await axios.get<ApiResponse<Data>>(url);
    if (!Array.isArray(res.data)) {
        throw new Error('Ошибка со списком групп!')
    }
    return res.data as Data;
}

export const fetchCartItems = createAsyncThunk<CartItem[]>('group/fetchGroups',
    async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = await Fetcher<CartItem[]>(URL);
            return data;
        } catch (e) {
            throw new Error('Ошибка при получении товаров');
        }
    }
);