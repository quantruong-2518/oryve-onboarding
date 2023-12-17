import Box from '@mui/material/Box';
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Button, Divider, Typography } from '@mui/material';
import BusinessPlanIcon from '../../assets/icons/plan-business.svg';
import PersonalPlanIcon from '../../assets/icons/plan-reserve.svg';
import { MoneyDisplay } from '@/app/components';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import styles from './index.module.scss';

type TTransparentCardProps = {
  children: React.ReactNode;
  icon: string;
  title: string;
  price: number;
  options: Array<string>;
};

const CreationPlan = () => {
  const PlanOptions = useCallback(({ options }: { options: Array<string> }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
        }}
      >
        {options.map((option, index) => {
          const isLast = index === options.length - 1;

          return (
            <>
              <Box
                sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                key={option}
              >
                <CheckCircleOutlinedIcon
                  sx={{ fontSize: '1rem' }}
                  color="success"
                />
                <Typography color={'white'} variant="body1">
                  {option}
                </Typography>
              </Box>

              {!isLast && <Divider sx={{ border: '1px dashed #cfcfcf' }} />}
            </>
          );
        })}
      </Box>
    );
  }, []);

  const TransparentCard = useCallback(
    ({ children, icon, title, price, options }: TTransparentCardProps) => {
      return (
        <Box
          sx={{
            backgroundImage: `linear-gradient(90deg, rgba(8,44,78,0.5074404761904762) 53%, rgba(82,107,131,0.3617822128851541) 100%)`,
            width: {
              sx: 'calc(100vw - 4rem)',
              md: '24vw',
            },
            minHeight: '56vh',
            border: '2px solid #526B83',
            borderRadius: '0.5rem',
            padding: {
              sx: '1rem',
              md: '2rem',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <Box sx={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
            <Image src={icon} width="100" height="100" alt={`card-trans`} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body1" color={'white'}>
                {title}
              </Typography>
              <Typography variant="h4" color={'white'}>
                <MoneyDisplay amount={price} currency="€" />
              </Typography>
            </Box>
          </Box>

          {children}

          <PlanOptions options={options} />
        </Box>
      );
    },
    []
  );

  const PersonalPlan = useCallback(() => {
    return (
      <TransparentCard
        icon={PersonalPlanIcon}
        title={'Reserve for 6 months'}
        price={99}
        options={['Name Reservation', 'Cyprus Guide', 'Agent Support']}
      >
        <Button
          sx={{ color: 'white', width: 'calc(100% - 1rem)' }}
          variant="contained"
          color="secondary"
          size="medium"
        >
          Reserve Business now
        </Button>
      </TransparentCard>
    );
  }, []);

  const BusinessPlan = useCallback(() => {
    return (
      <TransparentCard
        icon={BusinessPlanIcon}
        title={'Company formation from'}
        price={1900}
        options={[
          'Company formation',
          'Immigration Package',
          'Business Records',
          'Physical Address',
          'Digital Postbox',
          'Agent Support',
        ]}
      >
        <Button
          sx={{ color: 'white', width: 'calc(100% - 1rem)' }}
          variant="contained"
          color="secondary"
          size="medium"
        >
          Form company now
        </Button>
      </TransparentCard>
    );
  }, []);

  return (
    <Box className={styles['creation-plan']}>
      <PersonalPlan />
      <BusinessPlan />
    </Box>
  );
};

export default CreationPlan;
