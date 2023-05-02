import { useState, MouseEvent } from 'react';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {
    Button,
    colorPalette,
    Search
} from 'ui';
import {
    DoneIcon
} from 'assets-ui';
import { StyledMenu } from './style';

const companyList = [
    {
        id: '1',
        name: 'Sellstaged Workspace'
    },
    {
        id: '2',
        name: 'meta Workspace'
    },
    {
        id: '3',
        name: 'google Workspace'
    },
    {
        id: '4',
        name: '23rd Workspace'
    },
    {
        id: '5',
        name: 'youtube Workspace'
    },
];

const WorkspaceMenu = () => {

    const [selected, setSelected] = useState<{ id: string, name: string } | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectItem = (item: { id: string, name: string }) => {
        setSelected(item);
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id='role-workspace-more-button'
                aria-controls={open ? 'role-workspace-more-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                variant={'outlined'}
                LabelColor={colorPalette.blue800}
                borderColor={'rgba(0, 0, 0, 0.12)'}
                endIcon={open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
                sx={{
                    height: 52,
                    fontWeight: 600,
                    fontSize: 13
                }}
                onClick={handleClick}
            >
                {selected ? selected.name : 'Select Workspace'}
            </Button>

            <StyledMenu
                id='role-news-more-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    '.MuiMenu-paper': { width: 403 }
                }}
            >
                <Stack>
                    <Typography
                        fontSize={16}
                        fontWeight={600}
                        pb={'28px'}
                    >
                        Select company workspace
                    </Typography>

                    <Typography
                        fontSize={14}
                        fontWeight={500}
                        pb={'10px'}
                        sx={{ opacity: .6 }}
                    >
                        Search by company
                    </Typography>

                    <Search
                        onSearch={(value: string) => { return; }}
                        placeHolder='company name'
                        sx={{
                            height: 44,
                            width: '100%'
                        }}
                    />

                    <Stack
                        pt={'20px'}
                        maxHeight={200}
                        overflow={'scroll'}
                    >
                        {
                            companyList.map((_el) => (
                                <Box
                                    key={_el.id}
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                    height={50}
                                    minHeight={50}
                                    borderRadius={'10px'}
                                    px={'10px'}
                                    bgcolor={selected?.id === _el.id ? 'rgba(138, 138, 138, 0.1)' : 'inherit'}
                                    sx={{
                                        transition: 'all ease .2s',
                                        cursor: 'pointer',
                                        ':hover': {
                                            bgcolor: 'rgba(138, 138, 138, 0.1)'
                                        },
                                        '& svg > path': {
                                            fill: colorPalette.pink20
                                        }
                                    }}

                                    onClick={() => handleSelectItem(_el)}
                                >
                                    <Typography
                                        fontSize={13}
                                        fontWeight={500}
                                        color={colorPalette.blue800}
                                    >
                                        {_el.name}
                                    </Typography>

                                    {selected?.id === _el.id ? <DoneIcon style={{ color: 'red' }} /> : null}
                                </Box>
                            ))
                        }

                    </Stack>

                </Stack>
            </StyledMenu>
        </div>
    );
};

export default WorkspaceMenu;