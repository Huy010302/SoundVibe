import axios from "axios";
import { SERVER_API_URL, YOUTUBE_DATA_API_KEY } from "../../configs";

export const pagination = (limit = 10, page = 1, list = []) => {
  let arrFilter = [],
    i = 0,
    offset = (page - 1) * limit;

  while (arrFilter.length < limit) {
    if (i >= offset) {
      arrFilter.push(list[i]);
    }
    if (!list[i + 1]) break;
    i++;
  }
  return {
    limit,
    page,
    songList: arrFilter,
  };
};

export const formatTimeDuration = (timeInMillis) => {
  const minutes = Math.floor(timeInMillis / 60000);
  const seconds = Math.floor((timeInMillis % 60000) / 1000);
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};

export const getVideoIdFromYoutubeDataApiV3 = async (videoName) => {
  try {
    // fetch to YOUTUBE_DATA_API to get video id from youtube
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${videoName}&key=${YOUTUBE_DATA_API_KEY}`
    );

    return data.items[0].id.videoId;
  } catch (error) {
    console.log("err call to GG_Api", error);
  }
};

export const getAudioUrlFromServer = async (videoName) => {
  try {
    // fetch to server to get audioUrl
    const { data } = await axios.get(
      `${SERVER_API_URL}/track-player/${videoName}`
    );

    return data;
  } catch (error) {
    console.log("err in fetchAudioUrl", error);
  }
};
export const handleTrackDetructoring = (track) => {
  const { id, name, preview_url, album } = track;
  const image = album?.images[0]?.url;
  const artist = track?.artists.map((artist) => artist?.name).join(", ");
  return {
    id,
    name,
    preview_url,
    image,
    artist,
    album,
  };
};

export const joinArtistsName = (artists) =>
  artists && artists.map((artist) => artist?.name).join(", ");

export const formatTime = (timeInMillis) => {
  const minutes = Math.floor(timeInMillis / 60000);
  const seconds = Math.floor((timeInMillis % 60000) / 1000);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const setFirstTrackInList = (id, list) => {
  const itemFilter = list.filter((item) => item.id === id);
  const arrFilter = list.filter((item) => item.id !== id);
  arrFilter.push(itemFilter[0]);
  const rs = arrFilter.reverse();
  return rs;
};

export const uppercaseFirstCharacter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

export const getLyrics = async (url) => {
  const response = await fetch(url);
  const text = await response.text();

  return text;
};

export const deleteAllSpaceOfString = (str) => {
  if (!str || str.length === 0) return str;
  let tmp = "";
  const regex = new RegExp("^[a-zA-Z]+$");
  for (const element of str) {
    if (element.search(regex) >= 0) tmp += element;
  }
  return tmp;
};

export const uniqueArray = (arr, key) => {
  if (!arr || arr.length === 0) return arr;
  return (
    arr.length > 0 &&
    arr.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t[key] === item[key])
    )
  );
};
