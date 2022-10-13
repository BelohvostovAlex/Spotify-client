import React from "react";

import { Box, Card, IconButton, Typography } from "@mui/material";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";

import { TrackItemProps } from "./interface";
import { styles } from "./styles";
import { useRouter } from "next/router";

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  return (
    <Card
      sx={styles.trackItem}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Box sx={styles.trackItemImg} component={"img"} src={track.picture} />
      <Box sx={styles.trackItemInfo}>
        <Typography>{track.name}</Typography>
        <Typography sx={styles.trackItemName}>{track.artist}</Typography>
      </Box>
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
