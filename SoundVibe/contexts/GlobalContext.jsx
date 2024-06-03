import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { getDataToAsyncStorage } from "../libs";
// import { repeatState } from "../utils/constants";
// import { Audio } from "expo-av";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   reset,
//   selectPlaylistId,
//   selectSongs,
//   setLyrics,
//   setPlaylist,
//   setSongIdIsPlaying,
//   setSongs,
//   selectSongIdIsPlaying,
// } from "../app/reducers/playlistSlice";
// import { browserApi } from "../app/api/browserApi";
// import { getLyrics, pagination, uniqueArray } from "../utils/helpers";
// import {
//   selectNewReleaseChartSongs,
//   selectNewReleaseSongs,
//   selectTypeIsPlaying,
// } from "./../app/reducers/browserSlice";
// import { getDataToAsyncStorage } from "../libs";
// import { setName } from "../app/reducers";

export const GlobalContext = createContext([]);

const GlobalContextProvider = ({ children }) => {
  // store
  // const dispatch = useDispatch();
  // const songs = useSelector(selectSongs);
  // const songIdIsPlaying = useSelector(selectSongIdIsPlaying);
  // const playlistId = useSelector(selectPlaylistId);
  // const typeIsPlaying = useSelector(selectTypeIsPlaying);
  // const newReleaseSongs = useSelector(selectNewReleaseSongs);
  // const newReleaseChartSongs = useSelector(selectNewReleaseChartSongs);

  // state
  // const [isShowPopup, setIsShowPopup] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(true);
  // const [volumeIsOpening, setVolumeIsOpening] = useState(true);
  // const repeatModeRef = useRef(repeatState.NULL);
  // const [audioDuration, setAudioDuration] = useState(0);
  // const [account, setAccount] = useState();

  // const [trackIndexIsPlaying, setTrackIndexIsPlaying] = useState(0);
  const [isFavoriteSelecterModalVisible, setFavoriteSelecterModalVisible] =
    useState(false);

  // ref
  // const sound = useRef(new Audio.Sound()).current;
  // const trackIndexRef = useRef();
  // const playlistIdRef = useRef(playlistId);
  // const loadingRef = useRef(false);
  const drawer = useRef(null);
  // console.log("songIdIsPlaying: ", songIdIsPlaying);

  // new ref
  // const isPlayingRef = useRef(false);

  // new state
  // const [audioUri, setAudioUri] = useState();

  // new function

  // const playNewAudio = useCallback(async () => {
  //   // reset sound loader if it is playing

  //   try {
  //     console.log("songs id: ", songs?.items[trackIndexIsPlaying].encodeId);
  //     if (!isPlayingRef.current) {
  //       await sound.pauseAsync();
  //       await sound.loadAsync({ uri: audioUri });

  //       // repeat play if song len = 1
  //       if (songs.items.length === 1) {
  //         // set looping mode
  //         await sound.setIsLoopingAsync(true);
  //       }
  //       console.log("loaded");
  //       await sound.playAsync();
  //     }
  //   } catch (error) {
  //     if (trackIndexIsPlaying === songs?.items.length - 1) {
  //       setTrackIndexIsPlaying(0);
  //     } else {
  //       setTrackIndexIsPlaying((index) => index + 1);
  //     }
  //   }

  //   // show duration time of track is playing
  //   const statusAsync = await sound.getStatusAsync();
  //   setAudioDuration(statusAsync.durationMillis);
  // }, [audioUri]);

  const toggleFavoriteSelecterModal = (songId = -1) => {
    getDataToAsyncStorage("acc").then((acc) => {
      if (!acc) {
        toast("Please login to use this feature");
      } else {
        setFavoriteSelecterModalVisible(!isFavoriteSelecterModalVisible);
      }
    });
  };

  // new effect

  //initialize effect

  // useEffect(() => {
  //   (() => {
  //     getDataToAsyncStorage("acc").then((acc) => {
  //       setAccount(acc);
  //       // dispatch(setName(acc?.name));
  //     });
  //   })();
  // }, []);

  // useEffect(() => {
  //   // play new audio with new audio uri
  //   audioUri && playNewAudio();
  // }, [audioUri, typeIsPlaying]);

  // const fetchDetailPlaylist = useCallback(async () => {
  //   if (![-3, -2, -1].includes(playlistId)) {
  //     const { data } = await browserApi.getDetailPlaylist(playlistId);
  //     const { song, ...detail } = data;
  //     console.log("playlistId: ", playlistId);

  //     dispatch(setPlaylist(detail));

  //     // pagination songs data to limit short data
  //     const { items, total, totalDuration } = song;
  //     const { limit, page, songList } = pagination(5, 1, items);
  //     const songFilter = uniqueArray(songList, "encodeId");
  //     console.log("songFilter: ", songFilter.length);
  //     if (songFilter.length > 0) {
  //       const songInfo = {
  //         items: songFilter,
  //         limit,
  //         page,
  //         total,
  //         totalDuration,
  //       };

  //       dispatch(setSongs(songInfo));
  //     }
  //   } else {
  //     // console.log("playlistId: ", playlistId);
  //     if (typeIsPlaying === "new-release") {
  //       dispatch(setSongs(newReleaseSongs));
  //     } else if (typeIsPlaying === "newReleaseChart") {
  //       dispatch(setSongs(newReleaseChartSongs));
  //     } else if (typeIsPlaying === "userPlaylist") {
  //       console.log("Playlist of user is playing...");
  //     } else {
  //       // change a song to playlist only have a song single
  //       const songInfo = await browserApi.getSongInfo(songIdIsPlaying);
  //       dispatch(
  //         setSongs({
  //           items: [songInfo],
  //           limit: 1,
  //           page: 1,
  //           total: 1,
  //           totalDuration: undefined,
  //         })
  //       );
  //     }
  //   }
  // }, [songs, playlistId, typeIsPlaying, songIdIsPlaying]);

  // const loadMoreData = useCallback(async () => {
  //   try {
  //     if (![-3, -2, -1].includes(playlistId)) {
  //       // load more data into the list
  //       // update the data source and trigger a re-render
  //       console.log("load more");

  //       loadingRef.current = true;
  //       const { data } = await browserApi.getDetailPlaylist(playlistId);
  //       // console.log("songlist: ", data);
  //       const { song, ...detail } = data;

  //       // pagination songs data to limit short data
  //       const { items, total, totalDuration } = song;
  //       const {
  //         limit,
  //         page: p,
  //         songList,
  //       } = pagination(5, songs.page + 1, items);

  //       const songFilter = uniqueArray(songList, "encodeId");
  //       if (songFilter.length > 0) {
  //         const songInfo = {
  //           items: songFilter,
  //           limit,
  //           page: p,
  //           total,
  //           totalDuration,
  //         };

  //         dispatch(setSongs(songInfo));
  //       }
  //       loadingRef.current = false;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [songs]);

  const globalContextDynamicData = useMemo(
    () => ({
      // songs,
      // isPlaying,
      // setIsPlaying,
      // volumeIsOpening,
      // setVolumeIsOpening,
      // repeatModeRef,
      // trackIndexIsPlaying,
      // setTrackIndexIsPlaying,
      // sound,
      // trackIndexRef,
      // isShowPopup,
      // setIsShowPopup,
      // fetchDetailPlaylist,
      // loadMoreData,
      // setAudioUri,
      // isPlayingRef,
      // audioDuration,
      // setAudioDuration,
      // loadingRef,
      drawer,
      toggleFavoriteSelecterModal,
      isFavoriteSelecterModalVisible,
    }),
    [
      // songs,
      // isPlaying,
      // setIsPlaying,
      // volumeIsOpening,
      // setVolumeIsOpening,
      // repeatModeRef,
      // trackIndexIsPlaying,
      // setTrackIndexIsPlaying,
      // sound,
      // trackIndexRef,
      // isShowPopup,
      // setIsShowPopup,
      // fetchDetailPlaylist,
      // loadMoreData,
      // setAudioUri,
      // isPlayingRef,
      // audioDuration,
      // setAudioDuration,
      // loadingRef,
      drawer,
      toggleFavoriteSelecterModal,
      isFavoriteSelecterModalVisible,
    ]
  );
  return (
    <GlobalContext.Provider value={globalContextDynamicData}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
