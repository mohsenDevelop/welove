import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Suspense, lazy, memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import {
    DASHBOARD_URL,
    LOGIN_URL,
    PANEL_URL,
    CLIENT_MANAGEMENT_URL,
    REWARD_URL,
    LEADERSHIP_BOARD_URL,
    NOTIFICATION_URL,
    NEWS_URL,
    REPORT_URL,
    SETTING_URL,
    REWARD_CLEINT_URL,
    REWARD_COMPANY_URL,
    CHNAGE_PASSWORD_URL,
    DELETE_ADMIN_URL,
    POLICY_URL,
    CREATE_ADMIN_URL
} from '@config/urls';
import PanelLayout from '@layouts/PanelLayout';
import ChangePasswordDialog from '@pages/setting/components/myAccount/ChangePasswordDialog';
import DeleteAdminDialog from '../pages/setting/components/admins/DeleteAdminDialog';
import AddAdminDialog from '../pages/setting/components/admins/AddAdminDialog';

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
const DashboardPage = lazy(() => import('@pages/dashboard'));
const LeadershipBoardPage = lazy(() => import('@pages/leadershipBoard'));
const RewardsPage = lazy(() => import('@pages/rewards'));
const RewardsClientPage = lazy(() => import('@pages/rewardsClient'));
const RewardsCompanyPage = lazy(() => import('@pages/rewardCompany'));
const SettingPage = lazy(() => import('@pages/setting'));
const PolicyPage = lazy(() => import('@pages/setting/components/termsCondition/policy'));

const MainRoutes = createBrowserRouter([
    {
        path: LOGIN_URL,
        element: (
            <Suspense fallback={<LoadingCircle />}>
                <LoginPage />
            </Suspense>
        ),
    },
    {
        path: PANEL_URL,
        element: <PanelLayout />,
        children: [
            {
                path: DASHBOARD_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <DashboardPage />
                    </Suspense>
                )
            },
            {
                path: CLIENT_MANAGEMENT_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <div>Client</div>
                    </Suspense>
                )
            },
            {
                path: REWARD_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <RewardsPage />
                    </Suspense>
                ),

            },
            {
                path: REWARD_CLEINT_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <RewardsClientPage />
                    </Suspense>
                ),

            },
            {
                path: `${REWARD_COMPANY_URL}/:id`,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <RewardsCompanyPage />
                    </Suspense>
                ),

            },
            {
                path: LEADERSHIP_BOARD_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <LeadershipBoardPage />
                    </Suspense>
                )
            },
            {
                path: NOTIFICATION_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <div>Notifications</div>
                    </Suspense>
                )
            },
            {
                path: NEWS_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <div>News</div>
                    </Suspense>
                )
            },
            {
                path: REPORT_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <div>Reports</div>
                    </Suspense>
                )
            },
            {
                path: SETTING_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <SettingPage />
                        <Outlet />
                    </Suspense>
                ),
                children: [
                    {
                        path: CHNAGE_PASSWORD_URL,
                        element: <ChangePasswordDialog />
                    },
                    {
                        path: DELETE_ADMIN_URL,
                        element: <DeleteAdminDialog />
                    },
                    {
                        path: CREATE_ADMIN_URL,
                        element: <AddAdminDialog />
                    },
                ],
            },
            {
                path: `${POLICY_URL}/:id`,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <PolicyPage />
                    </Suspense>
                ),
            },
        ]
    }
]);

export default MainRoutes;