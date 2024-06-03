import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    name: null,
    email: null,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setName: (state, action) => ({
      ...state,
      name: action.payload,
    }),
    setEmail: (state, action) => ({
      ...state,
      email: action.payload,
    }),
    setAccessToken: (state, action) => ({
      ...state,
      accessToken: action.payload,
    }),
    setRefreshToken: (state, action) => ({
      ...state,
      refreshToken: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setName, setEmail, setAccessToken, setRefreshToken } =
  accountSlice.actions;

// Selectors
export const seletedName = (state) => state.account.name;
export const seletedAccessToken = (state) => state.account.accessToken;
export const seletedRefreshToken = (state) => state.account.refreshToken;

export default accountSlice.reducer;
