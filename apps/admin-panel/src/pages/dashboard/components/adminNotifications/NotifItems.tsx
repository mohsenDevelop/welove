import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Tag, colorPalette } from 'ui';
import { UserFillIcon } from 'assets-ui';

const NotifItems = () => {
    return (
        <>
            {
                Array(5).fill({}).map((_el, _index: number) => (
                    <Stack
                        key={_index.toString()}
                        p={'24px 0px'}
                        borderBottom={_index + 1 !== 5 ? '1px solid rgba(0, 0, 0, 0.08)' : 'unset'}
                    >
                        <Typography
                            fontSize={12}
                            fontWeight={500}
                            textAlign={'right'}
                            sx={{ opacity: .5 }}
                        >
                            6 may
                        </Typography>

                        <Stack
                            flexDirection={'row'}
                            alignItems={'center'}
                            gap={'6px'}
                        >
                            <Typography
                                fontSize={14}
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
                                title={'Company name'}
                                type={'company'}
                                mode={'circle'}
                                Icon={<UserFillIcon />}
                            />
                        </Stack>

                        <Typography
                            maxWidth={'85%'}
                            fontSize={13}
                            fontWeight={400}
                            pt={'10px'}
                            noWrap={true}
                            sx={{ opacity: .8 }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit curabitur in platea suspendisse. Diam amet, duis ut magna
                        </Typography>
                    </Stack>
                ))
            }

        </>
    );
};

export default NotifItems;