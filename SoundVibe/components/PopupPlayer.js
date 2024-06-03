import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import DiscCard from "./DiscCard";
import TextTicker from "react-native-text-ticker";

import { useDispatch, useSelector } from "react-redux";
import { GlobalContext } from "../contexts/GlobalContext";
import { reset } from "../app/reducers/playlistSlice";

const screenWidth = Dimensions.get("window").width;

const PopupPlayer = () => {
  // store
  const { songs } = useSelector((state) => state.playlist);

  const dispatch = useDispatch();

  // global context
  const {
    sound,
    isShowPopup,
    trackIndexIsPlaying,
    setTrackIndexIsPlaying,
    setAudioUri,
    isPlayingRef,
  } = useContext(GlobalContext);

  // state
  const [playing, setPlaying] = useState(true);

  const handleClosePopup = async () => {
    // reset the track data in popup
    if (sound) {
      await sound.unloadAsync();
      dispatch(reset());
      // close player popup
      // setShow(false);
    } else console.log("not sound loaded");
  };

  const skipPreviousAudio = async () => {
    if (songs.items.length !== 1) {
      await sound.unloadAsync();
      isPlayingRef.current = false;
      if (trackIndexIsPlaying !== 0) {
        setTrackIndexIsPlaying(trackIndexIsPlaying - 1);
      } else {
        setTrackIndexIsPlaying(songs.items.length - 1);
      }
    }
  };

  const skipNextAudio = async () => {
    if (songs.items.length !== 1) {
      await sound.unloadAsync();
      isPlayingRef.current = false;

      if (trackIndexIsPlaying !== songs.items.length - 1) {
        setTrackIndexIsPlaying(trackIndexIsPlaying + 1);
      } else {
        setTrackIndexIsPlaying(0);
      }
    }
  };

  const changeStateAudioIsPlaying = async () => {
    if (playing) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }

    setPlaying((prev) => !prev);
  };

  useEffect(() => {
    const setAudioUriToSoundPlayer = () => {
      try {
        setAudioUri(
          `http://api.mp3.zing.vn/api/streaming/audio/${songs.items[trackIndexIsPlaying].encodeId}/320`
        );
      } catch (error) {
        console.log(error);
      }
    };
    if (songs) {
      // set audio url
      setAudioUriToSoundPlayer();
    }
  }, [trackIndexIsPlaying]);

  if (!isShowPopup || !songs) return null;
  return (
    <View className="bg-[#191b28d3] flex-1">
      <View className="flex-row items-center justify-between py-2 px-3 space-x-4">
        <TouchableOpacity onPress={handleClosePopup}>
          <MaterialIcons name="close" color="#b4c1cf" size={18} />
        </TouchableOpacity>

        <View className="flex-row space-x-3 flex-1">
          <DiscCard
            width={14}
            height={14}
            thumbnail={
              songs.items[trackIndexIsPlaying].thumbnailM ||
              songs.items[trackIndexIsPlaying].thumbnail
            }
            playing={playing}
          />
          <View
            className="flex-col justify-center space-y-1"
            style={{ maxWidth: screenWidth * 0.4 }}
          >
            <View>
              <TextTicker
                duration={5000}
                loop
                bounce
                repeatSpacer={100}
                marqueeDelay={2000}
              >
                <Text className="text-white text-base font-['Montserrat-SemiBold']">
                  {songs.items[trackIndexIsPlaying].title}
                </Text>
              </TextTicker>
            </View>
            <View>
              <TextTicker
                duration={5000}
                loop
                bounce
                repeatSpacer={100}
                marqueeDelay={2000}
              >
                <Text className="text-xs text-[#708090]">
                  {songs.items[trackIndexIsPlaying].artistsNames}
                </Text>
              </TextTicker>
            </View>
          </View>
        </View>

        <View className="flex-row items-center space-x-3 ">
          <TouchableOpacity>
            <MaterialIcons
              name="skip-previous"
              color="#fff"
              size={20}
              onPress={skipPreviousAudio}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="justify-center items-center bg-slate-700 w-11 h-11 rounded-full"
            onPress={() => setPlaying((cur) => !cur)}
          >
            <MaterialIcons
              name={`${!playing ? "play-arrow" : "pause"}`}
              color="#fff"
              size={20}
              onPress={changeStateAudioIsPlaying}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="skip-next"
              color="#fff"
              size={20}
              onPress={skipNextAudio}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <Progress percent={(audioPosition / audioDuration) * 100} /> */}
    </View>
  );
};

export default PopupPlayer;
