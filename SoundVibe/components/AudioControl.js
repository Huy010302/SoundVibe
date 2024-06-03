import {
  View,
  Text,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from "react-native";
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { repeatState } from "../utils/constants";
import { joinArtistsName } from "../utils/helpers";
import { MaterialIcons } from "@expo/vector-icons";
import * as Icons from "react-native-heroicons/solid";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSongs,
  selectTypePlay,
  setLyrics,
  setSongIdIsPlaying,
} from "../app/reducers/playlistSlice";
import LyricRender from "./LyricRender";
import { GlobalContext } from "../contexts/GlobalContext";
import TimeSliderDuration from "./TimeSliderDuration";
import {
  getAudioUriBySongId,
  getDataToAsyncStorage,
  getIndexCurrent,
  getSongDuration,
  getSongIdByIndex,
  toast,
} from "../libs";
import Icon from 'react-native-vector-icons/Ionicons';

const AudioControl = ({
  sound,
  songs,
  songIdIsPlaying,
  imageBackground,
  audioDuration,
  setAudioDuration,
  playNewAudio,
}) => {
  const [thumbnail, setThumbnail] = useState();
  const [account, setAccount] = useState();
  const repeatModeRef = useRef(repeatState.NULL);
  const [volumeIsOpening, setVolumeIsOpening] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioPosition, setAudioPosition] = useState(0);
  const [isShareActive, setIsShareActive] = useState(false);
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const scrollX = useRef(new Animated.Value(0)).current;
  const thumbnailRef = useRef();

  const dispatch = useDispatch();
  const typePlay = useSelector(selectTypePlay);
  const indexCurrent = getIndexCurrent(songs, songIdIsPlaying);
  const { toggleFavoriteSelecterModal } = useContext(GlobalContext);

  const setSongId = (id) => dispatch(setSongIdIsPlaying(id));

  const skipPreviousAudio = useCallback(async () => {
    if (songs.length !== 1) {
      await sound.unloadAsync();
      setAudioPosition(0);

      if (indexCurrent === 0) {
        const id = getSongIdByIndex(songs, songs.length - 1);
        setSongId(id);
        let url =
          typePlay === "local-songs"
            ? songs[songs.length - 1].audioUrl
            : getAudioUriBySongId(id);
        playNewAudio(url);
      } else {
        const id = getSongIdByIndex(songs, indexCurrent - 1);
        setSongId(id);
        let url =
          typePlay === "local-songs"
            ? songs[indexCurrent - 1].audioUrl
            : getAudioUriBySongId(id);
        playNewAudio(url);
      }
    }
  }, [songIdIsPlaying]);

  const skipNextAudio = useCallback(async () => {
    if (songs.length !== 1) {
      await sound.unloadAsync();
      setAudioPosition(0);

      if (indexCurrent === songs.length - 1) {
        const id = getSongIdByIndex(songs, 0);
        setSongId(id);
        let url =
          typePlay === "local-songs"
            ? songs[0].audioUrl
            : getAudioUriBySongId(id);
        playNewAudio(url);
      } else {
        const id = getSongIdByIndex(songs, indexCurrent + 1);
        setSongId(id);
        let url =
          typePlay === "local-songs"
            ? songs[indexCurrent + 1].audioUrl
            : getAudioUriBySongId(id);
        playNewAudio(url);
      }
    }
  }, [songIdIsPlaying]);

  const changeRepeatMode = () => {
    switch (repeatModeRef.current) {
      case repeatState.NULL:
        repeatModeRef.current = repeatState.ALWAYS;
        sound.setIsLoopingAsync(true);
        break;
      default:
        repeatModeRef.current = repeatState.NULL;
        sound.setIsLoopingAsync(false);
        break;
    }
  };

  const changeVolumeState = async () => {
    setVolumeIsOpening((prev) => !prev);
    await sound.setIsMutedAsync(volumeIsOpening);
  };

  const changeStateAudioIsPlaying = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying((prev) => !prev);
  };

  const onScrollEvent = () => {
    return Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: { x: scrollX },
          },
        },
      ],
      {
        useNativeDriver: true,
      }
    );
  };

  const renderItems = useCallback(
    ({ item, idex }) => {
      const titleCustom = item?.title;
      return (
        <Animated.View className="items-center rounded-lg space-y-2">
          <View
            style={{ width: Dimensions.get("window").width }}
            className="items-center pt-4"
          >
            <Image
              className="rounded-lg "
              style={{
                width: Dimensions.get("window").width * 0.6,
                height: Dimensions.get("window").width * 0.6,
              }}
              source={{ uri: item?.thumbnailM || item?.thumbnail }}
            />
          </View>
          <View
            style={{
              width: Dimensions.get("window").width * 0.85,
            }}
            className="gap-2 items-center"
          >
            <Text className="text-center text-3xl text-white font-bold">
              {titleCustom}
            </Text>
            <Text className="text-center text-base text-white">
              {item?.artistsNames}
            </Text>
          </View>
        </Animated.View>
      );
    },
    [songs]
  );

  const handleAddSongToFavoriteList = async () => {
    if (!account) {
      toast("Hãy đăng nhập để sử dụng chức năng này!");
    } else {
      toggleFavoriteSelecterModal();
    }
  };

  const handleShare = async () => {
    setIsModalVisible(true);
  };

  const handlePlaybackStatus = useCallback(
    async (playbackStatus) => {
      if (!playbackStatus.isLoaded) {
        if (playbackStatus.error) {
          console.log(
            `Encountered a fatal error during playback: ${playbackStatus.error}`
          );
        }
      } else {
        if (playbackStatus.isPlaying) {
          setAudioPosition(playbackStatus.positionMillis);
        }
        if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
          sound.unloadAsync();
          setAudioPosition(0);
          try {
            if (indexCurrent !== songs.length - 1) {
              const songId = getSongIdByIndex(songs, indexCurrent + 1);
              dispatch(setSongIdIsPlaying(songId));
            } else {
              const songId = getSongIdByIndex(songs, 0);
              dispatch(setSongIdIsPlaying(songId));
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    },
    [indexCurrent, songs]
  );

  useEffect(() => {
    (async () => {
      const acc = await getDataToAsyncStorage("acc");
      setAccount(acc);
    })();
  }, []);

  useEffect(() => {
    sound.setOnPlaybackStatusUpdate(handlePlaybackStatus);
    setAudioDuration(getSongDuration(songs, songIdIsPlaying));
    let url =
      typePlay === "local-songs"
        ? songs[indexCurrent].audioUrl
        : getAudioUriBySongId(songIdIsPlaying);
    playNewAudio(url);
  }, [indexCurrent]);

  useEffect(() => {
    setThumbnail(imageBackground);
  }, [imageBackground]);

  if (songs.length === 0) return <Loader />;

  const titleCustom = songs[indexCurrent]?.title;
  const artistsNames =
    songs[indexCurrent]?.artistsNames ||
    joinArtistsName(songs[indexCurrent]?.artists);

  return (
    <View className="mt-4">

      {/* Image */}
      <View className="items-center rounded-lg space-y-2">
        <View
          style={{ width: Dimensions.get("window").width }}
          className="items-center pt-4"
        >
          <Image
            className="rounded-lg "
            style={{
              width: Dimensions.get("window").width * 0.6,
              height: Dimensions.get("window").width * 0.6,
            }}
            source={{
              uri: thumbnail,
            }}
          />
        </View>
        <View
          style={{
            width: Dimensions.get("window").width * 0.85,
          }}
          className="gap-2 items-center"
        >
          <Text className="text-center text-3xl text-white font-bold">
            {titleCustom}
          </Text>
          <Text className="text-center text-base text-white">
            {artistsNames}
          </Text>
        </View>
      </View>

      {/* Time audio item audio */}
      <View>
        <View className="flex-row justify-between">
          <TouchableOpacity
            className="ml-9"
            onPress={() => {
              setIsShareActive((prev) => !prev);
              handleShare();
            }}
          >
            <MaterialIcons
              name={`share`}
              color={isShareActive ? "#FF0000" : "#fff"}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="mr-9"
            onPress={() => {
              setIsFavoriteActive((prev) => !prev);
            }}
          >
            <MaterialIcons
              name={`favorite`}
              size={30}
              color={isFavoriteActive ? "#FF0000" : "#fff"}
            />
          </TouchableOpacity>
        </View>

        <View className="px-4">
          <TimeSliderDuration
            sound={sound}
            audioDuration={audioDuration}
            audioPosition={audioPosition}
            setAudioPosition={setAudioPosition}
          />
        </View>

        <View className="flex-row justify-around items-center">
          <TouchableOpacity onPress={changeRepeatMode}>
            <MaterialIcons
              name={`${repeatModeRef.current === repeatState.NULL
                ? "repeat"
                : "repeat-one-on"
                }`}
              color={"#fff"}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipPreviousAudio}>
            <MaterialIcons name="skip-previous" color={"#fff"} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            className="p-2 bg-[#21234ef5] rounded-full"
            onPress={changeStateAudioIsPlaying}
          >
            <MaterialIcons
              name={`${isPlaying ? "pause" : "play-arrow"}`}
              color={"#fff"}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipNextAudio}>
            <MaterialIcons name="skip-next" color={"#fff"} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAddSongToFavoriteList()}>
            <MaterialIcons name={`library-add`} color={"#fff"} size={30} />
          </TouchableOpacity>
        </View>

        <View className="pt-5">
          <LyricRender
            currentTime={audioPosition}
            songIdIsPlaying={songIdIsPlaying}
          />
        </View>
      </View>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalOverlay} className="row-end-auto">
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Share this song!</Text>
            <Button
              title="Close"
              onPress={() => setIsModalVisible(!isModalVisible)}
            />
          </View>
        </View>
      </Modal> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.shareContainer}>
          <TouchableOpacity
            style={styles.underBg}
            onPress={() => setIsModalVisible(false)}
          >
            <View style={{ flex: 1 }} />
          </TouchableOpacity>
          <View className="p-2 bg-slate-100 items-center">
            <View className="w-32 h-32 mb-2">
              <Image source={{ uri: thumbnail }} style={styles.thumbnailImage} />
            </View>
            <Text className="font-bold text-xl">{titleCustom}</Text>
            <Text className="text-gray-500 text-md">{artistsNames}</Text>
            <Text className="font-bold">Share via:</Text>
            <View style={styles.shareOptionsContainer}>
              {/* Add your share options here */}
              <TouchableOpacity style={styles.shareOption}>
                <Icon name="logo-facebook" size={32} color="#4267B2" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareOption}>
                <Icon name="logo-twitter" size={32} color="#1DA1F2" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareOption}>
                <Icon name="logo-whatsapp" size={32} color="#25D366" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareOption}>
                <Icon name="link-outline" size={32} color="#4CAF50" />
              </TouchableOpacity>
            </View>
            <Button
              title="Close"
              onPress={() => setIsModalVisible(false)}
            />
          </View>
        </View>
      </Modal>



    </View>
  );
};

const styles = StyleSheet.create({
  underBg: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end'
  },

  shareContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  thumbnailImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  shareOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  shareOption: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
  },
});

export default AudioControl;
