import React, { useState } from "react";

import StepWrapper from "../../components/StepWrapper/StepWrapper";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { Box, Button, Typography } from "@mui/material";

import { styles } from "../../styles/pages/createTrackPage";

const createTrack = () => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && <Typography>Step 1</Typography>}
        {activeStep === 1 && <Typography>Step 2</Typography>}
        {activeStep === 2 && <Typography>Step 3</Typography>}
      </StepWrapper>
      <Box sx={styles.createTrackBtnsWrapper}>
        <Button onClick={back} disabled={activeStep === 0}>
          back
        </Button>
        <Button onClick={next}>next</Button>
      </Box>
    </MainLayout>
  );
};

export default createTrack;
