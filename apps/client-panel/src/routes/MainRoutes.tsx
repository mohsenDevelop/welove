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
    CHNAGE_PASSWORD_URL,
    DELETE_ADMIN_URL,
    POLICY_URL,
    CREATE_ADMIN_URL,
    NEWS_DELETE_URL,
    NEWS_URL_COPY_ITEM_URL,
    NEWS_URL_VIDOE_PHOTO_URL,
    SET_PASSWORD_URL,
    APP_SET_PASSWORD_URL,
    QRCODE_URL,
    JOBS_URL,
    LEADER_BORD_URL,
    EMPLOYEES_URL,
    EMPLOYEES_INDIVIDUAL_FROM_URL,
    EMPLOYEES_DELETE_URL,
    EMPLOYEES_DISABLED_URL,
    EMPLOYEES_BULKUPLOAD_URL,
    EMPLOYEES_PROFILE_URL,
    EMPLOYEES_PROFILE_POINT_URL,
    REWARD_APPROVE_URL,
    REWARD_DECLINE_URL,
    POLICY_ADMIN_URL,
    VOUCHERS_ADMIN_URL,
    INTERVIEW_STAGE_ADMIN_URL,
    OFFER_SETTING_ADMIN_URL
} from '@config/urls';
import PanelLayout from '@layouts/PanelLayout';
import ChangePasswordDialog from '@pages/setting/components/myAccount/ChangePasswordDialog';
import DeleteAdminDialog from '../pages/setting/components/admins/DeleteAdminDialog';
import AddAdminDialog from '../pages/setting/components/admins/AddAdminDialog';
import VouchersDialog from '../pages/setting/components/rewardSetting/manageVouchers/VouchersDialog';
import AddInterviewDialog from '../pages/setting/components/rewardSetting/interview/AddInterviewDialog';
import EditOfferDialog from '../pages/setting/components/rewardSetting/offerSetting/EditOfferDialog';
import NewsDeleteDialog from '../pages/news/components/NewsDeleteDialog';
import QrCodeDialog from '@pages/qrCode';
import EmployeeFormDialog from '@pages/employees/components/employeeForm';
import EmployeeBulkUploadDialog from '@pages/employees/components/employeeBulkUpload';
import EmployeeDeleteDialog from '@pages/employees/components/employeeDelete';
import EmployeeDisabledDialog from '@pages/employees/components/employeeDisabled';
import AddEmployeePointDialog from '@pages/employees/components/employeeProfile/AddEmployeePointDialog';
import ApprovedDialog from '@pages/reward/components/approvedDialog';
import DeclineDialogDialog from '@pages/reward/components/declineDialog';

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
const Rewards = lazy(() => import('@pages/reward'));
const SettingPage = lazy(() => import('@pages/setting'));
const PolicyPage = lazy(() => import('@pages/setting/components/termsCondition/policy'));
const AdminPolicyPage = lazy(() => import('@pages/setting/components/termsCondition/AdminPolicy'));
const NewsPage = lazy(() => import('@pages/news'));
const NewsCopyItemPage = lazy(() => import('@pages/news/components/copyItem'));
const VideoOrPhotoPage = lazy(() => import('@pages/news/components/videoOrPhoto'));
const JobsPage = lazy(() => import('@pages/jobs'));
const NotificationsPage = lazy(() => import('@pages/notifications'));
const ContactSupportPage = lazy(() => import('@pages/contactSupport'));
const EmployeesPage = lazy(() => import('@pages/employees'));
const EmployeesProfilePage = lazy(() => import('@pages/employees/components/employeeProfile'));

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
                path: EMPLOYEES_PROFILE_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <EmployeesProfilePage />
                        <Outlet />
                    </Suspense>
                ),
                children: [

                    {
                        path: EMPLOYEES_PROFILE_POINT_URL,
                        element: <AddEmployeePointDialog />
                    },
                ],
            },
            {
                path: REWARD_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <Rewards />
                        <Outlet />
                    </Suspense>
                ),
                children: [

                    {
                        path: `${REWARD_APPROVE_URL}/:id`,
                        element: <ApprovedDialog />
                    },
                    {
                        path: `${REWARD_DECLINE_URL}/:id`,
                        element: <DeclineDialogDialog />
                    },
                ],

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
                    {
                        path: VOUCHERS_ADMIN_URL,
                        element: <VouchersDialog />
                    },
                    {
                        path: INTERVIEW_STAGE_ADMIN_URL,
                        element: <AddInterviewDialog />
                    },
                    {
                        path: OFFER_SETTING_ADMIN_URL,
                        element: <EditOfferDialog />
                    },
                ],
            },
            {
                path: POLICY_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <PolicyPage />
                    </Suspense>
                ),
            },
            {
                path: POLICY_ADMIN_URL,
                element: (
                    <Suspense fallback={<LoadingCircle />}>
                        <AdminPolicyPage />
                    </Suspense>
                ),
            },
        ]
    }
]);

export default MainRoutes;