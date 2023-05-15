import {
    DASHBOARD_URL,
    CLIENT_MANAGEMENT_URL,
    REWARD_URL,
    LEADERSHIP_BOARD_URL,
    NOTIFICATION_URL,
    NEWS_URL,
    CONTACT_SUPPORT_URL,
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
    ServiceIcon
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