import { createTheme } from '@mui/material/styles';
import { colorPalette } from 'ui';

export const theme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontSize: 14,
                    fontWeight: 400,

                },

            }
        },

        MuiCssBaseline: {
            styleOverrides: {
                svg: {
                    margin: 0,
                },
                a: {
                    textDecoration: 'none',
                },
            },
        },
    },
    typography: {
        fontFamily: 'Inter',
        allVariants: {
            color: '#363537'

        },
        h1: {
            fontSize: 28,
            fontWeight: 600,
            color: '#274052'
        }
    },
    palette: {
        primary: {
            main: '#884EB9'
        }
    },
});
