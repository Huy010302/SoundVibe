import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Tab = ({ name, tabName, tabActive, setTabActive }) => {
  return (
    <TouchableOpacity
      className={`py-2 px-4 rounded-lg ${tabActive === tabName && " bg-white"}`}
      onPress={() => setTabActive(tabName)}
    >
      <Text
        className={`font-['Montserrat-SemiBold'] ${
          tabActive !== tabName && "text-white"
        }`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;
