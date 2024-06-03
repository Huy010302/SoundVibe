import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Playlists from "../components/Playlists";
const PlaylistsScreen = () => {
  return (
    <View className=" px-4 bg-main h-full">
      <View className="flex-row justify-between items-center py-2">
        <View className="flex-row space-x-1">
          <Text className="font-['Montserrat-SemiBold'] text-xl text-white">
            All
          </Text>
          <Text className="font-['Montserrat-ExtraLight'] text-xl text-white">
            Playlists
          </Text>
        </View>
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

      <Playlists />
    </View>
  );
};

export default PlaylistsScreen;
