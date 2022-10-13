import React from "react";

import { Box, Card } from "@mui/material";

import { styles } from "./styles";
import { TrackItemProps } from "./interface";

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return <Card sx={styles.trackItem}>{track.name}</Card>;
};

export default TrackItem;
