import FeatureRow from "../components/FeatureRow";
import MusicCarousel from "../components/MusicCarousel";
import CardList from "../components/CardList";
import { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { featuredData } from "../libs";
import Loader from "./../components/Loader";

const HomeScreen = () => {
  const [playlists, setPlaylists] = useState([]);
  const [topPlaylists, setTopPlaylists] = useState();



  useEffect(() => {
    (async () => {
      const data = await featuredData();

      data &&
        data.map((item) => {
          if (item.type === "playlist") {
            setPlaylists((prev) => [...prev, item.data]);
          } else {
            setTopPlaylists(item.data);
          }
        });
    })();
  }, []);

  if (playlists.length === 0) return <Loader />;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="space-y-4 p-4 bg-main"
    >
      {/* Carousel */}
      <View>
        <MusicCarousel />
      </View>

      {/* Recommend */}
      <View>
        {playlists &&
          playlists.map((feature) => {
            const type =
              feature.sectionType ||
              (feature.sectionId === "hArtistTheme" ? "artist" : "");
            return (
              <FeatureRow
                key={feature?.sectionId || feature?.id}
                title={feature?.title}
                type={type}
                component={<CardList data={feature?.items} type={type} />}
              />
            );
          })}
        {topPlaylists &&
          topPlaylists.map((feature) => {
            const type =
              feature.sectionType ||
              (feature.sectionId === "hArtistTheme" ? "artist" : "");
            return (
              <FeatureRow
                key={feature?.sectionId || feature?.id}
                title={feature?.title}
                type={type}
                component={<CardList data={feature?.items} type={type} />}
              />
            );
          })}
      </View>
    </ScrollView>

  );
};

export default HomeScreen;
