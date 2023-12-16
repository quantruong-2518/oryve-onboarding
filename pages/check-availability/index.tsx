'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useCallback } from 'react';
import styles from './index.module.css';
import ThemeRegistry from '@/theme/ThemeRegistry';

const CheckAvailability = () => {
  const AnimatedLoading = useCallback(
    () => (
      <Box className={styles['loading-animated']}>
        <Image className={styles['way-1']} width={2500} height={2500} src={`/loading-1.png`} alt={'loading-1'} />
        <Image className={styles['way-2']} width={2500} height={2500} src={`/loading-2.png`} alt={'loading-2'} />
        <Image className={styles['way-3']} width={2500} height={2500} src={`/loading-3.png`} alt={'loading-3'} />
        <Image className={styles['logo']} width={2500} height={2500} src={`/rounded-logo.png`} alt={'rounded-logo'} />
      </Box>
    ),
    []
  );

  return (
    <ThemeRegistry>
      <Box className={styles.page}>
        <AnimatedLoading />

        <Typography sx={{ position: 'absolute', bottom: '10%' }} fontSize="1.5rem" fontWeight="700" color="white">
          Checking your business name availability ...
        </Typography>
      </Box>
    </ThemeRegistry>
  );
};

export default CheckAvailability;
