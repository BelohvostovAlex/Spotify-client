import React from "react";

import { Box, TextField } from "@mui/material";

import { StepItemProps } from "./interface";
import { styles } from "./styles";

const StepItem: React.FC<StepItemProps> = ({
  field1,
  field2,
  field3,
  artist,
  changeArtist,
  changeName,
  changeText,
  name,
  text,
}) => {
  return (
    <Box sx={styles.stepItemWrapper}>
      <TextField
        label={field1}
        sx={styles.stepItemTextField}
        value={name}
        onChange={changeName}
      />
      <TextField
        label={field2}
        sx={styles.stepItemTextField}
        value={artist}
        onChange={changeArtist}
      />
      <TextField
        label={field3}
        multiline
        rows={3}
        sx={styles.stepItemTextField}
        value={text}
        onChange={changeText}
      />
    </Box>
  );
};

export default StepItem;
