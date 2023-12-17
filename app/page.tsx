'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { ButtonCheckAvailability } from './components';

export default function Home() {
  const router = useRouter();
  const theme = useTheme();
  const isMobileBreakPoint = useMediaQuery(theme.breakpoints.down('sm'));

  const MainContent = useCallback(() => {
    return (
      <Box className={styles.main}>
        <Box
          sx={{
            width: {
              xs: 'max-content',
              md: 'unset',
            },
          }}
          className={styles['heading']}
        >
          <Typography
            color="white"
            sx={{
              fontSize: {
                xs: '1.5rem',
                md: '2.5rem',
              },
            }}
          >
            Create your digital business
          </Typography>
          <Typography
            color="primary"
            sx={{
              fontSize: {
                xs: '1.5rem',
                md: '2.5rem',
              },
            }}
            fontSize="2.5rem"
          >
            in CYPRUS
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: {
              xs: '0.675rem',
              md: '0.875rem',
            },
          }}
          color="#cfcfcf"
        >
          Company formation Service to grow your individual Freedom
        </Typography>

        <ButtonCheckAvailability />
      </Box>
    );
  }, [isMobileBreakPoint]);

  return (
    <main className={styles.page}>
      <Image
        className={styles['sub-bg']}
        width={2500}
        height={2500}
        src={`/sub-bg-1.png`}
        alt={'sub-bg-1'}
      />

      <MainContent />
    </main>
  );
}
