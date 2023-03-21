import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export interface ColorModeProps {
  children: React.ReactNode;
}
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const ColorModeProvider = ({ children }: ColorModeProps) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userPreference = window.localStorage.getItem('theme');
      if (userPreference && userPreference === 'light') {
        setMode('light');
      } else setMode('dark');
    }
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        localStorage.setItem('theme', mode === 'dark' ? 'light' : 'dark');
      },
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                primary: {
                  main: '#8a7a5b',
                  contrastText: '#fdfcfc',
                },
                secondary: {
                  main: 'rgba(16,127,27,0.67)',
                  contrastText: '#fdfcfc',
                },
                background: {
                  default: '#1c1c1c',
                  paper: '#4a4a4a',
                },
              }
            : {
                primary: {
                  main: 'rgba(140,140,100,0.78)',
                  contrastText: '#000000',
                },
                secondary: {
                  main: 'rgba(3,92,12,0.68)',
                  contrastText: '#000000',
                },
                background: {
                  default: '#e6e6e6',
                  paper: '#f9f9f9',
                },
              }),
        },
        typography: {
          fontFamily: roboto.style.fontFamily,
        },
        components: {
          MuiTooltip: {
            styleOverrides: {
              arrow: true,
              tooltip: {
                fontSize: '14px',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default ColorModeContext;
