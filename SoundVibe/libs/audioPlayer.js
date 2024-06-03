import { browserApi, songApi } from "../app/api";
import { featuredData } from "../libs";
import { getLyrics, pagination, uniqueArray } from "../utils/helpers";

export const getNewReleaseChartData = async (typePlay) => {
  const data = await featuredData();

  let rs = [];
  data &&
    data.map((item) => {
      if (item.type === "playlist") {
        if (item.data.sectionType === typePlay) {
          rs = item.data;
        }
      }
    });
  return rs;
};
export const getPlaylistDataById = async (playlistId) => {
  const { data } = await browserApi.getDetailPlaylist(playlistId);
  const { song, ...detail } = data;
  console.log("playlistId: ", playlistId);

  // pagination songs data to limit short data
  const { items, total, totalDuration } = song;
  const { limit, page, songList } = pagination(15, 1, items);
  const songFilter = uniqueArray(songList, "encodeId");

  if (songFilter.length > 0) {
    return {
      items: songFilter,
      limit,
      page,
      total,
      totalDuration,
    };
  }
};

export const getSongSingle = async (songId) => {
  const single = await songApi.getSongInfo(songId);
  return single;
};

export const getImageBackground = (songs, songId, type) => {
  if (songs.length > 0 && songId) {
    const song = songs.filter((item) => item.encodeId === songId);

    return song[0].thumbnailM || song[0].thumbnail;
  }
};

export const getIndexCurrent = (songs, songId) => {
  if (songs.length > 0) {
    let idx = 0;

    songs.map((item, index) => {
      if (item.encodeId === songId) idx = index;
    });
    return idx;
  }
};

export const getSongIdByIndex = (songs, index) => {
  if (songs.length > 0) {
    const song = songs[index];
    if (song) return song.encodeId;
  }
};

export const getSongDuration = (songs, songId) => {
  if (songs.length > 0) {
    let duration = 0;

    songs.map((item) => {
      if (item.encodeId === songId) duration = item.duration * 1000;
    });

    return duration;
  }
};

export const getAudioUriBySongId = (songId) => {
  if (songId) {
    return `http://api.mp3.zing.vn/api/streaming/audio/${songId}/320`;
  }
};

export const getLyricsBySongId = async (songId) => {
  try {
    // get lyric of track is playing
    const lyricsUri = await browserApi.getLyric(songId);

    // get lyrics
    const lyricsData = await getLyrics(lyricsUri);
    return lyricsData;
  } catch (error) {
    console.log(error);
  }
};

export const checkSongIsExistInPlaylist = (playlist, songId) => {
  const songs = playlist.filter((item) => item.encodeId === songId);
  return songs.length > 0;
};
