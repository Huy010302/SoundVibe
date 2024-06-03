import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ImageBlurShadow from "react-native-image-blur-shadow";
import { topTracksOfArtist } from "../utils/constants";
import {
  formatTime,
  formatTimeDuration,
  joinArtistsName,
  uniqueArray,
  uppercaseFirstCharacter,
} from "../utils/helpers/index";
import * as Icons from "react-native-heroicons/solid";
import { Shadow } from "react-native-shadow-2";
import { LinearGradient } from "expo-linear-gradient";
import { splitText } from "../utils/splitText";
import { useDispatch, useSelector } from "react-redux";
import { setTypeIsPlaying } from "./../app/reducers/browserSlice";
import {
  reset,
  setSongs,
  setPlaylistId,
  setPlaylistTitle,
  setTypePlay,
  setSongIdIsPlaying,
} from "./../app/reducers/playlistSlice";
import {
  selectId,
  selectName,
  selectThumbnail,
} from "./../app/reducers/artistSlice";
import { artistApi } from "../app/api/artistApi";
import { GlobalContext } from "../contexts/GlobalContext";

const { width: widthScreen, height: heightScreen } = Dimensions.get("window");

const ArtistsDetail = () => {
  const navigator = useNavigation();

  // store
  const artistId = useSelector(selectId);
  const artistName = useSelector(selectName);
  const thumbnail = useSelector(selectThumbnail);
  const dispatch = useDispatch();

  // context
  const { setTrackIndexIsPlaying } = useContext(GlobalContext);

  // state
  const [songList, setSongList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [idIsPlaying, setIdIsPlaying] = useState();
  const page = useRef(1);
  const count = useRef(50);
  const total = useRef(songList.length);
  const hasMore = useRef(true);

  const songFilter = uniqueArray(songList, "encodeId");

  const fetchArtistInfo = useCallback(async () => {
    if (hasMore.current) {
      setIsLoading(true);
      const response = await artistApi.fetchSongs(
        artistId,
        page.current,
        count.current
      );
      const itemExisted = response.data.items;
      if (itemExisted.length > 0) {
        page.current += 1;
        setSongList((prev) => [...prev, ...itemExisted]);
      }

      hasMore.current = response.data.hasMore;
    }
    setIsLoading(false);
  }, [page.current]);

  useEffect(() => {
    fetchArtistInfo();
  }, []);

  const renderFooter = useCallback(() => {
    return isLoading ? (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  }, [isLoading]);

  const toggleSetPlaylist = (id, index) => {
    setIdIsPlaying(id);
    dispatch(reset());
    const songInfo = {
      items: songFilter,
      limit: count.current,
      page: page.current,
      total: total,
      totalDuration: null,
    };

    dispatch(setTypePlay("favorite"));

    dispatch(setSongIdIsPlaying(songInfo.items[0].encodeId));
    dispatch(setPlaylistId("songs-of-artist"));
    dispatch(setPlaylistTitle(artistName));
    dispatch(setSongs(songInfo));

    navigator.navigate("AudioPlayer");
  };

  const renderSongItem = ({ item, index }) => (
    <TouchableOpacity
      key={item?.encodeId}
      className={`py-3 px-3 rounded-md justify-center ${
        item?.encodeId === idIsPlaying ? "bg-[#21234E] " : " "
      }`}
      onPress={() => toggleSetPlaylist(item?.encodeId, index)}
    >
      <View className="flex-row space-x-3">
        <View>
          <Image
            source={{ uri: item?.thumbnailM }}
            className="w-20 h-20 rounded-md"
          />
        </View>
        <View
          style={{ width: widthScreen * 0.6 }}
          className="flex-col justify-between space-y-1"
        >
          <View>
            <Text className="text-white text-base">{item?.title}</Text>

            <Text className=" text-slate-400 text-xs">
              {item?.artistsNames || joinArtistsName(item?.artists)}
            </Text>
          </View>
          <View className="flex-row space-x-2">
            <View className="flex-row items-center space-x-1">
              <MaterialIcons name={`timer`} color="#404494" size={15} />
              <Text className=" text-slate-400 text-xs">
                {formatTimeDuration(item?.duration * 1000)}
              </Text>
            </View>

            <LinearGradient
              colors={["#404494", "#40449452"]}
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0.2, y: 1 }}
              className=" rounded-full p-1 right-0 bottom-0"
            >
              <TouchableOpacity onPress={() => {}}>
                <MaterialIcons name={`play-arrow`} color="#fff" size={14} />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const loadMoreData = useCallback(() => {
    page.current += 1;
    fetchArtistInfo();
  }, []);

  if (!artistId) return null;

  return (
    <View className="bg-main">
      {/* Header */}
      <View className="flex-row justify-between items-center p-4 mb-2">
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <Icons.ChevronLeftIcon color={"#fff"} />
        </TouchableOpacity>
        <Text className="text-xl text-white font-extrabold">{artistName}</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>

      {/* Artist info */}
      <View className="px-4 items-center">
        <ImageBackground
          className="rounded-lg items-center justify-center space-y-2"
          style={{
            width: widthScreen,
            height: widthScreen / 2.5,
          }}
          blurRadius={10}
          source={{ uri: thumbnail }}
        >
          {/* Avatar  */}
          <Image
            source={{ uri: thumbnail }}
            style={{
              width: widthScreen * 0.35,
              height: widthScreen * 0.35,
              borderRadius: 8,
            }}
          />
        </ImageBackground>
      </View>
      <View className="px-4">
        {/* All track of this artist */}
        {/* Header  */}
        <View className="flex-row justify-between items-center pt-2 mb-4">
          <Text className="text-xl text-slate-300 font-bold">Songs</Text>

          <TouchableOpacity>
            <View className="flex-row  items-center">
              <Text className="text-slate-400 text-xs">Sort</Text>
              <MaterialIcons
                name={`arrow-drop-down`}
                color={"#A4AEB9"}
                size={18}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* tracks  */}
        <FlatList
          style={{ height: Dimensions.get("window").height * 0.63 }}
          className="space-y-2"
          data={songFilter}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          keyExtractor={(item) => item?.encodeId || item?.id}
          renderItem={renderSongItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ArtistsDetail;
