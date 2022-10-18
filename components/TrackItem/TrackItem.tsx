import React from "react";
import { useRouter } from "next/router";
import { useActions } from "../../hooks/useActions";

import PlayPauseBtn from "../PlayPauseBtn/PlayPauseBtn";
import TrackItemInfo from "../TrackItemInfo/TrackItemInfo";
import { Box, Card, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { TrackItemProps } from "./interface";
import { styles } from "./styles";
import { SERVER_URL } from "../../config/apiConstants";

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const { setPlay, setPause, setActive } = useActions();

  const playHandler = (e) => {
    e.stopPropagation();
    setActive(track);
    setPlay();
  };

  return (
    <Card
      sx={styles.trackItem}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <PlayPauseBtn pause={active} onClick={playHandler} />
      <Box
        sx={styles.trackItemImg}
        component={"img"}
        src={SERVER_URL + track.picture}
      />
      <TrackItemInfo artist={track.artist} name={track.name} />
      {active && <Box>02:42 / 03:22</Box>}
      <IconButton
        sx={styles.trackItemDeleteBtn}
        onClick={(e) => e.stopPropagation()}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
