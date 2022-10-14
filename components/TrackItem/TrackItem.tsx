import React from "react";
import { useRouter } from "next/router";

import PlayPauseBtn from "../PlayPauseBtn/PlayPauseBtn";

import { Box, Card, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { TrackItemProps } from "./interface";
import { styles } from "./styles";
import TrackItemInfo from "../TrackItemInfo/TrackItemInfo";

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  return (
    <Card
      sx={styles.trackItem}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <PlayPauseBtn active={active} />
      <Box sx={styles.trackItemImg} component={"img"} src={track.picture} />
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
