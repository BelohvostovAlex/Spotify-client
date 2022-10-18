import { GetServerSideProps } from "next";
import React from "react";
import { SERVER_URL } from "../config/apiConstants";

import MainLayout from "../layouts/MainLayout/MainLayout";
import { fetchTracks } from "../services/webService";
import { wrapper } from "../store";
import { getTracks } from "../store/reducers/trackReducer/trackSlicer";

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Welcome</h1>
          <h3>The best tracks are here!</h3>
        </div>
      </MainLayout>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const tracksData = await fetchTracks(SERVER_URL + "tracks");

      store.dispatch(getTracks(tracksData));
      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  });
