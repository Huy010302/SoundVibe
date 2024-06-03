import { SafeAreaView } from "react-native-safe-area-context";
import ArtistsList from "./../components/ArtistsList";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { fontMap } from "../utils/constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, View } from "react-native";

const Stack = createNativeStackNavigator();

const ArtistScreen = () => {
  const [fontsLoaded] = useFonts(fontMap);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView
      className="bg-main flex-1 space-y-2"
      onLayout={onLayoutRootView}
    >
      {/* Body */}
      <ArtistsList />
    </SafeAreaView>
  );
};

export default ArtistScreen;
