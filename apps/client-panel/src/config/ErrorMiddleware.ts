import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

import { _TOKEN_NAME } from './urls';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {

    if (isRejectedWithValue(action)) {

        // if (action?.payload.status === 401) { window.location.replace(LOGIN_URL); localStorage.removeItem(_TOKEN_NAME); return; }
        // if (action?.payload.status === 'FETCH_ERROR') { toast.error('Server Error'); return; }

        // if (action?.error?.message === 'Rejected') {

        //     action.payload?.data?.message.forEach((_mssg: string) => {
        //         toast.error(_mssg);
        //     });
        // }
    }

    return next(action);
};