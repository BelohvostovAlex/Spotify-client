import React from "react";

import { Pause, PlayArrow } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { PlayPauseBtnProps } from "./interface";

const PlayPauseBtn: React.FC<PlayPauseBtnProps> = ({ active }) => {
  return (
    <IconButton onClick={(e) => e.stopPropagation()}>
      {active ? <Pause /> : <PlayArrow />}
    </IconButton>
  );
};

export default PlayPauseBtn;
