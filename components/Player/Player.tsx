import React from "react";

import { Box } from "@mui/material";
import PlayPauseBtn from "../PlayPauseBtn/PlayPauseBtn";

import { PlayerProps } from "./interface";
import { styles } from "./styles";
import { ITrack } from "../../types/track";
import TrackItemInfo from "../TrackItemInfo/TrackItemInfo";

const Player: React.FC<PlayerProps> = () => {
  const active = false;
  const track: ITrack = {
    _id: "1",
    artist: "artist",
    audio: "audio",
    text: "text",
    listens: 5,
    comments: [],
    name: "name",
    picture: "pic",
  };
  return (
    <Box sx={styles.playerWrapper}>
      <PlayPauseBtn active={active} />
      <TrackItemInfo name={track.name} artist={track.artist} />
    </Box>
  );
};

export default Player;
