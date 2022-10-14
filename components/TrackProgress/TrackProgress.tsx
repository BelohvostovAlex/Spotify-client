import React from "react";

import { Box } from "@mui/material";

import { TrackProgressProps } from "./interface";
import { styles } from "./styles";

const TrackProgress: React.FC<TrackProgressProps> = ({
  left,
  right,
  onChange,
}) => {
  return (
    <Box sx={styles.trackProgressWrapper}>
      <input
        type="range"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      />
      <Box>
        {left} / {right}
      </Box>
    </Box>
  );
};

export default TrackProgress;
