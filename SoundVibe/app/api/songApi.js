import axios from "axios";
import { SERVER_API_URL } from "../../configs";

export const songApi = {
  getSong: async (id) => {
    try {
      const data = await axios.get(`${SERVER_API_URL}/song/${id}`);

      // const data = await axios.get(`http://api.mp3.zing.vn/api/streaming/audio/${id}/320`)
      // console.log("dâta: ", data.data);
      return data.data.data["128"];
    } catch (error) {
      console.log("error: ", error);
      return "error fetch playlist data";
    }
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
};
