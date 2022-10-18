import React, { useState } from "react";
import axios from "axios";

import { useInput } from "../../hooks/useInput";

import StepWrapper from "../../components/StepWrapper/StepWrapper";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StepItem from "../../components/StepItem/StepItem";
import FileUpload from "../../components/FileUpload/FileUpload";
import { Box, Button } from "@mui/material";

import { styles } from "../../styles/pages/createTrackPage";
import { SERVER_URL } from "../../config/apiConstants";
import { useRouter } from "next/router";

const createTrack = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const [name, changeName] = useInput("");
  const [artist, changeArtist] = useInput("");
  const [text, changeText] = useInput("");

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("artist", artist);
      formData.append("text", text);
      formData.append("picture", picture);
      formData.append("audio", audio);

      axios
        .post(SERVER_URL + "tracks", formData)
        .then((resp) => router.push("/tracks"))
        .catch((e) => console.log(e));
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
            name={name}
            artist={artist}
            text={text}
            changeName={changeName}
            changeArtist={changeArtist}
            changeText={changeText}
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
