import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";

const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={["#5B2E9F", "#CA51F9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text {...props} style={[{ opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
