import { createSlice } from "@reduxjs/toolkit";
import { uniqueArray } from "../../utils/helpers";

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    typePlay: "playlist",
    songIdIsPlaying: null,
    playlistId: null,
    songs: null,
    songIdWillBeAddToFavorite: "",

    // remove
    playlistTitle: "",
    playlist: null,
    lyrics: null,
    audioPosition: null,
    audioDuration: null,
  },
  reducers: {
    setTypePlay: (state, action) => ({
      ...state,
      typePlay: action.payload,
    }),
    setSongIdIsPlaying: (state, action) => {
      state.songIdIsPlaying = action.payload;
    },

    setPlaylistId: (state, action) => {
      state.playlistId = action.payload;
    },
    setPlaylistTitle: (state, action) => {
      state.playlistTitle = action.payload;
    },
    setSongs: (state, action) => ({
      ...state,
      songs: uniqueArray(action.payload?.items, "encodeId"),

      // if (!state.songs) state.songs = action.payload;
      // else {
      //   let payload = uniqueArray(action.payload?.items, "encodeId");
      //   payload &&
      //     payload.map((item) => {
      //       state.songs?.items.push(item);
      //     });
      //   state.songs.page = action.payload.page;
      // }
    }),
    setSongIdWillBeAddToFavorite: (state, action) => {
      state.songIdWillBeAddToFavorite = action.payload;
    },

    // remove
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },

    setLyrics: (state, action) => {
      state.lyrics = action.payload;
    },
    reset: (state, action) => {
      // state.playlistId = null;
      // state.playlistTitle = null;
      state.playlist = null;
      state.songs = null;
      // state.lyrics = null;
    },

    // timer duration
    setTimer: (state, action) => {
      state.audioPosition = action.payload.audioPosition;
      state.audioDuration = action.payload.audioDuration;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTypePlay,
  setPlaylistId,
  setSongs,
  setPlaylistTitle,
  setSongIdWillBeAddToFavorite,

  setPlaylist,
  setLyrics,
  reset,
  setTimer,
  setSongIdIsPlaying,
} = playlistSlice.actions;

// Selectors
export const selectTypePlay = (state) => state.playlist.typePlay;
export const selectPlaylistId = (state) => state.playlist.playlistId;
export const selectSongs = (state) => state.playlist.songs;
export const selectPlaylistTitle = (state) => state.playlist.playlistTitle;
export const selectSongIdWillBeAddToFavorite = (state) =>
  state.playlist.songIdWillBeAddToFavorite;

export const selectPlaylist = (state) => state.playlist.playlist;
export const selectLyrics = (state) => state.playlist.lyrics;
export const selectSongIdIsPlaying = (state) => state.playlist.songIdIsPlaying;

export default playlistSlice.reducer;
