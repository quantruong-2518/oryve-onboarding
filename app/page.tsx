'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import { Box, Button, FormControl, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const MainContent = useCallback(() => {
    return (
      <Box className={styles.main}>
        <Box className={styles['heading']}>
          <Typography color="white" fontSize="2.5rem">
            Create your digital business
          </Typography>
          <Typography color="primary" fontSize="2.5rem">
            in CYPRUS
          </Typography>
        </Box>

        <Typography fontSize="0.875rem" color="#cfcfcf">
          Company formation Service to grow your individual Freedom
        </Typography>

        <FormControl variant="filled">
          <OutlinedInput
            sx={{ backgroundColor: 'white', width: '32rem' }}
            color="info"
            id="filled-adornment-availability"
            placeholder="Enter your business name here"
            endAdornment={
              <InputAdornment position="end">
                <Button
                  onClick={() => router.push('/check-availability')}
                  sx={{ color: 'white' }}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Check Availability
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    );
  }, []);

  return (
    <main className={styles.page}>
      <Image
        style={{ objectFit: 'contain', width: '100vw', height: '100vh' }}
        width={2500}
        height={2500}
        src={`/sub-bg-1.png`}
        alt={'sub-bg-1'}
      />

      <MainContent />
    </main>
  );
}
