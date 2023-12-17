'use client';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';
import styles from './index.module.scss';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { useRouter } from 'next/navigation';

const CheckAvailability = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobileBreakPoint = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timeOut = setTimeout(() => {
      router.push('/check-avail-result');
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const AnimatedLoading = useCallback(
    () => (
      <React.Fragment>
        <Image
          className={styles['way-1']}
          width={2500}
          height={2500}
          src={`/loading-1.png`}
          alt={'loading-1'}
        />
        <Image
          className={styles['way-2']}
          width={2500}
          height={2500}
          src={`/loading-2.png`}
          alt={'loading-2'}
        />
        <Image
          className={styles['way-3']}
          width={2500}
          height={2500}
          src={`/loading-3.png`}
          alt={'loading-3'}
        />
        <Image
          className={styles['logo']}
          width={2500}
          height={2500}
          src={`/rounded-logo.png`}
          alt={'rounded-logo'}
        />
      </React.Fragment>
    ),
    [isMobileBreakPoint]
  );

  return (
    <ThemeRegistry>
      <Box className={styles.page}>
        <AnimatedLoading />

        <Typography
          variant={isMobileBreakPoint ? 'caption' : 'h4'}
          sx={{
            position: 'absolute',
            left: '50%',
            bottom: '10%',
            transform: `translate(-50%)`,
            width: 'calc(100vw - 4rem)',
            color: 'white',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          Checking your business name availability ...
        </Typography>
      </Box>
    </ThemeRegistry>
  );
};

export default CheckAvailability;
