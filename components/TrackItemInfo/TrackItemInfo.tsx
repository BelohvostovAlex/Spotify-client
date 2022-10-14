import React from "react";

import { Box, Typography } from "@mui/material";

import { TrackItemInfoProps } from "./interface";
import { styles } from "./styles";

const TrackItemInfo: React.FC<TrackItemInfoProps> = ({ name, artist }) => {
  return (
    <Box sx={styles.trackItemInfoWrapper}>
      <Typography>{name}</Typography>
      <Typography sx={styles.trackItemInfoArtist}>{artist}</Typography>
    </Box>
  );
};

export default TrackItemInfo;
