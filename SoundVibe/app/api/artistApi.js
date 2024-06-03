import axios from "axios";
import { SERVER_API_URL } from "../../configs";
import { uniqueArray } from "./../../utils/helpers/index";

export const artistApi = {
  fetchSongs: async (id, page, count) => {
    try {
      const data = await axios.get(
        `${SERVER_API_URL}/artistsongs?id=${id}&page=${page}&count=${count}`
      );

      // console.log("len: ", data.data.data.items[0].artists.length);
      // filter data
      let filterList = data.data.data.items
        ? uniqueArray(data.data.data.items, "encodeId")
        : [];

      return {
        data: {
          ...data.data.data,
          items: filterList,
        },
      };
    } catch (error) {
      console.log("error: ", error);
    }
  },
};
