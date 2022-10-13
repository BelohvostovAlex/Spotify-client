import React from "react";
import { useRouter } from "next/router";

import { Box, Card, Typography, Button } from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";

import { styles } from "../../styles/pages/trackStyle";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList/TrackList";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      artist: "artist",
      audio: "audio",
      text: "text",
      listens: 5,
      comments: [],
      name: "name",
      picture: "pic",
    },
    {
      _id: "2",
      artist: "artist",
      audio: "audio",
      text: "text",
      listens: 5,
      comments: [],
      name: "name2",
      picture: "pic",
    },
    {
      _id: "3",
      artist: "artist",
      audio: "audio",
      text: "text",
      listens: 5,
      comments: [],
      name: "name3",
      picture: "pic",
    },
  ];

  return (
    <MainLayout>
      <Box>
        <Card>
          <Box sx={styles.trackCardWrapper}>
            <Typography sx={styles.trackCardTitle}>Track list</Typography>
            <Button
              onClick={() => router.push("/track/createTrack")}
              sx={styles.trackCardBtn}
            >
              Upload
            </Button>
          </Box>
          <Box sx={styles.trackListWrapper}>
            <TrackList tracks={tracks} />
          </Box>
        </Card>
      </Box>
    </MainLayout>
  );
};

export default Index;
