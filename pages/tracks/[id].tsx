import React from "react";
import { useRouter } from "next/router";

import MainLayout from "../../layouts/MainLayout/MainLayout";
import { Button, Box, Typography, TextField } from "@mui/material";

import { styles } from "../../styles/pages/trackPage";

const TrackPage = () => {
  const router = useRouter();
  const track = {
    _id: "1",
    artist: "artist",
    audio: "audio",
    text: "text",
    listens: 5,
    comments: [
      { _id: "1", username: "Alex Mahno", text: "text te xtsda kasdaskdka sk" },
    ],
    name: "name",
    picture: "pic",
  };

  return (
    <MainLayout>
      <Button
        onClick={() => router.push("/tracks")}
        variant="outlined"
        sx={styles.trackPageBtn}
      >
        To track list
      </Button>
      <Box sx={styles.trackPageWrapper}>
        <Box
          sx={styles.trackPageImg}
          component="img"
          src={track.picture}
          alt={track.name}
        />
        <Box sx={styles.trackPageInfoWrapper}>
          <Typography>Track name: {track.name}</Typography>
          <Typography>Artist: {track.artist}</Typography>
          <Typography>Listens: {track.listens}</Typography>
        </Box>
      </Box>
      <Typography>Track's words</Typography>
      <Box component="p">{track.text}</Box>
      <Box>
        <TextField label="Your name" fullWidth sx={styles.trackPageTextField} />
        <TextField
          label="Comment"
          fullWidth
          multiline
          rows={4}
          sx={styles.trackPageTextField}
        />
        <Button variant="contained" sx={styles.trackPageSubmitBtn}>
          Submit
        </Button>
      </Box>
      <Typography>Comments</Typography>
      <Box>
        {track.comments.map((comment) => (
          <Box key={comment._id}>
            <Typography>Author: {comment.username}</Typography>
            <Box component="p">Comment: {comment.text}</Box>
          </Box>
        ))}
      </Box>
    </MainLayout>
  );
};

export default TrackPage;
