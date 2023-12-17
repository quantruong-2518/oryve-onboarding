'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';
import ResultToast from './ResultToast';
import CreationPlan from './CreationPlan';
import ThemeRegistry from '@/theme/ThemeRegistry';

export default function CheckAvailabilityResult() {
  const router = useRouter();
  const theme = useTheme();
  const isMobileBreakPoint = useMediaQuery(theme.breakpoints.down('sm'));

  const Headline = useCallback(() => {
    return (
      <Box
        sx={{
          width: {
            xs: 'max-content',
            md: 'unset',
          },
        }}
        className={styles['heading']}
      >
        <Typography variant="h4" fontWeight={800} color="white">
          Great news!
        </Typography>
        <Typography
          variant={isMobileBreakPoint ? 'caption' : 'body1'}
          color="white"
        >
          {`It appears that the name you've chosen for your business is not already taken. We will conduct a thorough verification of its availability during the process of filing your business formation.`}
        </Typography>
      </Box>
    );
  }, []);

  const MainContent = useCallback(() => {
    return (
      <Box className={styles.main}>
        <Headline />
        <ResultToast />
        <CreationPlan />
      </Box>
    );
  }, [isMobileBreakPoint]);

  return (
    <ThemeRegistry>
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
    </ThemeRegistry>
  );
}
