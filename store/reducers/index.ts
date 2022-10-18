import { combineReducers } from "@reduxjs/toolkit";

import playerSlicer from "./playerReducer/playerSlicer";
import trackSlicer from "./trackReducer/trackSlicer";

export const rootReducer = combineReducers({
  player: playerSlicer,
  track: trackSlicer,
});
