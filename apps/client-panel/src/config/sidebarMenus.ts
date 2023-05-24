import {
    DASHBOARD_URL,
    EMPLOYEES_URL,
    REWARD_URL,
    NOTIFICATION_URL,
    NEWS_URL,
    CONTACT_SUPPORT_URL,
    SETTING_URL,
    JOBS_URL,
    LEADER_BORD_URL
} from './urls';
import {
    DashboardIcon,
    UsersIcon,
    RewardIcon,
    LeadershipIcon,
    NotifIcon,
    SettingIcon,
    NewsIcon,
    ServiceIcon,
    BagIcon
} from 'assets-ui';

export const mainMenu = [
    {

        title: 'Dashboard',
        url: DASHBOARD_URL,
        icon: DashboardIcon
    },
    {

        title: 'Jobs',
        url: JOBS_URL,
        icon: BagIcon
    },
    {
        title: 'Leaderboard',
        url: LEADER_BORD_URL,
        icon: LeadershipIcon

    },
    {
        title: 'Employees',
        url: EMPLOYEES_URL,
        icon: UsersIcon

    },
    {
        title: 'Rewards',
        url: REWARD_URL,
        icon: RewardIcon

    },
    {
        title: 'Notifications',
        url: NOTIFICATION_URL,
        icon: NotifIcon

    },
];

export const generalsMenu = [
    {
        title: 'News',
        url: NEWS_URL,
        icon: NewsIcon

    },
    {
        title: 'Contact Support',
        url: CONTACT_SUPPORT_URL,
        icon: ServiceIcon

    },
    {
        title: 'Settings',
        url: SETTING_URL,
        icon: SettingIcon

    },
];