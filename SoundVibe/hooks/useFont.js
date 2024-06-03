import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { fontMap } from "../utils/constants";

const useFont = () => {
  const [fontsLoaded] = useFonts(fontMap);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
};

export default useFont;
