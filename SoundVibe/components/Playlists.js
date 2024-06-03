import { View, FlatList, Dimensions } from "react-native";
import PlaylistItem from "./PlaylistItem";
import { useContext } from "react";
import { AudioContext } from "../contexts/AudioContext";

const { height } = Dimensions.get("window");

const Playlists = (props) => {
  // const { playlists } = useContext(AudioContext);

  // if (!playlists) return null;

  return (
    <>
      <FlatList
        className="pt-2"
        style={{ height: (height * 67) / 100 }}
        contentContainerStyle={{ paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ padding: 5 }} />}
        data={playlists}
        renderItem={({ item }) => {
          return (
            <PlaylistItem
              key={item?.id}
              id={item?.id}
              title={item?.name}
              description={item?.description}
              image={item?.images[0].url}
              total={item?.tracks?.total}
            />
          );
        }}
      />
    </>
  );
};

export default Playlists;
