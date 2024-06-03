import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
  name: "artist",
  initialState: {
    id: null,
    name: "",
    thumbnail: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setThumbnail: (state, action) => {
      state.thumbnail = action.payload;
    },
    aristReset: (state, action) => {
      state.id = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setId, setName, setThumbnail, aristReset } = artistSlice.actions;

// Selectors
export const selectId = (state) => state.artist.id;
export const selectName = (state) => state.artist.name;
export const selectThumbnail = (state) => state.artist.thumbnail;

export default artistSlice.reducer;
