import { FC, ChangeEvent } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

import { colorPalette, Tag } from 'ui';

const NotifItem: FC<NotifItemProps> = ({
    checked,
    id,
    labelId,
    onSelect
}) => {
    return (
        <Stack
            p={'16px 0px 24px 0px'}
            borderBottom={'1px solid rgba(0, 0, 0, .1)'}
            px={'30px'}
            sx={{
                transition: 'all ease .2s',
                ':hover': {
                    boxShadow: '0px 2px 9px rgba(142, 142, 142, 0.55)',
                    borderBottomWidth: '0px',
                }
            }}
        >
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'6px'}
                >
                    <Checkbox
                        checked={checked}
                        onChange={(event) => onSelect(event, id)}
                        inputProps={{
                            'aria-labelledby': labelId,
                        }}
                        sx={{
                            '& svg > path': {
                                fill: 'rgba(4, 9, 33, 0.32)'
                            },
                            '&.Mui-checked': {
                                '& svg > path': {
                                    fill: colorPalette.blue800
                                },
                            }
                        }}
                    />
                    <Typography
                        fontSize={18}
                        fontWeight={600}
                    >
                        Title Placeholde
                    </Typography>

                    <Typography
                        component={'span'}
                        bgcolor={colorPalette.gray900}
                        padding={'1.5px'}
                        borderRadius={'50%'} />

                    <Tag
                        title={'Contact support'}
                        type={'none'}
                        hasIcon={false}
                        mode={'circle'}
                        sx={{
                            bgcolor: 'rgba(182, 182, 182, 0.15)'
                        }}
                    />
                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'20px'}
                >
                    <Tooltip title={'Archive'}>
                        <ArchiveOutlinedIcon style={{ cursor: 'pointer' }} />
                    </Tooltip>

                    <Typography
                        fontSize={12}
                        fontWeight={500}
                        textAlign={'right'}
                        sx={{ opacity: .5 }}
                    >
                        6 May 2023
                    </Typography>

                </Stack>

            </Stack>

            <Stack
                gap={'6px'}
                pt={'11px'}
                pb={'12px'}
            >
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    sx={{ opacity: .8 }}
                >
                    {`From: ${'Johnwick'}`}
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={500}
                    sx={{ opacity: .8 }}
                >
                    {`Email: ${'Johnwick@gmail.com'}`}
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={500}
                    sx={{ opacity: .8 }}
                >
                    {`Phone number: ${'+44 89128XXXXX'}`}
                </Typography>

            </Stack>

            <Stack
                width={'100%'}
                bgcolor={colorPalette.gray15}
            >
                <Typography
                    fontSize={14}
                    fontWeight={400}
                    p={'20px'}
                    maxWidth={'80%'}
                    lineHeight={'22px'}
                >
                    Lorem ipsum dolor sit amet consectetur. Amet tristique faucibus risus elit et. Mi morbi id lacus semper dolor. Velit quis suspendisse ut gravida massa aliquet at amet. Luctus lacus in diam metus leo et. Cras elementum augue etiam sed fermentum amet risus eros. In iaculis ornare nullam porttitor sed commodo. Sapien scelerisque tellus morbi molestie eget.
                </Typography>

            </Stack>
        </Stack>
    );
};

export interface NotifItemProps {
    onSelect: (event: ChangeEvent<HTMLInputElement>, index: string) => void;
    checked: boolean;
    id: string;
    labelId: string;
}

export default NotifItem;