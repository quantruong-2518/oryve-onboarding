import Link from 'next/link';
import Image from 'next/image';

import React, { useCallback } from 'react';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
  Button,
} from '@mui/material';

const SelectPackageStep = () => {
  const BasicInfo = useCallback(() => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextField
          size="small"
          sx={{ borderColor: 'white' }}
          fullWidth
          variant="outlined"
          label="Business name"
          placeholder="Enter your business name"
          InputProps={{
            defaultValue: 'Motion Magic by Emilia LTC',
            sx: { color: 'white' },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {}}
                  onMouseDown={() => {}}
                >
                  <EditOutlinedIcon fontSize="small" sx={{ color: 'white' }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          label="Your name"
          placeholder="Enter your name here"
        />
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          label="Email"
          placeholder="Enter your email name"
        />
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          label="Business industries"
          placeholder="Enter your business industry name"
        />
      </Box>
    );
  }, []);

  const ServiceInfo = useCallback(() => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box color="white">Business service</Box>
          <IconButton color="primary">
            <AddCircleOutlineIcon />
          </IconButton>
        </Box>
        {[
          'IT help desk',
          'Provide high quality Devops engineers',
          'Personal management',
        ].map((service, index) => (
          <TextField
            key={index}
            sx={{ color: 'white' }}
            size="small"
            fullWidth
            variant="outlined"
            label={`Service #${index + 1}`}
            placeholder="Enter your service name"
            InputProps={{
              defaultValue: service,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {}}
                    onMouseDown={() => {}}
                  >
                    <DeleteOutlineIcon
                      fontSize="small"
                      sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ))}
      </Box>
    );
  }, []);

  const BusinessForm = useCallback(() => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h6" color="white">
          Alright, let’s start with some basic information.
        </Typography>
        {/* Form  */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <BasicInfo />
          <Divider sx={{ border: '1px dashed rgba(255, 255, 255, 0.25)' }} />
          <ServiceInfo />
        </Box>
      </Box>
    );
  }, []);

  const Footer = useCallback(() => {
    return (
      <Box
        sx={{
          width: '100vw',
          padding: '0 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        <Button
          fullWidth
          sx={{ color: 'white' }}
          variant="contained"
          color="secondary"
        >
          Continue
        </Button>
        <Link href={'/check-avail-result?status=success'}>
          <Typography color="secondary">
            Back to choose another option
          </Typography>
        </Link>
      </Box>
    );
  }, []);

  return (
    <>
      <BusinessForm></BusinessForm>
      <Footer />
    </>
  );
};

export default SelectPackageStep;
