import { View, Image, Animated } from "react-native";
import { useEffect, useState } from "react";
import useRotation from "./../hooks/useRotation";

const DiscCard = ({ width = 14, height = 14, thumbnail, playing }) => {
  const [playStatus, setPlayStatus] = useState(true);
  const rotate = useRotation(playStatus);

  // transform image to rotate
  const animatedStyle = playStatus ? { transform: [{ rotate }] } : {};

  useEffect(() => {
    // pause or continue disc rotation
    setPlayStatus(playing);
  }, [playing]);

  return (
    <View className="justify-center items-center">
      <Animated.Image
        className={`relative w-14 h-14 object-cover rounded-full`}
        source={{ uri: thumbnail }}
        style={[animatedStyle]}
      />
      <View
        className={`${
          width >= 28 ? "w-7 h-7" : "w-5 h-5"
        } absolute bg-[#191b2838] rounded-full shadow drop-shadow-disc`}
      />
      <View
        className={`${
          width >= 28 ? "w-[21px] h-[21px]" : "w-[13px] h-[13px]"
        } absolute bg-[#ffffff75] rounded-full`}
      />
      <View
        className={`${
          width >= 28 ? "w-5 h-5" : "w-3 h-3"
        } absolute bg-[#191B28] rounded-full`}
      />
    </View>
  );
};

export default DiscCard;
