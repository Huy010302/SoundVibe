import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useState, useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { bgHome, fontMap, routes } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PopupPlayer from "./PopupPlayer";
import { discCard } from "./../utils/constants";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import BrowserScreen from "./../screens/BrowserScreen";
import ArtistScreen from "../screens/ArtistScreen";
import AudioPlayer from "./../screens/./AudioPlayer";
import GenresScreen from "./../screens/GenresScreen";
import MyMusicScreen from "./../screens/MyMusicScreen";
import SearchScreen from "../screens/SearchScreen";
import UserScreen from "../screens/UserScreen";

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

const TabItem = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };


        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Navigations = () => {
  return (
    <View className="relative flex-1">
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#191B28",
            paddingTop: 10,
            paddingBottom: 10,
            height: 65,
          },
          headerStyle: { backgroundColor: "#42f44b" },
          headerTintColor: "#191B28",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused, color, size }) => {
            const routeIndex = routes.findIndex(
              (item) => item.name === route.name
            );

            return (
              <MaterialIcons
                name={routes[routeIndex].icon}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Browser"
          component={BrowserScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Artists"
          component={ArtistScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Genres"
          component={GenresScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="My Music"
          component={MyMusicScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
      <View className="w-full absolute bottom-0 mb-[65px]">
        <PopupPlayer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Navigations;
