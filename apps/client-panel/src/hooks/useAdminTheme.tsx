import { useContext } from 'react';
import { AdminThemeContext } from '@pages/createClient/components/adminTheme/AdminThemeProvider';


export const UseAdminTheme = () => {
    const context = useContext(AdminThemeContext);
    if (context === undefined) {
        throw new Error("UseAdminTheme must be used within a AdminThemeProvider");
    }
    return context;
}