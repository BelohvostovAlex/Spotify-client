import React from "react";
import { useRouter } from "next/router";

import { Box, Card, Typography, Button } from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import TrackList from "../../components/TrackList/TrackList";

import { styles } from "../../styles/pages/trackStyle";
import { useAppSelector } from "../../hooks/useAppSelector";

const Index = () => {
  const router = useRouter();
  const { tracks, error } = useAppSelector((state) => state.track);

  if (error) {
    return (
      <MainLayout>
        <Typography>{error}</Typography>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Box>
        <Card>
          <Box sx={styles.trackCardWrapper}>
            <Typography sx={styles.trackCardTitle}>Track list</Typography>
            <Button
              onClick={() => router.push("/tracks/createTrack")}
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
