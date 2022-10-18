import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTracks } from "../../../../services/webService";
import { SERVER_URL } from "../../../../config/apiConstants";

export const getTracks = createAsyncThunk(
  "track/getTracks",
  async (_, thunkAPI) => {
    try {
      const data = await fetchTracks(SERVER_URL + "tracks");

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
