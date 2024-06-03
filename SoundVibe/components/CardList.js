import React from "react";
import { View, FlatList } from "react-native";
import Card from "./Card";
import { memo } from "react";

const CardList = ({ data, type }) => {
  return (
    // Container
    <FlatList
      style={{ marginTop: 5 }}
      ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => (
        <Card
          id={item?.encodeId}
          type={type || item?.type || item?.textType}
          title={item?.title}
          artist={item?.artistsNames}
          thumbnail={item?.thumbnailM}
          isLocal={item?.isLocal || false}
        />
      )}
    />
  );
};

export default memo(CardList);
