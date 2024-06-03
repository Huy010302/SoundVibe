import { Audio } from "expo-av";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import useMusic from "../hooks/useMusic";
import {
  getAudioUrlFromServer,
  getVideoIdFromYoutubeDataApiV3,
  handleTrackDetructoring,
} from "./../utils/helpers/index";
import { HomeScreenContext } from "./HomeScreenContext";
import axios from "axios";
import { SERVER_API_URL } from "./../configs/index";
import { TRACK_PLAYER_STATUS } from "../utils/constants";

const trackPlayerContextDefaultData = {};

export const TrackPlayerContext = createContext(trackPlayerContextDefaultData);

const TrackPlayerContextProvider = ({ children }) => {
  // store
  const dispatch = useDispatch();

  // state
  const [trackInfo, setTrackInfo] = useState();
  const [trackId, setTrackId] = useState();
  const [trackUrl, setTrackUrl] = useState();
  const [trackPlayerStatus, setTrackPlayerStatus] = useState(
    TRACK_PLAYER_STATUS.NULL
  );
  const [sound, setSound] = useState();

  // hook custom
  const { fetchTrack } = useMusic();

  const handleSetTrackId = (trackId) => {
    setTrackId(trackId);
    console.log(trackId, "set successfully");
  };

  const getTrackUrl = useCallback(async () => {
    if (trackInfo) {
      console.log("trackInfo?.name: ", trackInfo.name);
      const {
        data: { audioUrl },
      } = await getAudioUrlFromServer(trackInfo.name);

      return audioUrl;
    }
  }, [trackInfo]);

  // start play track
  const startTrack = async (audioUri) => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: audioUri },
      { shouldPlay: true }
    );

    setSound(sound);

    await sound.playAsync();
  };

  // remove the track is playing
  const removeTrack = async () => {
    sound && (await sound.unloadAsync());
    console.log("song data have been reset");
  };
  const handleSetTrackInfo = useCallback(
    (trackInfo) => {
      setTrackInfo(trackInfo);
    },
    [trackInfo]
  );

  useEffect(() => {
    // set track info before play new track
    trackInfo && removeTrack();

    // play new track
    trackUrl && trackInfo && startTrack(trackUrl);
  }, [trackUrl]);

  useEffect(() => {
    trackInfo &&
      getTrackUrl().then((trackUrl) => {
        setTrackUrl(trackUrl);
        console.log("trackUrl: ", trackUrl);
      });
  }, [trackInfo]);

  useEffect(() => {
    trackId &&
      fetchTrack(trackId).then((track) => {
        // detructoring
        const trackObj = handleTrackDetructoring(track.data);

        // set track info after call to server
        handleSetTrackInfo(trackObj);

        console.log("trackObj: ", trackObj);
      });
  }, [trackId]);

  const trackPlayerContextDynamicData = useMemo(
    () => ({
      trackInfo,
      setTrackInfo,
      trackId,
      handleSetTrackId,
      trackPlayerStatus,
      setTrackPlayerStatus,
      getTrackUrl,
      sound,
    }),
    [trackId, trackInfo]
  );

  return (
    <TrackPlayerContext.Provider value={trackPlayerContextDynamicData}>
      {children}
    </TrackPlayerContext.Provider>
  );
};

export default TrackPlayerContextProvider;
