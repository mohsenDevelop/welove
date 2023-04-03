import { configureStore } from '@reduxjs/toolkit';

import { api } from '@api/api';
import { mainSlice } from '@slices/mainSlice';
import { rtkQueryErrorLogger } from '@config/ErrorMiddleware';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [mainSlice.name]: mainSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware).concat(rtkQueryErrorLogger);
    },
    devTools: process.env.NODE_ENV === 'development'
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch