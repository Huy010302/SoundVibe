import {
  createNewFavoritePlaylist,
  addSongsFavoritePlaylist,
  getAllFavoritePlaylistsByUserId,
  updateFavoritePlaylist,
} from "../../libs";
export const favoriteApi = {
  create: async (userId, title, accessToken) => {
    try {
      const data = await createNewFavoritePlaylist(userId, title, accessToken);
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
  update: async (userId, idListWillExist , accessToken) => {
    try {
      const data = await updateFavoritePlaylist(userId, idListWillExist, accessToken);
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
  addSongs: async (favoriteId, songId, accessToken) => {
    try {
      const data = await addSongsFavoritePlaylist(
        favoriteId,
        songId,
        accessToken
      );
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },

  // TODO: get all songs by favorite id
  getAll: async (userId, accessToken) => {
    try {
      const data = await getAllFavoritePlaylistsByUserId(userId, accessToken);
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
};
