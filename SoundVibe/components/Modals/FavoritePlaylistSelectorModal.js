import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { uniqueArray } from "../../utils/helpers";
import { Checkbox } from "react-native-paper";
import * as Icons from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSongIdIsPlaying,
  selectSongIdWillBeAddToFavorite,
} from "../../app/reducers";
import { favoriteApi } from "../../app/api";
import {
  checkSongIsExistInPlaylist,
  getDataToAsyncStorage,
  toast,
} from "../../libs";

const FavoritePlaylistSelectorModal = ({
  onFetch,
  playlists,
  onModalWillHide,
}) => {
  // store
  const dispatch = useDispatch();
  const songIdIsPlaying = useSelector(selectSongIdWillBeAddToFavorite);

  // state
  const [favoritePlaylistId, setFavoritePlaylistId] = useState(-1);

  const checkPlaylistToAddThisSong = (playlistId) => {
    const playlistChecked = playlists.filter((item) => item._id === playlistId);

    const check = checkSongIsExistInPlaylist(
      playlistChecked[0].songs,
      songIdIsPlaying
    );
    if (!check) {
      setFavoritePlaylistId(playlistId);
    } else {
      toast("This song is exist in this playlist", -1, 4000);
    }
  };

  const renderFavoritePlaylists = ({ item }) => {
    return (
      <View
        className="flex-row space-x-4"
        onPress={() => {
          //   choosePlaylistAndPlay(item.title, item?.songs);
        }}
      >
        <View className="flex-row items-center space-x-4">
          <Checkbox
            key={item._id}
            status={favoritePlaylistId === item._id ? "checked" : "unchecked"}
            onPress={() => checkPlaylistToAddThisSong(item._id)}
          />
          <Image
            source={{ uri: item.thumbnail }}
            className="w-14 h-14 rounded"
          />
        </View>
        <View>
          <Text className="text-white font-['Montserrat-SemiBold'] ">
            {item.title}
          </Text>
          <Text className="text-slate-400 text-xs italic">
            Số lượng: {(item?.songs).length}
          </Text>
        </View>
      </View>
    );
  };

  const addSongToFavoriteChoosed = async () => {
    if (favoritePlaylistId === -1) {
      toast("Chọn danh sách để lưu");
    } else {
      const account = await getDataToAsyncStorage("acc");
      const data = await favoriteApi.addSongs(
        favoritePlaylistId,
        songIdIsPlaying,
        account.accessToken
      );
      if (data.status === 200) {
        // close modal
        onModalWillHide();
      }
      toast(data.message, 1, 5000);

      // update favorite playlist
      onFetch();
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  useEffect(() => {
    console.log("playlist change....");
  }, [playlists]);

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
        <TouchableOpacity
          className="items-center"
          onPress={() => addSongToFavoriteChoosed()}
        >
          <Icons.BookmarkIcon size={24} color="#94a3b8" />
          <Text className="text-xs text-slate-400">Thêm</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full">
        {!playlists && <Loader />}
        {playlists.length !== 0 && (
          <FlatList
            style={{ height: Dimensions.get("window").height / 2 }}
            ItemSeparatorComponent={() => <View style={{ padding: 5 }} />}
            data={playlists}
            showsVerticalScrollIndicator={false}
            renderItem={renderFavoritePlaylists}
          />
        )}
      </View>
    </View>
  );
};

export default FavoritePlaylistSelectorModal;
