import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Icons from "react-native-heroicons/solid";
import { avatar, artistsList } from "../utils/constants";
import { formatData } from "../utils/helpers";

const { width } = Dimensions.get("window");
const numColumns = 3;

const ArtistsList = () => {
  const navigation = useNavigation();

  const renderArtistItems = ({ item, index }) => {
    if (item?.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    } else {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("ArtistsDetail")}
        >
          <Image
            source={{
              uri: item?.images[0].url,
            }}
            className="rounded relative"
            style={styles.avatar}
          />
          <Text className="text-white text-center font-extrabold uppercase absolute w-11/12">
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View className="bg-main p-2 space-y-2 ">
      {/* Header */}
      <View className="px-2 space-y-2">
        <View className="flex-row ">
          <View className="flex-1">
            <Text className=" text-white text-2xl font-['Montserrat-SemiBold']">
              Artists
            </Text>
          </View>
          {/* avatar */}
          <View className={`justify-center`}>
            <Image
              source={{ uri: avatar }}
              className="rounded-full w-10 h-10"
            />
          </View>
        </View>
        {/* Search Input */}
        <View className="flex-row space-x-2 items-center bg-[#242636] px-3 py-2 rounded-xl">
          <Icons.MagnifyingGlassIcon color={"#A1A1AD"} />
          <TextInput
            className="flex-1 text-white"
            placeholder="Search a artists name"
            placeholderTextColor={"#727385"}
            cursorColor={"#727385"}
          />
          <Icons.AdjustmentsVerticalIcon color="#A1A1AD" />
        </View>
        <View></View>
      </View>

      {/* artist list */}
      <FlatList
        data={formatData(artistsList?.data.artists.items, numColumns)}
        renderItem={renderArtistItems}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        style={{ height: Dimensions.get("window").height * 0.8 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: Dimensions.get("window").width / numColumns - 20,
    height: Dimensions.get("window").width / numColumns - 20,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: Dimensions.get("window").width / numColumns - 5, // approximate a square
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
});
export default ArtistsList;
