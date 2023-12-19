import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import StepperLine from '../../../assets/icons/stepper-line.svg';
import styles from './index.module.scss';
import { TProps } from './type';

export const Stepper = ({ steps, currentStep = 0 }: TProps) => {
  const theme = useTheme();
  const isMobileBreakPoint = useMediaQuery(theme.breakpoints.down('sm'));

  const showStepIdentity = useCallback(
    (stepIndex: number) => {
      if (isMobileBreakPoint) {
        return currentStep === stepIndex;
      }

      return true;
    },
    [isMobileBreakPoint]
  );

  return (
    <Box className={styles.stepper}>
      {steps.map((step, index) => {
        return (
          <Box className={styles.step} key={`${step.name}+${index}`}>
            <Image
              className={styles.line}
              width={10}
              height={10}
              src={StepperLine}
              alt={'stepper-line'}
            />

            {showStepIdentity(index) && (
              <Box className={styles['step-name']}>
                {step.icon}
                <Typography whiteSpace="nowrap" fontSize="0.875rem">
                  {step.name}
                </Typography>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

Stepper;
