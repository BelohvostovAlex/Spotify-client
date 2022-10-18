import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITrack } from "../../../types/track";
import { PlayerState } from "./playerTypes";

const initialState: PlayerState = {
  active: null,
  volume: 50,
  duration: 0,
  currentTime: 0,
  pause: true,
};

export const playerSlicer = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<ITrack>) => {
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    },
    setPause: (state) => {
      state.pause = true;
    },
    setPlay: (state) => {
      state.pause = false;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  setPlay,
  setPause,
  setVolume,
  setDuration,
  setActive,
  setCurrentTime,
} = playerSlicer.actions;
export default playerSlicer.reducer;
