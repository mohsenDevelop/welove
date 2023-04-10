import { FC, ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { colorPalette } from '../colors';
import { Helper } from 'utils';

export interface RewardCardProps {
    jobTitle: string,
    action: string,
    paltform: string,
    employee: string,
    referral: string,
    point: number,
    theme: 'darkBlue' | 'lightBlue' | 'green',
    actions: ReactNode
}

const themeColor = {
    'darkBlue': colorPalette.blue800,
    'green': 'rgba(16, 140, 29, 0.15)',
    'lightBlue': colorPalette.blue20,
};

export const RewardCard: FC<RewardCardProps> = ({
    jobTitle,
    action,
    paltform,
    employee,
    referral,
    point,
    theme,
    actions
}) => {
    return (
        <Stack
        >
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                p={'0px 24px'}
                height={100}
                boxShadow={'0px 1px 12px rgba(168, 168, 168, 0.08)'}
                border={'1px solid rgba(0, 0, 0, 0.08)'}
                borderRadius={'12px 12px 0px 0px'}
                bgcolor={themeColor[theme]}
            >
                <Typography
                    fontSize={18}
                    fontWeight={700}
                    color={theme === 'darkBlue' ? colorPalette.white : colorPalette.blue800}
                >
                    {jobTitle ?? ''}
                </Typography>

                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={'4px'}
                    bgcolor={colorPalette.white}
                    borderRadius={110}
                    height={38}
                    minWidth={82}
                >
                    <Typography
                        fontSize={14}
                        fontWeight={600}
                        color={colorPalette.gray900}
                    >
                        {Helper.threeDigitSeparator(point ?? '')}
                    </Typography>

                    <Typography
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        fontSize={13}
                        fontWeight={700}
                        color={colorPalette.white}
                        width={18}
                        height={18}
                        bgcolor={colorPalette.orange120}
                        borderRadius={'50%'}
                    >
                        P
                    </Typography>
                </Box>
            </Stack>

            <Stack
                border={'1px solid rgba(0, 0, 0, 0.08)'}
                boxShadow={'0px 1px 12px rgba(168, 168, 168, 0.08)'}
                borderRadius={'0px 0px 12px 12px'}
            >
                <Stack
                    p={'30px 24px'}
                    gap={'25px'}
                >
                    <Stack
                        flexDirection={'row'}
                    >
                        <Box
                            display={'flex'}
                            flex={1}
                            flexDirection={'column'}
                            gap={'10px'}
                        >
                            <Typography
                                fontSize={14}
                                fontWeight={500}
                                color={colorPalette.gray900}
                                sx={{ opacity: .6 }}
                            >
                                Action
                            </Typography>

                            <Typography
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                fontSize={14}
                                fontWeight={400}
                                color={colorPalette.blue800}
                                border={'1px solid rgba(39, 64, 82, 0.1)'}
                                borderRadius={160}
                                p={'0px 20px'}
                                height={37}
                                width={'fit-content'}
                            >
                                {action ?? ''}
                            </Typography>
                        </Box>

                        <Box
                            display={'flex'}
                            flex={1}
                            flexDirection={'column'}
                            gap={'10px'}
                        >
                            <Typography
                                fontSize={14}
                                fontWeight={500}
                                color={colorPalette.gray900}
                                sx={{ opacity: .6 }}
                            >
                                Platform
                            </Typography>

                            <Typography
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                fontSize={14}
                                fontWeight={400}
                                color={colorPalette.blue800}
                                border={'1px solid rgba(39, 64, 82, 0.1)'}
                                borderRadius={160}
                                p={'0px 20px'}
                                height={37}
                                width={'fit-content'}
                            >
                                {paltform ?? ''}
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        flexDirection={'row'}
                    >
                        <Box
                            display={'flex'}
                            flex={1}
                            flexDirection={'column'}
                            gap={'10px'}
                        >
                            <Typography
                                fontSize={14}
                                fontWeight={500}
                                color={colorPalette.gray900}
                                sx={{ opacity: .6 }}
                            >
                                Employee
                            </Typography>

                            <Typography
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                fontSize={14}
                                fontWeight={400}
                                color={colorPalette.blue800}
                                border={'1px solid rgba(39, 64, 82, 0.1)'}
                                borderRadius={160}
                                p={'0px 20px'}
                                height={37}
                                width={'fit-content'}
                            >
                                {employee ?? ''}
                            </Typography>
                        </Box>

                        <Box
                            display={'flex'}
                            flex={1}
                            flexDirection={'column'}
                            gap={'10px'}
                        >
                            <Typography
                                fontSize={14}
                                fontWeight={500}
                                color={colorPalette.gray900}
                                sx={{ opacity: .6 }}
                            >
                                Referral
                            </Typography>

                            <Typography
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                fontSize={14}
                                fontWeight={400}
                                color={colorPalette.blue800}
                                border={'1px solid rgba(39, 64, 82, 0.1)'}
                                borderRadius={160}
                                p={'0px 20px'}
                                height={37}
                                width={'fit-content'}
                            >
                                {referral ?? ''}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>

                <Divider flexItem={true} variant={'fullWidth'} />

                <Stack
                    alignItems={'center'}
                    justifyContent={'center'}
                    p={'0px 24px'}
                    height={83}
                >
                    {actions}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default RewardCard;