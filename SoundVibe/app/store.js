import { configureStore } from "@reduxjs/toolkit";

import artistReducer from "./reducers/artistSlice";
import browserReducer from "./reducers/browserSlice";
import accountReducer from "./reducers/accountSlice";
import playlistReducer from "./reducers/playlistSlice";

export const store = configureStore({
  reducer: {
    browser: browserReducer,
    account: accountReducer,
    playlist: playlistReducer,
    artist: artistReducer,
  },
});
