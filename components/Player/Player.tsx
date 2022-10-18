import React, { useEffect } from "react";

import { useAppSelector } from "../../hooks/useAppSelector";

import { Box } from "@mui/material";
import PlayPauseBtn from "../PlayPauseBtn/PlayPauseBtn";
import TrackItemInfo from "../TrackItemInfo/TrackItemInfo";
import TrackProgress from "../TrackProgress/TrackProgress";

import { PlayerProps } from "./interface";
import { styles } from "./styles";
import { ITrack } from "../../types/track";
import { VolumeUp } from "@mui/icons-material";
import { useActions } from "../../hooks/useActions";
import { SERVER_URL } from "../../config/apiConstants";

let audio;

const Player: React.FC<PlayerProps> = () => {
  const { active, currentTime, duration, pause, volume } = useAppSelector(
    (state) => state.player
  );
  const {
    setPlay,
    setPause,
    setActive,
    setCurrentTime,
    setDuration,
    setVolume,
  } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      initAudioHandler();
      playHandler();
    }
  }, [active]);

  const initAudioHandler = () => {
    if (active) {
      audio.src = SERVER_URL + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const playHandler = () => {
    if (pause) {
      setPlay();
      audio.play();
    } else {
      setPause();
      audio.pause();
    }
  };

  const volumeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    audio.volume = value / 100;
    setVolume(value);
  };

  const currentTimeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    audio.currentTime = value;
    setCurrentTime(value);
  };

  if (!active) {
    return null;
  }

  return (
    <Box sx={styles.playerWrapper}>
      <PlayPauseBtn pause={pause} onClick={playHandler} />
      <TrackItemInfo name={active?.name} artist={active?.artist} />
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={currentTimeHandler}
      />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={volume} right={100} onChange={volumeHandler} />
    </Box>
  );
};

export default Player;
