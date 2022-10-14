import React from "react";

import { Box } from "@mui/material";
import PlayPauseBtn from "../PlayPauseBtn/PlayPauseBtn";

import { PlayerProps } from "./interface";
import { styles } from "./styles";
import { ITrack } from "../../types/track";
import TrackItemInfo from "../TrackItemInfo/TrackItemInfo";
import TrackProgress from "../TrackProgress/TrackProgress";
import { VolumeUp } from "@mui/icons-material";

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
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </Box>
  );
};

export default Player;
