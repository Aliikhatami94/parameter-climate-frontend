import { createSlice } from "@reduxjs/toolkit";
import {fetchData} from "../../action";


const initialState = {
    future_price: {},
    payout_data: [],
    isLoading: false,
    hasError: false
}

const apiSlice = createSlice({
    name: "api",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchData.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state[action.meta.arg.target] = action.payload;
        },
            [fetchData.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export default apiSlice.reducer;
