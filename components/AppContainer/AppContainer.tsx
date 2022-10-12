import React from "react";

import { Container } from "@mui/material";

import { AppContainerProps } from "./interface";
import { styles } from "./styles";

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <Container maxWidth="sm" sx={styles.appContainer}>
      {children}
    </Container>
  );
};

export default AppContainer;
