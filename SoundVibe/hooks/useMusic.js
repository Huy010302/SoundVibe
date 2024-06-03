import axios from "axios";
import { useDispatch } from "react-redux";
import { SERVER_API_URL } from "./../configs/index";

const fetchGenres = async () => {
  try {
    const genres = await axios.get(SERVER_API_URL + "/genres");
    return genres;
  } catch (error) {
    // console.log("my genres fetch error: ", error);
  }
};

const fetchPlaylists = async (playlistId) => {
  try {
    const playlist = await axios.get(SERVER_API_URL + "/playlist", {
      params: {
        playlistId,
      },
    });
    return playlist;
  } catch (error) {
    //console.log("my playlist fetch error: ", error);
  }
};

const fetchTrack = async (trackId) => {
  try {
    const { data } = await axios.get(SERVER_API_URL + `/track/${trackId}`);
    return data;
  } catch (error) {
    //console.log("my track fetch  error: ", error);
  }
};

const fetchTopTracks = async () => {
  try {
    const { data } = await axios.get(SERVER_API_URL + "/top-tracks");

    // console.log("topTracks: ", data);

    return data;
  } catch (error) {
    console.log("my topTracks fetch error: ", error);
  }
};
const fetchTopArtists = async () => {
  try {
    const { data } = await axios.get(SERVER_API_URL + "/top-artists");

    return data;
  } catch (error) {
    console.log("my topArtists fetch error: ", error);
  }
};
const fetchTopAlbums = async () => {
  try {
    const { data } = await axios.get(SERVER_API_URL + "/top-albums");

    return data;
  } catch (error) {
    console.log("my topAlbums fetch error: ", error);
  }
};

const fetchFeaturedPlaylists = async (limit) => {
  try {
    const { data } = await axios.get(
      `${SERVER_API_URL}/featured-playlists?limit=${limit}`
    );
    return data;
  } catch (error) {
    console.log("my featured-playlists fetch error: ", error);
  }
};

const useMusic = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const genres = fetchGenres();
  //   const topTracks = fetchTopTracks();
  //   const topArtists = fetchTopArtists();
  //   const topAlbums = fetchTopAlbums();

  //   dispatch(setGenres(genres.data));
  //   dispatch(setTopTracks(topTracks.data));
  //   dispatch(setTopArtists(topArtists.data));
  //   dispatch(setTopAlbums(topAlbums.data));
  // }, []);

  return {
    fetchGenres,
    fetchPlaylists,
    fetchTrack,
    fetchTopTracks,
    fetchTopArtists,
    fetchTopAlbums,
    fetchFeaturedPlaylists,
  };
};

export default useMusic;
