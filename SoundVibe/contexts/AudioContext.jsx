import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useMusic from "../hooks/useMusic";
import axios from "axios";
import { SERVER_API_URL } from "../configs";
import { GlobalContext } from "./GlobalContext";
import { joinArtistsName, setFirstTrackInList } from "../utils/helpers";
import { HomeScreenContext } from "./HomeScreenContext";

export const AudioContext = createContext({});

const AudioContextProvider = ({ children }) => {
  // state
  const [playlists, setPlaylists] = useState();
  const [playlistIsPlaying, setPlaylistIsPlaying] = useState();
  const [typePlay, setTypePlay] = useState("playlist");
  const [idPlayFirst, setIdPlayFirst] = useState();

  // context
  const { setPlaylistTracksIsPlaying } = useContext(GlobalContext);
  const { hotTracks } = useContext(HomeScreenContext);

  // hook custom
  const { fetchFeaturedPlaylists } = useMusic();

  // setters
  const setPlaylistWillPlay = useCallback(
    (playlistId) => {
      const playlist = playlists.filter(
        (playlist) => playlist.id === playlistId
      );
      setPlaylistIsPlaying(playlist);
    },
    [playlists]
  );

  useEffect(() => {
    const fetchHotTracks = async (tracks) => {
      let trackNameList = [];
      tracks.map((track) => trackNameList.push(track.track));
      // set all tracks with information including: id, name . from youtube music
      const tmpTrackNames = trackNameList.map((track, index) => {
        return {
          id: track.id,
          search:
            track.name +
            " - " +
            joinArtistsName(track.artists) +
            " - YouTube Music",
          name: track.name,
          thumbnail: track?.album?.images[0].url,
          artists: track.artists,
        };
      });

      // fetch to get all audio url from server
      const response = await axios.post(`${SERVER_API_URL}/track-urls`, {
        tracks: tmpTrackNames,
      });

      setPlaylistTracksIsPlaying(
        setFirstTrackInList(idPlayFirst, response.data.data)
      );
    };
    if (hotTracks && typePlay === "track") {
      fetchHotTracks(hotTracks);
    }
  }, [typePlay]);

  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      const { data } = await axios.get(
        `${SERVER_API_URL}/playlist-tracks/${playlistIsPlaying[0]?.id}`
      );

      // set all tracks with full information from spotify
      const tmpTracks = data.data.items;
      let tracks = [];
      tmpTracks.map((track) => tracks.push(track.track));

      // set all tracks with information including: id, name . from youtube music
      const tmpTrackNames = tracks.map((track) => ({
        id: track.id,
        search:
          track.name +
          " - " +
          joinArtistsName(track.artists) +
          " - YouTube Music",
        name: track.name,
        thumbnail: track.album.images[0].url,
        artists: track.artists,
      }));

      // fetch to get all audio url from server
      const response = await axios.post(`${SERVER_API_URL}/track-urls`, {
        tracks: JSON.stringify(tmpTrackNames),
      });

      console.log("tmpTrackNames: ", tmpTrackNames);
      console.log("response: ", response.data);
      setPlaylistTracksIsPlaying(response.data);
    };

    // update playlist tracks is playing in global context
    if (playlistIsPlaying) fetchPlaylistTracks();
  }, [playlistIsPlaying]);

  // getters
  const getNameOfPlaylistIsPlaying = useCallback(() => {
    const playlist = playlists.find(
      (playlist) => playlist.id === playlistIsPlaying
    );
    return playlist.name;
  }, [playlistIsPlaying]);

  const getIdOfPlaylistIsPlaying = useCallback(() => {
    return playlistIsPlaying?.id || null;
  }, [playlistIsPlaying]);

  // deafault context data
  const audioContextDynamicDefaultData = useMemo(
    () => ({
      playlists,
      playlistIsPlaying,
      setPlaylistWillPlay,
      getIdOfPlaylistIsPlaying,
      getNameOfPlaylistIsPlaying,
      setTypePlay,
      setIdPlayFirst,
    }),
    [playlistIsPlaying, playlists]
  );

  useEffect(() => {
    fetchFeaturedPlaylists(15).then(({ data }) => {
      setPlaylists(data?.playlists?.items || []);
    });
  }, []);

  return (
    <AudioContext.Provider value={audioContextDynamicDefaultData}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;
