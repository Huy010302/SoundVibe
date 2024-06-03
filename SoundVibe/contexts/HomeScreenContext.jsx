import axios from "axios";
import {
  createContext,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useMusic from "../hooks/useMusic";
import { getLimitItems } from "../utils/getLimitItems";


const homeScreenContextDefautData = [];

export const HomeScreenContext = createContext(homeScreenContextDefautData);

const HomeScreenContextProvider = ({ children }) => {
  const [homeFeatures, setHomeFeatures] = useState();
  const [trackQueue, setTrackQueue] = useState([]);
  const hotTracks = useRef();
  const { fetchTopTracks, fetchTopAlbums, fetchFeaturedPlaylists } = useMusic();

  const getDataFirstTime = () => {
    Promise.all([
      fetchFeaturedPlaylists(15),
      fetchTopTracks(),
      fetchTopAlbums(),
    ])
      .then((features) => {
        hotTracks.current = getLimitItems(features[1]?.data?.items, 10);

        setHomeFeatures([
          {
            type: "playlist",
            title: "Featured Playlists",
            data: features[0]?.data?.playlists.items,
          },
          {
            type: "track",
            title: "Hot Music",
            data: getLimitItems(features[1]?.data?.items, 10),
          },
          {
            type: "albums",
            title: "Top Albums",
            data: getLimitItems(features[2]?.data?.albums.items, 10),
          },
        ]);
      })
      .catch((err) => console.log("err in promise.all"));
  };

  useEffect(() => {
    getDataFirstTime();
  }, []);

  const homeScreenContextDynamicData = useMemo(
    () => ({
      homeFeatures: homeFeatures,
      trackQueue: trackQueue,
      hotTracks: hotTracks.current,
    }),
    [homeFeatures, trackQueue]
  );

  return (
    <HomeScreenContext.Provider value={homeScreenContextDynamicData}>
      {children}
    </HomeScreenContext.Provider>
  );
};

export default HomeScreenContextProvider;
