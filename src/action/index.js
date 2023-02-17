import { createAsyncThunk } from '@reduxjs/toolkit';

const updateDataArray = (payload) => {
    const {response, target}= payload;
    return {
        type: 'updateDataArray', payload: {response, target}
    }
}

export const fetchData = createAsyncThunk(
    'api/fetchData',
    async (options, thunkAPI) => {
        const { method, path, args, target } = options;

        let url = `http://127.0.0.1:5000/api/v1/${path}`;
        url += '?' + new URLSearchParams(args).toString();
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
        });

        thunkAPI.dispatch(updateDataArray({response, target}))
        return response.json ();
    }
);
