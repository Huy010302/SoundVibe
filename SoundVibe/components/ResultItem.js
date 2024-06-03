import { View, Text, TouchableOpacity, Image } from "react-native";
import { getShortString } from "../utils/getShortString";
import {
  reset,
  setPlaylistId,
  setPlaylistTitle,
  setSongIdIsPlaying,
  setTypePlay,
} from "../app/reducers/playlistSlice";
import {
  selectId,
  aristReset,
  setId,
  setName,
  setThumbnail,
} from "../app/reducers/artistSlice";
import { useNavigation } from "@react-navigation/native";
import { setTypeIsPlaying } from "../app/reducers/browserSlice";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { formatTimeDuration } from "../utils/helpers";
import { getPlaylistDataById } from "../libs";

const ResultItem = ({ onPress, item }) => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const artistId = useSelector(selectId);

  const handlePress = async () => {
    onPress();

    if (item.type === "playlist") {
      // get song list by playlist id
      const data = await getPlaylistDataById(item.encodeId);
      // set song id first play
      dispatch(setSongIdIsPlaying(data.items[0].encodeId));
      dispatch(setPlaylistId(item.encodeId));
      dispatch(setPlaylistTitle(item.keyword));
      navigator.navigate("AudioPlayer");
    } else if (item.type === "song") {
      dispatch(setPlaylistId("song-single"));
      dispatch(setSongIdIsPlaying(item.encodeId));
      dispatch(setPlaylistTitle(item.keyword));
      dispatch(setTypePlay("song-single"));
      navigator.navigate("AudioPlayer");
    } else if (item.type === "artist") {
      // dispatch(aristReset());
      dispatch(setId(item.encodeId));
      dispatch(setName(item.keyword));
      dispatch(setThumbnail(item.thumbnailM));
      navigator.navigate("ArtistsDetail");
    }
  };
  if (!item.type)
    return (
      <TouchableOpacity className="p-2 w-full " onPress={onPress}>
        <Text className="text-base text-white">{item.keyword}</Text>
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity className="p-2 w-full " onPress={handlePress}>
      <View className="flex-row space-x-2">
        <Image
          source={{ uri: item.thumbnailM }}
          className="w-16 h-16 rounded"
        />
        <View className="flex-col">
          <Text className="text-base text-white">
            {getShortString(item.keyword, 40)}
          </Text>
          {item.type === "song" && (
            <View className="space-y-2">
              <Text className="text-xs text-white">{item.artistsNames}</Text>
              <View className="flex-row space-x-1">
                <MaterialIcons name={`timer`} color="#404494" size={15} />
                <Text className="text-slate-400 text-xs">
                  {formatTimeDuration(Number(item?.duration) * 1000)}
                </Text>
              </View>
            </View>
          )}
          {item.type === "artist" && (
            <Text className="text-xs text-white">Nghệ sĩ</Text>
          )}
          {item.type === "playlist" && (
            <Text className="text-xs text-white">Playlist</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResultItem;
