import { RESET_PLAYLIST_IS_PLAYING, SET_PLAYLIST_IS_PLAYING } from "../../utils/constants";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYLIST_IS_PLAYING:
      return {
        playlistIsPlaying: action.payload,
      };
      break;
    case RESET_PLAYLIST_IS_PLAYING:
      return {
        playlistIsPlaying: [],
      };
    default:
      return state;
      break;
  }
};
