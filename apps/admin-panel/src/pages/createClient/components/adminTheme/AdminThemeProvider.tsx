import { createContext, FC, useState } from 'react';


export type colorsType = {
  mainColor: string;
  sidebarSecondaryColor: string;
  sidebarTextColor: string;
  hiresColor: string;
  applicationsColor: string;
  sharesColor: string;
  pointsColor: string;
};

export type toggleThemeType = (name: keyof colorsType, value: string) => void;

export type State = {
  themeColors: colorsType,
  toggleTheme: toggleThemeType
};

const initColors = {
  mainColor: '#E5167A',
  sidebarSecondaryColor: '#fff',
  sidebarTextColor: '#274052',
  hiresColor: '#884EB9',
  applicationsColor: '#C2BE33',
  sharesColor: '#2DACC2',
  pointsColor: '#FFA600',
}
export const AdminThemeContext = createContext<State | undefined>(undefined);

const AdminThemeProvider: FC<any> = ({ children }) => {

  const [theme, setTheme] = useState<colorsType>(initColors);

  const toggleTheme = (name: keyof colorsType, value: string) => {

    if (name && value) {
      setTheme((prev: colorsType) => ({ ...prev, [name]: value }));
    }
  }

  return (
    <AdminThemeContext.Provider
      value={{
        themeColors: theme,
        toggleTheme
      }}
    >
      {children}
    </AdminThemeContext.Provider>
  );
};

export default AdminThemeProvider;