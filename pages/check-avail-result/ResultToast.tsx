import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import AvailabilityCheckedIcon from '../../assets/icons/availability-checked.svg';
import AvailabilityErrorIcon from '../../assets/icons/availability-error.svg';

const ResultToast = ({ status }: { status: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem',
        flexDirection: 'row',
        width: {
          xs: 'calc(100vw - 4rem)',
          md: '24rem',
        },
        alignItems: 'center',
        justifyContent: 'center',
        background:
          status === 'success'
            ? `linear-gradient(90deg, rgba(2,170,176,0.2945553221288515) 40%, rgba(0,205,172,1) 100%)`
            : `rgba(237, 66, 30, 0.24)`,
        padding: '0.5rem',
        borderRadius: '0.5rem',
      }}
    >
      <Image
        src={
          status === 'success' ? AvailabilityCheckedIcon : AvailabilityErrorIcon
        }
        width={40}
        height={40}
        alt="checked"
      />
      <Typography variant="h6" color="white">
        Motion Magic by Emilia
      </Typography>
    </Box>
  );
};

export default ResultToast;
