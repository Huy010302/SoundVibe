import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BrowserScreen from "./BrowserScreen";
import ArtistScreen from "./ArtistScreen";
import ArtistsDetail from "./ArtistsDetail";
import AudioPlayer from "./AudioPlayer";
import PopupPlayer from "./../components/PopupPlayer";
import { useContext, useState, useEffect, useCallback, memo } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import * as Icons from "react-native-heroicons/solid";
import Modal from "react-native-modal";
import Auth from "../components/Auth";
import {
  getDataToAsyncStorage,
  removeDataFromAsyncStorage,
  toast,
} from "../libs";
import { authApi } from "./../app/api/authApi";

import randomColor from "randomcolor";
import PasswordChangeModal from "../components/Auth/PasswordChangeModal";
import { useDispatch } from "react-redux";
import { reset, setName } from "../app/reducers";
import FavoritePlaylistModal from "../components/Modals/FavoritePlaylistModal";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { avatar, fontMap, red, mainShadow, getFirstCharacter } from "../utils";
import AddNewFavoritePlaylist from "../components/Modals/AddNewFavoritePlaylist";
import { favoriteApi } from "../app/api";
import FavoritePlaylistSelectorModal from "../components/Modals/FavoritePlaylistSelectorModal";

const Stack = createNativeStackNavigator();

const ActionLine = (props) => {
  return (
    <TouchableOpacity
      className={`${props.isActive
        ? " bg-[#25263d]"
        : "bg-[#1e1f31cb]"
        } p-4 flex-row space-x-2 items-center`}
      style={mainShadow}
      onPress={props.action}
    >
      {props.icon}
      <Text className="text-white text-base">{props.title}</Text>
    </TouchableOpacity>
  );
};

SplashScreen.preventAutoHideAsync();

const RootScreen = () => {
  // store
  const dispatch = useDispatch();

  // state
  const [drawerPosition] = useState("left");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPasswordModalVisible, setPasswordModalVisible] = useState(false);
  const [isFavoriteModalVisible, setFavoriteModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const [account, setAccount] = useState();

  const [playlists, setPlaylists] = useState([]);

  // context
  const {
    drawer,
    isFavoriteSelecterModalVisible,
    toggleFavoriteSelecterModal,
  } = useContext(GlobalContext);

  const toggleAuthModal = () => setModalVisible(!isModalVisible);
  const togglePasswordModal = () => {
    if (!account) {
      toast("Hãy đăng nhập để sử dụng chức năng này !");
    } else {
      setPasswordModalVisible(!isPasswordModalVisible);
    }
  };
  const toggleFavoriteModal = () => {
    if (!account) {
      toast("Hãy đăng nhập để sử dụng chức năng này !");
    } else {
      setFavoriteModalVisible(!isFavoriteModalVisible);
    }
  };
  const toggleAddModal = () => {
    setAddModalVisible(!isAddModalVisible);
  };

  const logout = async (id, token) => {
    const res = await authApi.logout(id, token);

    // set emtry account in async storage
    await removeDataFromAsyncStorage("acc");

    // deleted name account in store
    dispatch(setName(null));

    // delete account data
    setAccount(null);

    // notify about logout succesfully
    toast(res.message);
  };

  const handleSetAccount = (value) => {
    setAccount(value);
  };

  const fetchFavoritePlaylist = async () => {
    // get user id
    const user = await getDataToAsyncStorage("acc");

    if (user) {
      const data = await favoriteApi.getAll(user._id, user.accessToken);

      setPlaylists(data.data);
    }
  };

  const drawerActions = [

    {
      title: "Danh sách của tôi",
      key: "myplaylists",
      action: () => {
        toggleFavoriteModal();
      },
      icon: <Icons.MusicalNoteIcon size={22} color={"white"} />,
    },
    {
      title: account ? "Đăng xuất" : "Đăng nhập",
      key: account ? "logout" : "login",
      action: async () =>
        account
          ? await logout(account._id, account.accessToken)
          : toggleAuthModal(),
      icon: <Icons.ArrowRightOnRectangleIcon size={22} color={"white"} />,
    },
  ];

  const navigationView = () => {
    const color = randomColor({ luminosity: "dark" });

    return (
      <View className="flex-1 mt-6">
        <View className="bg-[#25263d] p-4 flex-row space-x-4">
          {account ? (
            <View
              className={`w-14 h-14 rounded-full justify-center items-center`}
              style={{
                borderColor: "white",
                borderWidth: 1,
                backgroundColor: color,
              }}
            >
              {account?.avatar ? (
                <Image
                  source={{ uri: account?.avatar }}
                  className="w-14 h-14 rounded-full"
                  style={{ borderColor: "white", borderWidth: 1 }}
                />
              ) : (
                <Text className="text-2xl font-bold text-white">
                  {getFirstCharacter(account?.name)}
                </Text>
              )}
            </View>
          ) : (
            <View
              className={`w-14 h-14 rounded-full justify-center items-center`}
              style={{
                borderColor: "white",
                borderWidth: 1,
                backgroundColor: color,
              }}
            >
              <Text className="text-2xl font-bold text-white">?</Text>
            </View>

          )}

          <View>
            {account ? (
              <>
                <Text className="text-white text-lg font-semibold">
                  {account.name}
                </Text>
                <Text className="text-slate-400 text-sm">{account.email}</Text>
              </>
            ) : (
              <>
                <Text
                  className="text-white text-lg font-semibold italic"
                  onPress={toggleAuthModal}
                >
                  Đăng nhập
                </Text>
                <Text className="text-slate-400 text-sm">Chưa đăng nhập</Text>
              </>
            )}
          </View>
        </View>
        <View className="flex-1 flex-col mt-2">
          {drawerActions.map((action) => (
            <ActionLine
              title={action.title}
              action={action.action}
              icon={action.icon}
              isActive={true}
              key={action.key}
            />
          ))}
        </View>
      </View>
    );
  };

  useEffect(() => {
    (() => {
      getDataToAsyncStorage("acc").then((acc) => {
        setAccount(acc);
        dispatch(setName(acc?.name));
      });
    })();
  }, []);

  // font custom
  const [fontsLoaded] = useFonts(fontMap);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      drawerBackgroundColor={"#191b286e"}
      renderNavigationView={navigationView}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BrowserScreen"
            component={BrowserScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ArtistScreen"
            component={ArtistScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="AudioPlayer"
            component={AudioPlayer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ArtistsDetail"
            component={ArtistsDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        {/* Auth modal */}
        <Modal
          isVisible={isModalVisible}
          animationIn={"pulse"}
          animationOut={"zoomOut"}
          onBackdropPress={toggleAuthModal}
          style={styles.modal}
        >
          <Auth
            setAccount={handleSetAccount}
            onModalWillHide={() => setModalVisible(!isModalVisible)}
          />
        </Modal>


        {/* Favorite modal */}
        <Modal
          isVisible={isFavoriteModalVisible}
          animationIn={"flipInY"}
          animationOut={"zoomOut"}
          onBackdropPress={toggleFavoriteModal}
          style={styles.modal}
          backdropColor={"#fff0"}
        >
          <FavoritePlaylistModal
            onPress={toggleAddModal}
            onFetch={fetchFavoritePlaylist}
            playlists={playlists}
            setPlaylists={setPlaylists}
            onModalWillHide={() =>
              setFavoriteModalVisible(!isFavoriteModalVisible)
            }
          />
        </Modal>

        {/* Add new favorite playlist */}
        <Modal
          isVisible={isAddModalVisible}
          animationIn={"pulse"}
          animationOut={"zoomOut"}
          onBackdropPress={toggleAddModal}
          style={styles.modal}
        >
          <AddNewFavoritePlaylist
            account={account}
            onFetch={fetchFavoritePlaylist}
            onModalWillHide={() => setAddModalVisible(!isAddModalVisible)}
          />
        </Modal>
        <Modal
          isVisible={isFavoriteSelecterModalVisible}
          animationIn={"pulse"}
          animationOut={"zoomOut"}
          onBackdropPress={toggleFavoriteSelecterModal}
          backdropColor={"#fff0"}
          style={{ ...styles.modal, marginTop: 20, top: 30 }}
        >
          <FavoritePlaylistSelectorModal
            onFetch={fetchFavoritePlaylist}
            playlists={playlists}
            onModalWillHide={() => toggleFavoriteSelecterModal()}
          />
        </Modal>
      </NavigationContainer>
      <View className="w-full absolute bottom-0">
        <PopupPlayer />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  navigationContainer: {
    // backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  modal: {
    position: "absolute",
    top: 0,
    flex: 1,
    margin: 0,
    width: Dimensions.get("window").width,
  },
});
export default RootScreen;
