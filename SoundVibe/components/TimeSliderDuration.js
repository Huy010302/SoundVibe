import { View, Text } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { GlobalContext } from "../contexts/GlobalContext";
import { formatTimeDuration } from "../utils/helpers";

const TimeSliderDuration = ({
  sound,
  audioDuration,
  audioPosition,
  setAudioPosition,
}) => {
  // global context
  // const {
  //   sound,
  //   trackIndexIsPlaying,
  //   setTrackIndexIsPlaying,
  //   isPlayingRef,
  //   songs,
  //   audioDuration,
  //   setAudioDuration,
  // } = useContext(GlobalContext);

  const handleSliderValueChange = async (value) => {
    await sound.setPositionAsync(value);
    setAudioPosition(value);
  };

  return (
    <View>
      <Slider
        value={audioPosition}
        minimumValue={0}
        maximumValue={audioDuration}
        minimumTrackTintColor="tomato"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
        onSlidingComplete={handleSliderValueChange}
      />
      <View className="flex-row justify-between px-4">
        <Text className=" text-white">{formatTimeDuration(audioPosition)}</Text>
        <Text className="text-white">{formatTimeDuration(audioDuration)}</Text>
      </View>
    </View>
  );
};

export default TimeSliderDuration;
