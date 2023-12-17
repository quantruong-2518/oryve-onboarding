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
