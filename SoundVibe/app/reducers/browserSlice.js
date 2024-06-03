import { createSlice } from "@reduxjs/toolkit";

export const browserSlice = createSlice({
  name: "browser",
  initialState: {
    banners: null,
    featured: null,
    newReleaseSongs: null,
    newReleaseChartSongs: null,
    typeIsPlaying: null,
  },
  reducers: {
    setBanners: (state, action) => {
      state.banners = action.payload;
    },
    setFeatured: (state, action) => {
      state.featured = action.payload;
    },
    setNewReleaseSongs: (state, action) => {
      state.newReleaseSongs = action.payload;
    },
    setNewReleaseChartSongs: (state, action) => {
      state.newReleaseChartSongs = action.payload;
    },
    setTypeIsPlaying: (state, action) => {
      state.typeIsPlaying = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setBanners,
  setFeatured,
  setNewReleaseSongs,
  setNewReleaseChartSongs,
  setTypeIsPlaying,
} = browserSlice.actions;

// Selectors
export const selectBanners = (state) => state.browser.banners;
export const selectFeatured = (state) => state.browser.featured;
export const selectNewReleaseSongs = (state) => state.browser.newReleaseSongs;
export const selectNewReleaseChartSongs = (state) =>
  state.browser.newReleaseChartSongs;
export const selectTypeIsPlaying = (state) => state.browser.typeIsPlaying;

export default browserSlice.reducer;
