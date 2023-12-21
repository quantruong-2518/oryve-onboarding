import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

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
  useMediaQuery,
  useTheme,
} from '@mui/material';

const BusinessInfoStep = () => {
  const CYPRUS_BENEFITS = [
    '12,5 % Income Tax',
    '0% tax on Dividends',
    'Business friendly Tax Office',
    '2,5% tax on Intellectual Property',
    'Fast growing Business Network',
  ];

  const theme = useTheme();
  const isMobileBreakPoint = useMediaQuery(theme.breakpoints.down('sm'));

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

  const CyprusBenefits = useCallback(() => {
    return (
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '48%',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Image
            style={{
              objectFit: 'contain',
              width: '100%',
              height: 'auto',
            }}
            width={1600}
            height={900}
            src={'/cyprus-thumb.png'}
            alt={'cyprus-thumb'}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                sx: 'column',
                md: 'row',
              },
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            {CYPRUS_BENEFITS.map((cyprusBenefit, index) => {
              return (
                <Box
                  sx={{
                    display: 'flex',
                    gap: {
                      sx: '0.25rem',
                      md: '0.5rem',
                    },
                    fontSize: '0.75rem',
                  }}
                  key={cyprusBenefit}
                >
                  <CheckCircleOutlined fontSize="small" color="success" />
                  <Typography color="white" variant="caption">
                    {cyprusBenefit}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  }, []);

  const BusinessForm = useCallback(() => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: {
            xs: '100%',
            md: '48%',
          },
        }}
      >
        <Typography variant="h6" color="white">
          Alright, let’s start with some basic information.
        </Typography>
        {/* Form  */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <BasicInfo />
          <Divider sx={{ border: '1px dashed rgba(255, 255, 255, 0.25)' }} />
          <ServiceInfo />
        </Box>
        {!isMobileBreakPoint && <Footer />}
      </Box>
    );
  }, [isMobileBreakPoint]);

  const Footer = useCallback(() => {
    return (
      <Box
        sx={{
          flexFlow: 1,
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
          size={isMobileBreakPoint ? 'medium' : 'large'}
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
      <Box
        sx={{
          display: 'flex',
          padding: '1rem 0',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          gap: '4rem',
          justifyContent: 'space-between',
          paddingX: '20rem',
        }}
      >
        <BusinessForm></BusinessForm>
        <CyprusBenefits />
        {!!isMobileBreakPoint && <Footer />}
      </Box>
    </>
  );
};

export default BusinessInfoStep;
