import axios from "axios";
import { SERVER_API_URL } from "../../configs";

export const browserApi = {
  search: async (keyword) => {
    try {
      const data = await axios.get(
        `${SERVER_API_URL}/search?keyword=${keyword}`
      );
      return data.data;
    } catch (error) {
      console.log("error: ", error);
      return "error fetch home data";
    }
  },
  getSuggestKeyword: async () => {
    try {
      const data = await axios.get(`${SERVER_API_URL}/suggestions`);
      return data;
    } catch (error) {
      console.log("error: ", error);
      return "error fetch home data";
    }
  },
  getBrowserData: async () => {
    try {
      const data = await axios.get(SERVER_API_URL + "/home");
      return data;
    } catch (error) {
      console.log("error: ", error);
      return "error fetch home data";
    }
  },
  getDetailPlaylist: async (id) => {
    try {
      const { data } = await axios.get(
        `${SERVER_API_URL}/detailplaylist/${id}`
      );
      return data;
    } catch (error) {
      console.log("error: ", error);
      return "error fetch playlist data";
    }
  },
  getSongInAppLocal: async (page, size) => {
    // fetch
    const { data } = await axios.get(
      `${SERVER_API_URL}/getallsongs?size=${size}&page=${page}`
    );

    if (data.status === 200) {
      return data;
    }

    // change to dashboard page
  },
  getSongInfo: async (id) => {
    try {
      const data = await axios.get(`${SERVER_API_URL}/infosong?id=${id}`);
      return data.data.data;
    } catch (error) {
      console.log("error: ", error);
      return "error fetch playlist data";
    }
  },

  getLyric: async (id) => {
    try {
      const data = await axios.get(`${SERVER_API_URL}/lyric/${id}`);
      return data.data.data.file;
    } catch (error) {
      console.log("error: ", error);
      return "error fetch playlist data";
    }
  },
};
