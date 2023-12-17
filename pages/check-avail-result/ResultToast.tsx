import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import availabilityCheckedIcon from '../../assets/icons/availability-checked.svg';

const ResultToast = () => {
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
        backgroundImage: `linear-gradient(90deg, rgba(2,170,176,0.2945553221288515) 40%, rgba(0,205,172,1) 100%)`,
        padding: '0.5rem',
        borderRadius: '0.5rem',
      }}
    >
      <Image
        src={availabilityCheckedIcon}
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
