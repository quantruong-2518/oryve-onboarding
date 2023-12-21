'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { Raleway } from 'next/font/google';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

const raleway = Raleway({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 16,
    fontFamily: raleway.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#1ECAD8',
    },
    secondary: {
      main: '#FFB300',
    },
    success: {
      main: '#4BB543',
    },
    action: {
      disabled: 'rgba(255, 255, 255, 0.24)',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#082C4E',
          borderTop: '2px solid #00CDAC',
          borderRadius: '0.5rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.24)',
          },
          '& .MuiOutlinedInput-input': {
            color: 'rgba(255, 255, 255)',
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.8)',
          },
          '& .MuiInputBase-input': {
            color: 'rgba(255, 255, 255, 0.5)',
          },
          '& .Mui-disabled': {
            '-webkit-text-fill-color': 'rgba(255, 255, 255, 1)',
          },
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
