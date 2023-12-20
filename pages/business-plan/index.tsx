import ThemeRegistry from '@/theme/ThemeRegistry';
import React, { useCallback, useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Head from 'next/head';
import { Stepper } from '@/app/components';

// ? Icons
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PaymentsIcon from '@mui/icons-material/Payments';
import CompanyPositionStep from './company-position';
import SelectPackageStep from './select-package';
import PaymentStep from './payment';
import BusinessInfoStep from './business-info';
import { useSearchParams } from 'next/navigation';

const BusinessPlan = () => {
  // ? Hooks
  const theme = useTheme();
  const isMobileBreakPoint = useMediaQuery(theme.breakpoints.down('sm'));
  const businessParams = useSearchParams();
  const activateStep = businessParams?.get('step') || '0';

  const steps = [
    {
      name: 'Business info',
      icon: <WorkOutlineIcon fontSize={'small'} />,
    },
    {
      name: 'Company positions',
      icon: <PeopleOutlineIcon fontSize={'small'} />,
    },
    {
      name: 'Select package',
      icon: <Inventory2OutlinedIcon fontSize={'small'} />,
    },
    {
      name: 'Payment',
      icon: <PaymentsIcon fontSize={'small'} />,
    },
  ];

  // ? Components
  const Header = useCallback(() => {
    return (
      <Box className={styles.header}>
        <Image
          width={200}
          height={40}
          src={`/logo-wire.png`}
          alt={'logo-wire'}
        />
        <Stepper currentStep={activateStep} steps={steps} />
      </Box>
    );
  }, [activateStep]);

  const StepContent = useCallback(() => {
    switch (activateStep) {
      case '1':
        return <CompanyPositionStep />;
      case '2':
        return <SelectPackageStep />;
      case '3':
        return <PaymentStep />;

      default:
        return <BusinessInfoStep />;
    }
  }, [activateStep]);

  const MainContent = useCallback(() => {
    return (
      <Box className={styles.main}>
        <Header />
        <StepContent />
      </Box>
    );
  }, [activateStep]);

  // ? Functions

  return (
    <ThemeRegistry>
      <Head>
        <title>Business plan</title>
      </Head>
      <main className={styles.page}>
        <Image
          className={styles['sub-bg']}
          width={2500}
          height={2500}
          src={`/sub-bg-3.png`}
          alt={'sub-bg-3'}
        />

        <MainContent />
      </main>
    </ThemeRegistry>
  );
};

export default BusinessPlan;
