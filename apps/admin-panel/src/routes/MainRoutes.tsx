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
    CREATE_ADMIN_URL,
    NEWS_DELETE_URL,
    NEWS_URL_COPY_ITEM_URL,
    NEWS_URL_VIDOE_PHOTO_URL,
    NOTIFICATION_COMPOSE_URL,
    CREATE_CLIENT_URL,
    DELETE_CLIENT_ADMIN_URL,
    ADD_CLIENT_ADMIN_URL
} from '@config/urls';
import PanelLayout from '@layouts/PanelLayout';
import ChangePasswordDialog from '@pages/setting/components/myAccount/ChangePasswordDialog';
import DeleteAdminDialog from '../pages/setting/components/admins/DeleteAdminDialog';
import AddAdminDialog from '../pages/setting/components/admins/AddAdminDialog';
import DeleteClientAdminDialog from '../pages/createClient/components/adminAcess/DeletAdminDialog';
import AddClientAdminDialog from '../pages/createClient/components/adminAcess/AddAdminDialog';
import NewsDeleteDialog from '../pages/news/components/NewsDeleteDialog';

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
const NewsPage = lazy(() => import('@pages/news'));
const NewsCopyItemPage = lazy(() => import('@pages/news/components/copyItem'));
const VideoOrPhotoPage = lazy(() => import('@pages/news/components/videoOrPhoto'));
const ClientsPage = lazy(() => import('@pages/clients'));
const CreateClientPage = lazy(() => import('@pages/createClient'));
const NotificationsPage = lazy(() => import('@pages/notifications'));
const NotifComposePage = lazy(() => import('@pages/notifications/components/compose'));
const ReportsPage = lazy(() => import('@pages/reports'));

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
                        <ClientsPage />
                    </Suspense>
                )
            },
            {
                path: CREATE_CLIENT_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <CreateClientPage />
                        <Outlet />
                    </Suspense>
                ),
                children: [
                    {
                        path: `${DELETE_CLIENT_ADMIN_URL}/:id`,
                        element: <DeleteClientAdminDialog />
                    },
                    {
                        path: `${ADD_CLIENT_ADMIN_URL}/:id`,
                        element: <AddClientAdminDialog />
                    },
                ],

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
                        <NotificationsPage />
                    </Suspense>
                )
            },
            {
                path: NOTIFICATION_COMPOSE_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <NotifComposePage />
                    </Suspense>
                )
            },
            {
                path: NEWS_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <NewsPage />
                        <Outlet />
                    </Suspense>
                ),
                children: [
                    {
                        path: `${NEWS_DELETE_URL}/:id`,
                        element: <NewsDeleteDialog />
                    },
                ],
            },
            {
                path: NEWS_URL_COPY_ITEM_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <NewsCopyItemPage />
                    </Suspense>
                ),
            },
            {
                path: NEWS_URL_VIDOE_PHOTO_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <VideoOrPhotoPage />
                    </Suspense>
                ),
            },
            {
                path: REPORT_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <ReportsPage />
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