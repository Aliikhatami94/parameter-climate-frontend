import { configureStore } from '@reduxjs/toolkit';

import apiReducer from './features/api/apiSlice';

export default configureStore({
    reducer: {
        apiSlice: apiReducer,
    }
});
