import axios from "axios";
import { SERVER_API_URL } from "./../configs";

export const createNewFavoritePlaylist = async (id, title, accessToken) => {
  const { data } = await axios.post(
    `${SERVER_API_URL}/createnewfavoritelist`,
    {
      id,
      title,
    },
    {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
};

export const updateFavoritePlaylist = async (
  userId,
  idListWillExist,
  accessToken
) => {
  const { data } = await axios.post(
    `${SERVER_API_URL}/updatefavoritelist`,
    {
      id: userId,
      favoriteIdList: idListWillExist,
    },
    {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
};

export const addSongsFavoritePlaylist = async (
  favoriteId,
  songId,
  accessToken
) => {
  // get info song with id
  const songInfo = await axios.get(`${SERVER_API_URL}/infosong?id=${songId}`);
  const { data } = await axios.post(
    `${SERVER_API_URL}/addsongstofavoritelist`,
    {
      id: favoriteId,
      songs: [songInfo.data.data],
    },
    {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
};

export const getAllFavoritePlaylistsByUserId = async (userId, accessToken) => {
  const { data } = await axios.get(`${SERVER_API_URL}/favorite/${userId}`, {
    headers: {
      token: `Bearer ${accessToken}`,
    },
  });

  return data;
};
