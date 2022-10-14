import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import AppContainer from "../../components/AppContainer/AppContainer";

import { MainLayoutProps } from "./interface";
import Player from "../../components/Player/Player";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <AppContainer>{children}</AppContainer>
      <Player />
    </>
  );
};

export default MainLayout;
