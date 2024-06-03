import { Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getBannersData } from "../libs";

const MusicCarousel = () => {
  const navigator = useNavigation();

  const [banners, setBanners] = useState();

  // get banners data
  useEffect(() => {
    (async () => {
      const data = await getBannersData();
      setBanners(data);
    })();
  }, []);

  // TODO: fix
  // const { setTrackIndexIsPlaying } = useContext(GlobalContext);

  // const changeToAudioPlayer = (banner) => {
  //   // banner of playlist type
  //   if (banner.type === 4) {
  //     dispatch(reset());
  //     dispatch(setTypeIsPlaying("playlist"));
  //     dispatch(setPlaylistId(banner.encodeId));
  //     dispatch(setPlaylistTitle(""));
  //     setTrackIndexIsPlaying(0);
  //     navigator.navigate("AudioPlayer");
  //   }
  // };

  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={5}
      autoplayLoop
      index={0}
      showPagination
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      paginationStyleItemActive={styles.dotActive}
    >
      {banners &&
        banners?.items.map((banner, index) => (
          <TouchableOpacity
            key={banner?.encodeId}
            className="flex-1"
            onPressIn={() => {
              // changeToAudioPlayer(banner);
            }}
          >
            <Image
              source={{
                uri: banner.banner,
              }}
              style={{
                width: Dimensions.get("window").width - 32,
                height: Dimensions.get("window").width / 2,
              }}
              resizeMode="contain"
              className="rounded"
            />
          </TouchableOpacity>
        ))}
    </SwiperFlatList>
  );
};

const styles = StyleSheet.create({
  paginationContainer: { alignItems: "flex-end" },
  pagination: {
    borderRadius: 5,
    width: 15,
    height: 3,
  },
  dotActive: {
    borderRadius: 5,
    width: 25,
    height: 3,
  },
});

export default MusicCarousel;
