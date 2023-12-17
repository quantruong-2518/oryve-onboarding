'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import styles from './index.module.scss';
import ResultToast from './ResultToast';
import CreationPlan from './CreationPlan';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { ButtonCheckAvailability } from '@/app/components';

export default function CheckAvailabilityResult() {
  // ? Hooks
  const theme = useTheme();
  const isMobileBreakPoint = useMediaQuery(theme.breakpoints.down('sm'));

  const params = useSearchParams();
  const status = params?.get('status') ?? '';

  // ? Inner components
  const Headline = useCallback(
    ({ status }: { status: string }) => {
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
          {status === 'success' ? (
            <>
              <Typography variant="h4" fontWeight={800} color="white">
                Great news!
              </Typography>
              <Typography
                variant={isMobileBreakPoint ? 'caption' : 'body1'}
                color="white"
              >
                {`It appears that the name you've chosen for your business is not already taken. We will conduct a thorough verification of its availability during the process of filing your business formation.`}
              </Typography>
            </>
          ) : (
            <Typography
              variant={isMobileBreakPoint ? 'h6' : 'h5'}
              color="white"
            >
              {`Unfortunately, your business name is not available in CYPRUS, let’s try another one.`}
            </Typography>
          )}
        </Box>
      );
    },
    [status]
  );

  const MainContent = useCallback(() => {
    return (
      <Box className={styles.main}>
        <Headline status={status} />
        <ResultToast status={status} />
        {status === 'success' && <CreationPlan />}
        {status === 'failed' && <ButtonCheckAvailability />}
      </Box>
    );
  }, [status]);

  return (
    !!status && (
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
    )
  );
}
