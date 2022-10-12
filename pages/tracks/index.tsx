import React from "react";
import { useRouter } from "next/router";

import { Box, Card, Typography, Button } from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";

import { styles } from "../../styles/pages/trackStyle";
import { ITrack } from "../../types/track";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [];

  return (
    <MainLayout>
      <Box>
        <Card sx={styles.trackCardWrapper}>
          <Typography sx={styles.trackCardTitle}>Track list</Typography>
          <Button
            onClick={() => router.push("/track/createTrack")}
            sx={styles.trackCardBtn}
          >
            Upload
          </Button>
        </Card>
      </Box>
    </MainLayout>
  );
};

export default Index;
