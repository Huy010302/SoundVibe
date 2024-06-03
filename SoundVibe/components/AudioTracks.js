import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useSharedValue,
  Easing,
  withTiming,
} from "react-native-reanimated";
import { BottomSheet } from "react-native-btr";
import moment from "moment/moment";
import { GlobalContext } from "../contexts/GlobalContext";
import Loader from "./Loader";
import {
  selectPlaylistId,
  selectSongIdIsPlaying,
  selectSongs,
  selectTypePlay,
  setSongIdIsPlaying,
} from "../app/reducers/playlistSlice";
import { getAudioUriBySongId, getSongIdByIndex } from "../libs";

const { width: widthScreen, height: heightScreen } = Dimensions.get("window");

const AudioTracks = ({
  sound,
  songs,
  songIdIsPlaying,
  showAudioQueue,
  handleShowQueue,
  playNewAudio,
}) => {
  // state
  // const [isLoadMore, setIsLoadMore] = useState(false);

  const offset = useSharedValue(0);

  // store
  const dispatch = useDispatch();
  const playlistId = useSelector(selectPlaylistId);
  const typePlay = useSelector(selectTypePlay);

  // context
  // const {
  //   loadMoreData,
  //   trackIndexIsPlaying,
  //   setTrackIndexIsPlaying,
  //   loadingRef,
  // } = useContext(GlobalContext);

  // ref
  // const songIndexRef = useRef(trackIndexIsPlaying);

  // toggleAudioQueue
  useEffect(() => {
    if (!showAudioQueue) {
      // hidden
      offset.value = withTiming(widthScreen, {
        duration: 500,
        easing: Easing.linear,
      });
    }
    // show
    else
      offset.value = withTiming(0, {
        duration: 500,
        easing: Easing.linear,
      });
  }, [showAudioQueue]);


  const changeToSong = (songId) => {
    sound.unloadAsync();
    dispatch(setSongIdIsPlaying(songId));

    if (typePlay === "local-songs") {
      const song = songs.filter((item) => item.encodeId === songId);

      playNewAudio(song[0].audioUrl);
    } else {
      playNewAudio(getAudioUriBySongId(songId));
    }

    console.log("songurl: ", getAudioUriBySongId(songId));
  };

  console.log("songIdIsPlaying: ", songIdIsPlaying);

  const renderItem = useCallback(
    ({ item, index }) => {
      return (
        <TouchableOpacity
          key={item?.encodeId}
          className={`${songIdIsPlaying === item?.encodeId
            ? "bg-[#21234E]"
            : "bg-[#21234e3f]"
            }  p-3 mx-4 my-2 rounded-md justify-center`}
          onPress={() => {
            changeToSong(item?.encodeId);
          }}
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
                <Text className="text-white font-['Montserrat-Medium'] text-base">
                  {item?.title}
                </Text>

                <Text className="font-['Montserrat-Medium'] text-slate-400 text-xs">
                  {item?.artistsNames}
                </Text>
              </View>
              <View className="flex-row space-x-2">
                <View className="flex-row items-center space-x-1">
                  <MaterialIcons name={`timer`} color="#404494" size={15} />
                  <Text className="font-['Montserrat-Medium'] text-slate-400 text-xs">
                    {moment.utc(item?.duration * 1000).format("mm:ss")}
                  </Text>
                </View>

                <LinearGradient
                  colors={["#404494", "#40449452"]}
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0.2, y: 1 }}
                  className=" rounded-full p-1 right-0 bottom-0"
                >
                  <TouchableOpacity onPress={() => { }}>
                    <MaterialIcons name={`play-arrow`} color="#fff" size={14} />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [songs, songIdIsPlaying]
  );

  // const renderFooter = useCallback(() => {
  //   // show the loading indicator only when loading is true
  //   return isLoadMore ? (
  //     <View style={{ paddingVertical: 20 }}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   ) : null;
  // }, [isLoadMore]);

  if (!songs && !songIdIsPlaying) return <Loader />;

  // console.log("song keys: ", Object.keys(songs.items));
  // 191B28
  return (
    <BottomSheet
      visible={showAudioQueue}
      //setting the visibility state of the bottom shee
      onBackButtonPress={handleShowQueue}
      //Toggling the visibility state on the click of the back botton
      onBackdropPress={handleShowQueue}
    //Toggling the visibility state on the clicking out side of the sheet
    >
      <Animated.View
        style={[{ height: Dimensions.get("window").height * 0.65 }]}
        className={`w-full bg-[#191b287e] ${showAudioQueue ? "absolute top-[30%]" : ""
          } `}
      >
        {/* Header  */}
        <View className="flex-row justify-between items-center p-4 mb-4 bg-[#21234e98] ">
          <View className="flex-row space-x-1">
            <Text className="font-['Montserrat-SemiBold'] text-xl text-white">
              Tất cả
            </Text>
            <Text className="font-['Montserrat-ExtraLight'] text-xl text-white">
              Bài hát
            </Text>
          </View>
          <TouchableOpacity>
            <View className="flex-row  items-center">
              <Text className="text-slate-400 text-xs">Sắp xếp</Text>
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
          data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item?.encodeId}
        // onEndReached={loadMoreData}
        // onEndReachedThreshold={0.1}
        // ListFooterComponent={renderFooter}
        />
      </Animated.View>
    </BottomSheet>
  );
};

export default AudioTracks;
// "bg-[#21234E]"
//   "bg-[#21234e3f]"

// const toggleAudioQueueStyles = useAnimatedStyle(() => {
//   return {
//     transform: [{ translateX: withSpring(offset.value) }],
//   };
// });
