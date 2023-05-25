import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Suspense, lazy, memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import {
    DASHBOARD_URL,
    LOGIN_URL,
    PANEL_URL,
    REWARD_URL,
    NOTIFICATION_URL,
    NEWS_URL,
    CONTACT_SUPPORT_URL,
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
    SET_PASSWORD_URL,
    APP_SET_PASSWORD_URL,
    QRCODE_URL,
    JOBS_URL,
    LEADER_BORD_URL,
    EMPLOYEES_URL,
    EMPLOYEES_INDIVIDUAL_FROM_URL,
    EMPLOYEES_DELETE_URL,
    EMPLOYEES_DISABLED_URL,
    EMPLOYEES_BULKUPLOAD_URL
} from '@config/urls';
import PanelLayout from '@layouts/PanelLayout';
import ChangePasswordDialog from '@pages/setting/components/myAccount/ChangePasswordDialog';
import DeleteAdminDialog from '../pages/setting/components/admins/DeleteAdminDialog';
import AddAdminDialog from '../pages/setting/components/admins/AddAdminDialog';
import NewsDeleteDialog from '../pages/news/components/NewsDeleteDialog';
import QrCodeDialog from '@pages/qrCode';
import EmployeeFormDialog from '@pages/employees/components/employeeForm';
import EmployeeBulkUploadDialog from '@pages/employees/components/employeeBulkUpload';
import EmployeeDeleteDialog from '@pages/employees/components/employeeDelete';
import EmployeeDisabledDialog from '@pages/employees/components/employeeDisabled';

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
const SetPasswordPage = lazy(() => import('@pages/setPassword'));
const AppSetPasswordPage = lazy(() => import('@pages/appSetPassword'));
const DashboardPage = lazy(() => import('@pages/dashboard'));
const LeaderBoardPage = lazy(() => import('@pages/leaderBoard'));
const RewardsPage = lazy(() => import('@pages/rewards'));
const RewardsClientPage = lazy(() => import('@pages/rewardsClient'));
const RewardsCompanyPage = lazy(() => import('@pages/rewardCompany'));
const SettingPage = lazy(() => import('@pages/setting'));
const PolicyPage = lazy(() => import('@pages/setting/components/termsCondition/policy'));
const NewsPage = lazy(() => import('@pages/news'));
const NewsCopyItemPage = lazy(() => import('@pages/news/components/copyItem'));
const VideoOrPhotoPage = lazy(() => import('@pages/news/components/videoOrPhoto'));
const JobsPage = lazy(() => import('@pages/jobs'));
const NotificationsPage = lazy(() => import('@pages/notifications'));
const NotifComposePage = lazy(() => import('@pages/notifications/components/compose'));
const ContactSupportPage = lazy(() => import('@pages/contactSupport'));
const EmployeesPage = lazy(() => import('@pages/employees'));

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
        path: SET_PASSWORD_URL,
        element: (
            <Suspense fallback={<LoadingCircle />}>
                <SetPasswordPage />
            </Suspense>
        ),
    },
    {
        path: APP_SET_PASSWORD_URL,
        element: (
            <Suspense fallback={<LoadingCircle />}>
                <AppSetPasswordPage />
            </Suspense>
        ),
    },
    {
        path: QRCODE_URL,
        element: (
            <Suspense fallback={<LoadingCircle />}>
                <QrCodeDialog />
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
                path: JOBS_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <JobsPage />
                    </Suspense>
                )
            },
            {
                path: LEADER_BORD_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <LeaderBoardPage />
                    </Suspense>
                )
            },
            {
                path: EMPLOYEES_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <EmployeesPage />
                        <Outlet />
                    </Suspense>
                ),
                children: [
                    {
                        path: EMPLOYEES_INDIVIDUAL_FROM_URL,
                        element: <EmployeeFormDialog />
                    },
                    {
                        path: EMPLOYEES_DELETE_URL,
                        element: <EmployeeDeleteDialog />
                    },
                    {
                        path: EMPLOYEES_DISABLED_URL,
                        element: <EmployeeDisabledDialog />
                    },
                    {
                        path: EMPLOYEES_BULKUPLOAD_URL,
                        element: <EmployeeBulkUploadDialog />
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
                path: CONTACT_SUPPORT_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <ContactSupportPage />
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