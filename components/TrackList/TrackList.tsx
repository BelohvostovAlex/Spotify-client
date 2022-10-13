import React from "react";

import { Box } from "@mui/material";

import { TrackListProps } from "./interface";
import TrackItem from "../TrackItem/TrackItem";

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Box>
      {tracks.map((track) => (
        <TrackItem key={track._id} track={track} />
      ))}
    </Box>
  );
};

export default TrackList;
