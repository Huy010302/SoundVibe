import { View, Text, TouchableOpacity, Image } from "react-native";
import { useContext, useEffect, useRef } from "react";
import { getShortString } from "../utils/getShortString";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AudioContext } from "../contexts/AudioContext";
import { GlobalContext } from "../contexts/GlobalContext";

const PlaylistItem = ({ id, title, description, image, total }) => {
  const navigator = useNavigation();

  // context
  const { getIdOfPlaylistIsPlaying, setPlaylistWillPlay } =
    useContext(AudioContext);

  const playlistIdRef = useRef();

  const handleReadPlaylist = () => {
    setPlaylistWillPlay(id);
    navigator.navigate("AudioPlayer");
  };

  useEffect(() => {
    playlistIdRef.current = getIdOfPlaylistIsPlaying();
  }, []);

  return (
    <TouchableOpacity
      className={`${
        playlistIdRef.current === id ? "bg-[#21234E]" : "bg-[#21234e3f]"
      } py-2 px-3 rounded-md`}
      onPress={handleReadPlaylist}
    >
      <View className="flex-row py-2 space-x-3">
        <Image source={{ uri: image }} className="w-20 h-20 rounded" />
        <View className="relative flex-col flex-1 justify-between">
          <View className=" flex-col">
            <Text className="text-white font-['Montserrat-Medium'] text-base flex-wrap">
              {getShortString(title, 50)}
            </Text>
            <Text className="font-['Montserrat-Medium'] text-slate-400 text-xs">
              {getShortString(description, 40)}
            </Text>
          </View>
          <View className="flex-row">
            <Text className="text-xs text-white font-['Montserrat-Medium']">
              0 / {total}
            </Text>
          </View>
          {/* Play or Pause button */}
          <LinearGradient
            colors={["#404494", "#8a90f1de"]}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 0.2, y: 1 }}
            className="absolute rounded-full p-1 right-0 bottom-0"
          >
            <TouchableOpacity>
              <MaterialIcons
                name={`${
                  playlistIdRef.current === id ? "pause" : "play-arrow"
                }`}
                color="#fff"
                size={18}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default PlaylistItem;
