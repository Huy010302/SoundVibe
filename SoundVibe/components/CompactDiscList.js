import { View, Text, ScrollView } from "react-native";
import React from "react";
import CompactDisc from "./CompactDisc";

const CompactDiscList = ({ albums }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex-row gap-3 py-2"
    >
      {albums?.map((album) => (
        <View key={album.id}>
          <CompactDisc
            id={album.id}
            title={album.title}
            artist={album.artist}
            thumbnail={album.thumbnail}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default CompactDiscList;
