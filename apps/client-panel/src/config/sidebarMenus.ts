import {
    DASHBOARD_URL,
    CLIENT_MANAGEMENT_URL,
    REWARD_URL,
    LEADERSHIP_BOARD_URL,
    NOTIFICATION_URL,
    NEWS_URL,
    REPORT_URL,
    SETTING_URL
} from './urls';
import {
    DashboardIcon,
    UsersIcon,
    RewardIcon,
    LeadershipIcon,
    NotifIcon,
    SettingIcon,
    NewsIcon,
    ReportIcon
} from 'assets-ui';

export const mainMenu = [
    {

        title: 'Dashboard',
        url: DASHBOARD_URL,
        icon: DashboardIcon
    },
    {
        title: 'Clients',
        url: CLIENT_MANAGEMENT_URL,
        icon: UsersIcon

    },
    {
        title: 'Rewards',
        url: REWARD_URL,
        icon: RewardIcon

    },
    {
        title: 'Leadership board',
        url: LEADERSHIP_BOARD_URL,
        icon: LeadershipIcon

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
        title: 'Reports',
        url: REPORT_URL,
        icon: ReportIcon

    },
    {
        title: 'Settings',
        url: SETTING_URL,
        icon: SettingIcon

    },
];