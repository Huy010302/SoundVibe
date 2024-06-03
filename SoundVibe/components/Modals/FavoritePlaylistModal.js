import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../Button";
import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { getDataToAsyncStorage, toast } from "../../libs";
import { favoriteApi } from "../../app/api";
import { mainShadow } from "../../utils";
import * as Icons from "react-native-heroicons/solid";
import Modal from "react-native-modal";
import Loader from "../Loader";
import {
  reset,
  setPlaylistId,
  setPlaylistTitle,
  setSongIdIsPlaying,
  setSongs,
  setTypePlay,
} from "../../app/reducers";
import { setTypeIsPlaying } from "../../app/reducers/browserSlice";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { GlobalContext } from "../../contexts/GlobalContext";
import { uniqueArray } from "../../utils/helpers";
import { SwipeListView } from "react-native-swipe-list-view";

const FavoritePlaylistModal = ({
  onPress,
  onFetch,
  onModalWillHide,
  playlists,
  setPlaylists,
}) => {
  // state
  const [updateFavorites, setUpdateFavorites] = useState([]);

  // ref
  const deletedActionRef = useRef(false);

  // store
  const dispatch = useDispatch();

  // context
  const { drawer } = useContext(GlobalContext);

  // navigation
  const navigation = useNavigation();

  const choosePlaylistAndPlay = (playlistId, title, songs) => {
    if (songs.length > 0) {
      // dispatch(reset());

      const songInfo = {
        items: uniqueArray(songs, "encodeId"),
        limit: 0,
        page: 1,
        total: uniqueArray(songs, "encodeId").length,
        totalDuration: null,
      };

      dispatch(setTypePlay("favorite"));

      dispatch(setSongIdIsPlaying(songInfo.items[0].encodeId));
      dispatch(setPlaylistId(playlistId));
      dispatch(setPlaylistTitle(title));
      dispatch(setSongs(songInfo));

      // Close Favorite Playlist Modal
      onModalWillHide();

      // Close drawer
      drawer.current.closeDrawer();

      navigation.navigate("AudioPlayer");
    } else {
      toast("Không có bài hát nào trong Danh sách", -1, 5000);
    }
  };

  const renderFavoritePlaylists = ({ item }) => {
    return (
      <TouchableOpacity
        className="flex-row space-x-4"
        onPress={() => choosePlaylistAndPlay(item._id, item.title, item?.songs)}
      >
        <Image source={{ uri: item.thumbnail }} className="w-14 h-14 rounded" />
        <View>
          <Text className="text-white font-['Montserrat-SemiBold'] ">
            {item.title}
          </Text>
          <Text className="text-slate-400 text-xs italic">
            Total: {item?.songs.length}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // SwipeListView handler

  const handleFilterPlaylists = (id, title, rowMap) => {
    deletedActionRef.current = true;
    rowMap[id].closeRow();
    toast(`Remove playlist: '${title}' successful!`, -1, 5000);
    const newPlaylists = updateFavorites.filter((item) => item._id !== id);
    setPlaylists(newPlaylists);
  };

  // component unmount action
  const handleUpdateFavoritePlaylists = async (idList) => {
    if (deletedActionRef.current) {
      const account = await getDataToAsyncStorage("acc");

      const data = await favoriteApi.update(
        account._id,
        idList,
        account.accessToken
      );
      if (data.status === 200) toast(data.message, -1, 5000);
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  useEffect(() => {
    setUpdateFavorites(playlists);
  }, [playlists]);

  useEffect(() => {
    // setUpdateFavorites(playlists);
    const favoriteIdList = updateFavorites.map((item) => item._id);

    return () => {
      handleUpdateFavoritePlaylists(favoriteIdList);
    };
  }, [updateFavorites]);

  return (
    <View className="px-4 py-2 m-4 rounded space-y-4 bg-[#191b28d5]">
      {/* header */}
      <View className="py-2 flex-row items-center">
        <View className="flex-1">
          <Text className="text-2xl font-['Montserrat-Medium'] text-white">
            Danh sách yêu thích của tôi
          </Text>
          <Text className="text-sm text-slate-400 font-['Montserrat-Medium']">
            Chọn Danh sách phát 🥰
          </Text>
        </View>
        <TouchableOpacity className="items-center" onPress={onPress}>
          <Icons.DocumentPlusIcon size={24} color="#94a3b8" />
          <Text className="text-xs text-slate-400">Thêm</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full">
        {!updateFavorites && <Loader />}
        {updateFavorites.length !== 0 && (
          <SwipeListView
            showsVerticalScrollIndicator={false}
            style={{ height: Dimensions.get("window").height / 2 }}
            ItemSeparatorComponent={() => <View style={{ padding: 5 }} />}
            data={updateFavorites}
            renderItem={renderFavoritePlaylists}
            renderHiddenItem={(data, rowMap) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    handleFilterPlaylists(
                      data.item._id,
                      data.item.title,
                      rowMap
                    );
                  }}
                  className="w-[75px] h-full justify-center items-center bg-[red]"
                >
                  <Icons.TrashIcon size={24} color="red" />
                </TouchableOpacity>
              );
            }}
            leftOpenValue={75}
            keyExtractor={(item) => item._id}
          />
        )}
      </View>
    </View>
  );
};

export default memo(FavoritePlaylistModal);
