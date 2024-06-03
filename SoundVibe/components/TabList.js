import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { tabs } from "../utils/constants";
import Tab from "./Tab";

const TabList = () => {
  const [tabActive, setTabActive] = useState("all");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex-row space-x-2"
    >
      {tabs.map((tab) => (
        <View key={tab.name}>
          <Tab
            name={tab.name}
            tabName={tab.tabName}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default TabList;
