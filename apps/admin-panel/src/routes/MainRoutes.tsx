import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import {
    DASHBOARD_URL,
    LOGIN_URL,
    PANEL_URL
} from '@config/urls';

const LoadingCircle = memo(() => (
    <CircularProgress
        sx={{
            m: 'auto',
            position: 'fixed',
            top: 'calc(50% - 20px)',
            left: 'calc(50% - 20px)',
            transform: 'translate(-50%,50%)',
        }}
    />
));

const LoginPage = lazy(() => import('@pages/login'));

const MainRoutes = () => {
    return (
        <Routes>

            <Route
                path={LOGIN_URL}
                element={
                    <Suspense fallback={<LoadingCircle />}>
                        <LoginPage />
                    </Suspense>
                }
            />

            <Route path={PANEL_URL} element={<div>Layout</div>} >

                <Route
                    path={DASHBOARD_URL}
                    element={
                        <Suspense fallback={<LoadingCircle />}>
                            <div>Dashboard</div>
                        </Suspense>
                    }
                />
            </Route>

        </Routes>
    );
};

export default MainRoutes;