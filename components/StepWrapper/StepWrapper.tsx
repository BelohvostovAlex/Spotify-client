import React from "react";

import { Stepper, Box, Step, StepLabel, Card } from "@mui/material";

import { StepWrapperProps } from "./interface";
import { styles } from "./styles";

const steps = [
  "Info about the track",
  "upload an album cover",
  "upload the track",
];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Box sx={styles.stepWrapper}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={styles.stepContentWrapper}>
        <Card sx={styles.stepWrapperCard}>{children}</Card>
      </Box>
    </Box>
  );
};

export default StepWrapper;
