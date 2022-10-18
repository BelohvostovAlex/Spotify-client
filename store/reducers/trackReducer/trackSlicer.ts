import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { ITrack } from "../../../types/track";

import { TrackState } from "./trackTypes";

const initialState: TrackState = {
  tracks: [],
  error: "",
};

export const trackSlicer = createSlice({
  name: "track",
  initialState,
  reducers: {
    getTracks: (state, action: PayloadAction<ITrack[]>) => {
      state.tracks = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        tracks: action.payload.track.tracks,
      };
    },
  },
});

export const { getTracks } = trackSlicer.actions;
export default trackSlicer.reducer;
