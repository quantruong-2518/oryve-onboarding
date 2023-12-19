import React, { useCallback } from 'react';
import { Box, Typography, Button } from '@mui/material';

const CompanyPositionStep = () => {
  const CompanyPositionForm = useCallback(() => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
        }}
      >
        <Box>
          <Typography variant="h6" color="white">
            Please add people for the other positions in your business.
          </Typography>
          <Typography variant="caption" color="white">
            A Cypriot limited company has 4 roles normally.
          </Typography>
        </Box>

        {/* Form  */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Footer />
        </Box>
      </Box>
    );
  }, []);

  const Footer = useCallback(() => {
    return (
      <Box
        sx={{
          width: '100%',
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
        <Button color="primary">
          <Typography variant="caption" color="secondary">
            Go back previous step
          </Typography>
        </Button>
      </Box>
    );
  }, []);

  return <CompanyPositionForm />;
};

export default CompanyPositionStep;
