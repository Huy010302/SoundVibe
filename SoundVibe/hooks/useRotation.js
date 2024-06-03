import { Animated, Easing } from "react-native";
import { useRef, useEffect, useCallback } from "react";

const useRotation = (playing) => {
  const animation = useRef(new Animated.Value(0)).current;

  // configure animation
  const animator = () => {
    return Animated.timing(animation, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    });
  };

  const startAnimation = useCallback(() => {
    animator().start(({ finished }) => {
      if (finished) {
        animation.setValue(0);
        startAnimation();
      }
    });
  }, [animation]);

  useEffect(() => {
    if (playing) startAnimation();
    else {
      animation.setValue(0);
    }
  }, [playing]);

  //interpolate
  const rotateInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return rotateInterpolation;
};

export default useRotation;
