import { FC } from 'react';
import { SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export interface TagProps {
    mode: 'square' | 'circle',
    title: string,
    hasIcon?: boolean,
    type: 'success' | 'fail' | 'video' | 'employee' | 'copy' | 'company' | 'reminder' | 'voucher' | 'point' | 'none',
    sx?: SxProps,
}

const typeBgColors = {
    'success': 'rgba(179, 252, 195, 0.4)',
    'fail': 'rgba(254, 200, 200, 0.4)',
    'employee': 'rgba(45, 172, 194, 0.15)',
    'company': 'rgba(45, 172, 194, 0.15)',
    'video': 'rgba(255, 166, 0, 0.15)',
    'copy': 'rgba(136, 78, 185, 0.15)',
    'reminder': 'rgba(255, 166, 0, 0.25)',
    'voucher': 'rgba(136, 78, 185, 0.25)',
    'point': 'rgba(183, 183, 183, 0.15)',
    'none': '',
};

const typeBgSvgs = {
    'success': <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' clipRule='evenodd' d='M17.2703 5.25877C17.5876 5.59212 17.5746 6.1196 17.2412 6.43692L7.61162 15.6036C7.44717 15.7601 7.22597 15.8428 6.99916 15.8325C6.77236 15.8222 6.55958 15.7197 6.41003 15.5489L2.70633 11.3181C2.40318 10.9718 2.43815 10.4454 2.78444 10.1422C3.13073 9.83907 3.65721 9.87404 3.96036 10.2203L7.09178 13.7974L16.0921 5.22975C16.4255 4.91242 16.9529 4.92542 17.2703 5.25877Z' fill='#274052' />
    </svg>
    ,
    'fail': <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' clipRule='evenodd' d='M10.0003 1.66663C14.6027 1.66663 18.3337 5.39759 18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6023 1.66699 9.99996C1.66699 5.39759 5.39795 1.66663 10.0003 1.66663ZM10.0003 3.33329C6.31843 3.33329 3.33366 6.31806 3.33366 9.99996C3.33366 13.6819 6.31843 16.6666 10.0003 16.6666C13.6822 16.6666 16.667 13.6819 16.667 9.99996C16.667 6.31806 13.6822 3.33329 10.0003 3.33329ZM10.0003 12.5C10.4606 12.5 10.8337 12.8731 10.8337 13.3333C10.8337 13.7935 10.4606 14.1666 10.0003 14.1666C9.54009 14.1666 9.16699 13.7935 9.16699 13.3333C9.16699 12.8731 9.54009 12.5 10.0003 12.5ZM10.0003 5.83329C10.4606 5.83329 10.8337 6.20639 10.8337 6.66663V9.99996C10.8337 10.4602 10.4606 10.8333 10.0003 10.8333C9.54009 10.8333 9.16699 10.4602 9.16699 9.99996V6.66663C9.16699 6.20639 9.54009 5.83329 10.0003 5.83329Z' fill='#E5167A' />
    </svg>
    ,
    'employee': <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 12.75V14.25H1.5V12.75C1.5 12.75 1.5 9.75004 6.75 9.75004C12 9.75004 12 12.75 12 12.75ZM9.375 5.62504C9.375 5.10586 9.22105 4.59835 8.93261 4.16667C8.64417 3.73499 8.2342 3.39854 7.75454 3.19986C7.27489 3.00118 6.74709 2.94919 6.23789 3.05048C5.72869 3.15176 5.26096 3.40177 4.89384 3.76888C4.52673 4.136 4.27673 4.60373 4.17544 5.11293C4.07415 5.62213 4.12614 6.14993 4.32482 6.62958C4.5235 7.10924 4.85995 7.51921 5.29163 7.80765C5.72331 8.09609 6.23082 8.25004 6.75 8.25004C7.44619 8.25004 8.11387 7.97348 8.60616 7.48119C9.09844 6.98891 9.375 6.32123 9.375 5.62504ZM11.955 9.75004C12.4161 10.1068 12.7933 10.5604 13.0603 11.0787C13.3272 11.597 13.4773 12.1675 13.5 12.75V14.25H16.5V12.75C16.5 12.75 16.5 10.0275 11.955 9.75004ZM11.25 3.00004C10.7338 2.99716 10.2289 3.15151 9.8025 3.44254C10.2581 4.07909 10.503 4.84225 10.503 5.62504C10.503 6.40782 10.2581 7.17099 9.8025 7.80754C10.2289 8.09857 10.7338 8.25291 11.25 8.25004C11.9462 8.25004 12.6139 7.97348 13.1062 7.48119C13.5984 6.98891 13.875 6.32123 13.875 5.62504C13.875 4.92885 13.5984 4.26117 13.1062 3.76888C12.6139 3.2766 11.9462 3.00004 11.25 3.00004Z' fill='#274052' />
    </svg>,
    'company': <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 12.75V14.25H1.5V12.75C1.5 12.75 1.5 9.75004 6.75 9.75004C12 9.75004 12 12.75 12 12.75ZM9.375 5.62504C9.375 5.10586 9.22105 4.59835 8.93261 4.16667C8.64417 3.73499 8.2342 3.39854 7.75454 3.19986C7.27489 3.00118 6.74709 2.94919 6.23789 3.05048C5.72869 3.15176 5.26096 3.40177 4.89384 3.76888C4.52673 4.136 4.27673 4.60373 4.17544 5.11293C4.07415 5.62213 4.12614 6.14993 4.32482 6.62958C4.5235 7.10924 4.85995 7.51921 5.29163 7.80765C5.72331 8.09609 6.23082 8.25004 6.75 8.25004C7.44619 8.25004 8.11387 7.97348 8.60616 7.48119C9.09844 6.98891 9.375 6.32123 9.375 5.62504ZM11.955 9.75004C12.4161 10.1068 12.7933 10.5604 13.0603 11.0787C13.3272 11.597 13.4773 12.1675 13.5 12.75V14.25H16.5V12.75C16.5 12.75 16.5 10.0275 11.955 9.75004ZM11.25 3.00004C10.7338 2.99716 10.2289 3.15151 9.8025 3.44254C10.2581 4.07909 10.503 4.84225 10.503 5.62504C10.503 6.40782 10.2581 7.17099 9.8025 7.80754C10.2289 8.09857 10.7338 8.25291 11.25 8.25004C11.9462 8.25004 12.6139 7.97348 13.1062 7.48119C13.5984 6.98891 13.875 6.32123 13.875 5.62504C13.875 4.92885 13.5984 4.26117 13.1062 3.76888C12.6139 3.2766 11.9462 3.00004 11.25 3.00004Z' fill='#274052' />
    </svg>
    ,
    'video': <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M9 13.125C9.9375 13.125 10.7345 12.797 11.391 12.141C12.047 11.4845 12.375 10.6875 12.375 9.75C12.375 8.8125 12.047 8.0155 11.391 7.359C10.7345 6.703 9.9375 6.375 9 6.375C8.0625 6.375 7.2655 6.703 6.609 7.359C5.953 8.0155 5.625 8.8125 5.625 9.75C5.625 10.6875 5.953 11.4845 6.609 12.141C7.2655 12.797 8.0625 13.125 9 13.125ZM9 12.375L8.175 10.575L6.375 9.75L8.175 8.925L9 7.125L9.825 8.925L11.625 9.75L9.825 10.575L9 12.375ZM3 15.75C2.5875 15.75 2.2345 15.6033 1.941 15.3097C1.647 15.0157 1.5 14.6625 1.5 14.25V5.25C1.5 4.8375 1.647 4.4845 1.941 4.191C2.2345 3.897 2.5875 3.75 3 3.75H5.3625L6.75 2.25H11.25L12.6375 3.75H15C15.4125 3.75 15.7657 3.897 16.0597 4.191C16.3533 4.4845 16.5 4.8375 16.5 5.25V14.25C16.5 14.6625 16.3533 15.0157 16.0597 15.3097C15.7657 15.6033 15.4125 15.75 15 15.75H3ZM15 14.25V5.25H11.9625L10.5938 3.75H7.40625L6.0375 5.25H3V14.25H15Z' fill='#274052' />
    </svg>,
    'copy': <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' clipRule='evenodd' d='M12.9325 4.87644L15.9465 5.68745C16.3451 5.79471 16.5812 6.20236 16.4743 6.59882L13.9539 15.948C13.8469 16.3452 13.4361 16.5809 13.0365 16.4745L7.29941 14.9465C6.89981 14.8401 6.66267 14.4318 6.76974 14.0346C6.87682 13.6374 7.28756 13.4017 7.68716 13.5082L12.7007 14.8434L14.8338 6.93073L12.541 6.31378C12.1417 6.20632 11.9056 5.79746 12.0137 5.40055C12.1218 5.00364 12.5332 4.76899 12.9325 4.87644ZM9.74067 1.5C10.1544 1.5 10.4897 1.83334 10.4897 2.24454V11.179C10.4897 11.5902 10.1544 11.9235 9.74067 11.9235H2.99907C2.58537 11.9235 2.25 11.5902 2.25 11.179V2.24454C2.25 1.83334 2.58537 1.5 2.99907 1.5H9.74067ZM8.9916 2.98907H3.74813V10.4344H8.9916V2.98907Z' fill='#274052' />
    </svg>,
    'reminder': <svg width='14' height='16' viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M9.15385 13.3846C9.15385 13.9558 8.92692 14.5036 8.523 14.9076C8.11907 15.3115 7.57124 15.5384 7 15.5384C6.42876 15.5384 5.88093 15.3115 5.477 14.9076C5.07308 14.5036 4.84615 13.9558 4.84615 13.3846H9.15385ZM12.3846 12.3076H0.646154C0.474783 12.3076 0.310431 12.2396 0.189254 12.1184C0.0680768 11.9972 0 11.8328 0 11.6615C0 11.4901 0.0680768 11.3258 0.189254 11.2046C0.310431 11.0834 0.474783 11.0153 0.646154 11.0153H1.61538V6.92301C1.61538 4.31686 3.46769 2.14147 5.92846 1.64609C5.91343 1.49635 5.92995 1.34512 5.97696 1.20215C6.02397 1.05919 6.10042 0.927663 6.20138 0.81606C6.30234 0.704457 6.42557 0.615253 6.56313 0.554202C6.70068 0.493151 6.84951 0.461609 7 0.461609C7.1505 0.461609 7.29932 0.493151 7.43687 0.554202C7.57443 0.615253 7.69766 0.704457 7.79862 0.81606C7.89958 0.927663 7.97603 1.05919 8.02304 1.20215C8.07005 1.34512 8.08657 1.49635 8.07154 1.64609C9.28858 1.89364 10.3827 2.55413 11.1687 3.51575C11.9547 4.47737 12.3842 5.68105 12.3846 6.92301V11.0153H13.3538C13.5252 11.0153 13.6896 11.0834 13.8107 11.2046C13.9319 11.3258 14 11.4901 14 11.6615C14 11.8328 13.9319 11.9972 13.8107 12.1184C13.6896 12.2396 13.5252 12.3076 13.3538 12.3076H12.3846Z' fill='#274052' />
    </svg>,
    'voucher': <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M2.8125 14.625C2.8125 15.2217 3.04955 15.794 3.47151 16.216C3.89347 16.6379 4.46576 16.875 5.0625 16.875H8.29688C8.33417 16.875 8.36994 16.8602 8.39631 16.8338C8.42268 16.8074 8.4375 16.7717 8.4375 16.7344V10.2656C8.4375 10.2283 8.42268 10.1926 8.39631 10.1662C8.36994 10.1398 8.33417 10.125 8.29688 10.125H3.09375C3.01916 10.125 2.94762 10.1546 2.89488 10.2074C2.84213 10.2601 2.8125 10.3317 2.8125 10.4062V14.625ZM8.4375 8.85937V5.0625H9.5625V8.85937C9.5625 8.89667 9.57732 8.93244 9.60369 8.95881C9.63006 8.98518 9.66583 9 9.70312 9H14.625C14.8166 8.99999 15.0069 8.96729 15.1875 8.90332C15.5162 8.78661 15.8008 8.57107 16.0022 8.28626C16.2036 8.00146 16.312 7.66132 16.3125 7.3125V6.75C16.3125 6.30244 16.1347 5.87322 15.8182 5.55675C15.5018 5.24029 15.0726 5.0625 14.625 5.0625H13.1998C13.1875 5.0623 13.1755 5.05891 13.165 5.05266C13.1545 5.04641 13.1458 5.03751 13.1397 5.02686C13.1337 5.0162 13.1305 5.00415 13.1306 4.9919C13.1306 4.97966 13.1339 4.96763 13.14 4.95703C13.4655 4.40749 13.5712 3.75523 13.4359 3.13102C13.3007 2.50681 12.9345 1.95681 12.4107 1.5913C11.8869 1.22578 11.2444 1.07178 10.6118 1.16017C9.97926 1.24856 9.40351 1.5728 9 2.06789C8.59649 1.5728 8.02074 1.24856 7.38819 1.16017C6.75564 1.07178 6.11306 1.22578 5.5893 1.5913C5.06553 1.95681 4.69931 2.50681 4.56405 3.13102C4.4288 3.75523 4.53451 4.40749 4.86 4.95703C4.86613 4.96763 4.86937 4.97966 4.86942 4.9919C4.86947 5.00415 4.86632 5.0162 4.86029 5.02686C4.85425 5.03751 4.84553 5.04641 4.835 5.05266C4.82446 5.05891 4.81248 5.0623 4.80023 5.0625H3.375C2.92745 5.0625 2.49822 5.24029 2.18176 5.55675C1.86529 5.87322 1.6875 6.30244 1.6875 6.75V7.3125C1.688 7.66132 1.79638 8.00146 1.99779 8.28626C2.1992 8.57107 2.48378 8.78661 2.8125 8.90332C2.99314 8.96729 3.18337 8.99999 3.375 9H8.29688C8.33417 9 8.36994 8.98518 8.39631 8.95881C8.42268 8.93244 8.4375 8.89667 8.4375 8.85937ZM9.5625 3.65625C9.5625 3.37812 9.64498 3.10623 9.7995 2.87498C9.95402 2.64372 10.1736 2.46348 10.4306 2.35704C10.6876 2.2506 10.9703 2.22276 11.2431 2.27702C11.5159 2.33128 11.7665 2.46521 11.9631 2.66188C12.1598 2.85854 12.2937 3.10911 12.348 3.3819C12.4022 3.65469 12.3744 3.93744 12.268 4.19439C12.1615 4.45135 11.9813 4.67098 11.75 4.8255C11.5188 4.98002 11.2469 5.0625 10.9688 5.0625H9.5625V3.65625ZM6.9307 2.25351C7.12336 2.2397 7.31679 2.26573 7.49895 2.32997C7.6811 2.3942 7.84807 2.49528 7.98944 2.62689C8.13081 2.7585 8.24356 2.91782 8.32065 3.09492C8.39773 3.27201 8.43751 3.4631 8.4375 3.65625V5.0625H7.03125C6.66763 5.06156 6.3185 4.91981 6.05714 4.667C5.79578 4.41418 5.64252 4.06995 5.62951 3.70656C5.6165 3.34317 5.74476 2.98886 5.98737 2.71801C6.22998 2.44715 6.56808 2.2808 6.9307 2.25386V2.25351ZM9.70312 16.875H12.9375C13.5342 16.875 14.1065 16.6379 14.5285 16.216C14.9504 15.794 15.1875 15.2217 15.1875 14.625V10.4062C15.1875 10.3317 15.1579 10.2601 15.1051 10.2074C15.0524 10.1546 14.9808 10.125 14.9062 10.125H9.70312C9.66583 10.125 9.63006 10.1398 9.60369 10.1662C9.57732 10.1926 9.5625 10.2283 9.5625 10.2656V16.7344C9.5625 16.7717 9.57732 16.8074 9.60369 16.8338C9.63006 16.8602 9.66583 16.875 9.70312 16.875Z' fill='#274052' />
    </svg>
    ,
    'point': <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='18' height='18' rx='9' fill='#FFA600' />
        <path d='M7.86 8.982H9.277C9.719 8.982 10.07 8.865 10.33 8.631C10.59 8.38833 10.72 8.06767 10.72 7.669C10.72 7.26167 10.59 6.941 10.33 6.707C10.0787 6.46433 9.72767 6.343 9.277 6.343H7.86V8.982ZM9.498 10.529H7.847V14H6.053V4.783H9.498C10.3993 4.783 11.1273 5.05167 11.682 5.589C12.2453 6.12633 12.527 6.81533 12.527 7.656C12.527 8.49667 12.2453 9.18567 11.682 9.723C11.1273 10.2603 10.3993 10.529 9.498 10.529Z' fill='white' />
    </svg>

    ,
    'none': ''
};

export const Tag: FC<TagProps> = ({ mode, title, type, sx, hasIcon }) => {
    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            gap={'4px'}
            bgcolor={typeBgColors[type]}
            borderRadius={mode === 'circle' ? '15px' : '6px'}
            p={'4px 8px'}
            sx={sx}
        >
            {type && hasIcon ? typeBgSvgs[type] : null}
            <Typography
                fontSize={12}
                fontWeight={400}
            >
                {title}
            </Typography>
        </Stack>
    );
};

Tag.defaultProps = {
    hasIcon: true
};

export default Tag;