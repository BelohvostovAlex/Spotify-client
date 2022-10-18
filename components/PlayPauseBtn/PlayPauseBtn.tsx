import React from "react";

import { Pause, PlayArrow } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { PlayPauseBtnProps } from "./interface";

const PlayPauseBtn: React.FC<PlayPauseBtnProps> = ({
  pause,
  onClick,
  active,
}) => {
  return (
    <IconButton onClick={onClick}>
      {!pause ? <Pause /> : <PlayArrow />}
    </IconButton>
  );
};

export default PlayPauseBtn;
