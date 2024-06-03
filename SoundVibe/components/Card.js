import { View, Text, Image, TouchableOpacity } from "react-native";
import { getShortString } from "./../utils/getShortString";
import { useDispatch } from "react-redux";
import { memo, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  setTypePlay,
  setSongIdIsPlaying,
  setPlaylistId,
  setPlaylistTitle,
} from "../app/reducers";
import { fetchLocalSongs, getPlaylistDataById } from "../libs";

const Card = ({ index, id, type, title, artist, thumbnail, isLocal }) => {
  const navigator = useNavigation();
  const dispatch = useDispatch();

  // context
  // const { setTrackIndexIsPlaying } = useContext(GlobalContext);

  const handlePress = async () => {
    console.log("type: ", type);

    if (isLocal) {
      const localSongs = await fetchLocalSongs();

      dispatch(setTypePlay(type));
      dispatch(setSongIdIsPlaying(localSongs.data[0].encodeId));
      dispatch(setPlaylistId("local-songs"));
    } else {
      dispatch(setTypePlay(type));
      dispatch(setPlaylistTitle(title));
      if (type === "playlist") {
        // get song list by playlist id
        const data = await getPlaylistDataById(id);
        // set song id first play
        dispatch(setSongIdIsPlaying(data.items[0].encodeId));
        dispatch(setPlaylistId(id));
      } else {
        dispatch(setSongIdIsPlaying(id));
      }
    }
    navigator.navigate("AudioPlayer");
  };

  return (
    <TouchableOpacity className="" onPress={handlePress}>
      <Image
        source={{ uri: thumbnail }}
        className="w-40 h-40 rounded-lg object-cover"
      />
      <View className="py-1 w-28 mt-3">
        <Text className="text-white font-['Montserrat-Medium'] text-sm flex-wrap">
          {getShortString(title, 25)}
        </Text>
        <Text className="font-['Montserrat-Medium'] text-slate-400 text-xs">
          {getShortString(artist, 15)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Card);
