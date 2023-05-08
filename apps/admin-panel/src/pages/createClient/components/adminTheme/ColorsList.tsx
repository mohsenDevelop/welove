import Stack from '@mui/material/Stack';

import { UseAdminTheme } from '@hooks/useAdminTheme';
import { colorsType } from './AdminThemeProvider';
import ColorPicker from './ColorPicker';

const list = [
    {
        id: '1',
        name: 'mainColor',
        title: 'Main Color',
        caption: 'For Main color'
    },
    {
        id: '2',
        name: 'sidebarSecondaryColor',
        title: 'Secondary color',
        caption: 'Side bar'
    },
    {
        id: '3',
        name: 'sidebarTextColor',
        title: 'Text Color',
        caption: 'Side bar Typography'
    },
    {
        id: '4',
        name: 'hiresColor',
        title: 'Hires Color',
        caption: ''
    },
    {
        id: '5',
        name: 'applicationsColor',
        title: 'Applications Color',
        caption: ''
    },
    {
        id: '6',
        name: 'sharesColor',
        title: 'Shares Color',
        caption: ''
    },
    {
        id: '7',
        name: 'pointsColor',
        title: 'Points Color',
        caption: ''
    },
]
const ColorsList = () => {

    const { themeColors, toggleTheme } = UseAdminTheme();

    console.log({ themeColors });

    const handleChangeColor = (color: string, name: keyof colorsType) => {
        toggleTheme(name, color);
    };

    return (
        <Stack
            display={'grid'}
            gridTemplateColumns={'repeat(3, 218px)'}
            gap={'54px'}
        >
            {
                list.map((_el) => (
                    <ColorPicker
                        title={_el.title}
                        caption={_el.caption}
                        name={_el.name as keyof colorsType}
                        onChange={handleChangeColor}
                    />
                ))
            }
        </Stack>
    );
};

export default ColorsList;