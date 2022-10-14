import { combineReducers } from "@reduxjs/toolkit";
import playerSlicer from "./playerReducer/playerSlicer";

export const rootReducer = combineReducers({
  player: playerSlicer,
});
