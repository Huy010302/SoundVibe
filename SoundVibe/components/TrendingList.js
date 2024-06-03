import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TrendingList = ({ trendingData }) => {
  return (
    <View className="flex-row justify-around py-2">
      <View>
        <TouchableOpacity key={trendingData[0].id} className="relative">
          <Image
            source={{ uri: trendingData[0]?.thumbnail }}
            className="rounded-xl object-cover w-52 h-52"
          />
          <View className="absolute right-0 p-1 m-1 bg-stone-600 rounded-full">
            <MaterialIcons name="music-note" color="#fff" size={16} />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-col justify-between">
        {trendingData.map(
          (music, idx) =>
            idx > 0 && (
              <TouchableOpacity key={music.id} className="relative">
                <Image
                  source={{ uri: music?.thumbnail }}
                  className={` rounded-xl object-cover w-[100px] h-[100px]`}
                />
                <View className="absolute right-0 p-1 m-1 bg-stone-600 rounded-full">
                  <MaterialIcons name="music-note" color="#fff" size={12} />
                </View>
                {/* <Text>{music.title}</Text> */}
              </TouchableOpacity>
            )
        )}
      </View>
    </View>
  );
};

export default TrendingList;
