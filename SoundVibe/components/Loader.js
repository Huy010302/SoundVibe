import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Wave } from "react-native-animated-spinkit";
import { SafeAreaView } from "react-native-safe-area-context";

const Loader = ({ bgNone = false }) => {
  
  return (
    <SafeAreaView
      className={`${
        !bgNone ? "bg-main" : ""
      } justify-center items-center flex-1`}
      style={{
        height: Dimensions.get("window").height,
        zIndex: 100000,
      }}
    >
      <Wave color="#FFF" size={48} />
    </SafeAreaView>
  );
};

export default Loader;
