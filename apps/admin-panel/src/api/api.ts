import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { _TOKEN_NAME } from '@config/urls';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_BASE_URL}/api/v1/admin`,
        prepareHeaders: (headers: any) => {
            const token = localStorage.getItem(_TOKEN_NAME);
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        },

    }),
    tagTypes: ['Users', 'User', 'Categories'],
    endpoints: () => ({}),
});