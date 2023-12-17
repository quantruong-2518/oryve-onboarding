import {
  Box,
  OutlinedInput,
  InputAdornment,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export const ButtonCheckAvailability = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobileBreakPoint = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <OutlinedInput
        size={isMobileBreakPoint ? 'small' : 'medium'}
        sx={{
          backgroundColor: 'white',
          width: {
            xs: 'calc(100vw - 4rem)',
            md: '32vw',
          },
        }}
        color="info"
        id="filled-adornment-availability"
        placeholder="Enter your business name here"
        endAdornment={
          !isMobileBreakPoint && (
            <InputAdornment position="start">
              <Button
                onClick={() => router.push('/check-availability')}
                sx={{
                  color: 'white',
                }}
                variant="contained"
                size="small"
                color="secondary"
              >
                Check Availability
              </Button>
            </InputAdornment>
          )
        }
      />
      {!!isMobileBreakPoint && (
        <Button
          onClick={() => router.push(`/check-availability`)}
          sx={{ color: 'white' }}
          variant="contained"
          size="small"
          color="secondary"
        >
          Check Availability
        </Button>
      )}
    </Box>
  );
};
