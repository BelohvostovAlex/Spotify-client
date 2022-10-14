import React, { useState } from "react";

import StepWrapper from "../../components/StepWrapper/StepWrapper";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StepItem from "../../components/StepItem/StepItem";
import { Box, Button } from "@mui/material";

import { styles } from "../../styles/pages/createTrackPage";
import FileUpload from "../../components/FileUpload/FileUpload";

const createTrack = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

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
        {activeStep === 0 && (
          <StepItem
            field1={"Track name"}
            field2={"Artist name"}
            field3={"Track words"}
          />
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Upload album cover</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Upload audio</Button>
          </FileUpload>
        )}
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
