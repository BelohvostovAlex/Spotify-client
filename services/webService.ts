import axios from "axios";

export const fetchTracks = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response);

    return response.data;
  } catch (error) {
    throw error;
  }
};
