import Stack from '@mui/material/Stack';

import { UseAdminTheme } from '@hooks/useAdminTheme';
import { colorsType } from './AdminThemeProvider';
import ColorPicker from './ColorPicker';

const list = [
    {
        id: '1',
        name: 'mainColor',
        title: 'Main Color',
        caption: 'For Main color',
        defaultColor: '#E5167A',
    },
    {
        id: '2',
        name: 'sidebarSecondaryColor',
        title: 'Secondary color',
        caption: 'Side bar',
        defaultColor: '#FFF',
    },
    {
        id: '3',
        name: 'sidebarTextColor',
        title: 'Text Color',
        caption: 'Side bar Typography',
        defaultColor: '#274052',
    },
    {
        id: '4',
        name: 'hiresColor',
        title: 'Hires Color',
        caption: '',
        defaultColor: '#884EB9',
    },
    {
        id: '5',
        name: 'applicationsColor',
        title: 'Applications Color',
        caption: '',
        defaultColor: '#C2BE33',
    },
    {
        id: '6',
        name: 'sharesColor',
        title: 'Shares Color',
        caption: '',
        defaultColor: '#2DACC2',
    },
    {
        id: '7',
        name: 'pointsColor',
        title: 'Points Color',
        caption: '',
        defaultColor: '#FFA600',
    },
]
const ColorsList = () => {

    const { toggleTheme } = UseAdminTheme();

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
                        defaultColor={_el.defaultColor}
                        name={_el.name as keyof colorsType}
                        onChange={handleChangeColor}
                    />
                ))
            }
        </Stack>
    );
};

export default ColorsList;