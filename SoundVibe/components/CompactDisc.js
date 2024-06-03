import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import DiscCard from "./DiscCard";

const CompactDisc = ({ id, title, artist, thumbnail }) => {
  return (
    <TouchableOpacity>
      <View>
        <DiscCard width={28} height={28} thumbnail={thumbnail} />
      </View>
      <View className="justify-center items-center py-2">
        <Text className="text-white text-sm font-['Montserrat-SemiBold']">
          {title}
        </Text>
        <Text className="text-slate-400 text-xs font-['Montserrat-Medium']">
          {artist}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CompactDisc;
