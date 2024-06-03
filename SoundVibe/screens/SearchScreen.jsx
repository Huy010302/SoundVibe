import FeatureRow from "../components/FeatureRow";
import CardList from "../components/CardList";
import { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { featuredData } from "../libs";
import Loader from "./../components/Loader";
import SearchComponent from "./SearchComponent";

const SearchScreen = () => {
    const [playlists, setPlaylists] = useState([]);
    const [topPlaylists, setTopPlaylists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await featuredData();
            if (data) {
                data.forEach((item) => {
                    if (item.type === "playlist") {
                        setPlaylists((prev) => [...prev, item.data]);
                    } else {
                        setTopPlaylists((prev) => [...prev, item.data]);
                    }
                });
            }
        };

        fetchData();
    }, []);

    if (playlists.length === 0 || topPlaylists.length === 0) return <Loader />;

    const firstTop = playlists[0];
    const type = firstTop.sectionType || (firstTop.sectionId === "hArtistTheme" ? "artist" : "");

    const firstPlaylist = playlists[1];
    const playlistType = firstPlaylist.sectionType || (firstPlaylist.sectionId === "hArtistTheme" ? "artist" : "");

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            className="space-y-4 p-4 bg-main"
        >
            <SearchComponent />
            <View>
                <View>
                    <View>
                        <Text className="text-2xl text-white font-bold pt-2">Xu hướng</Text>
                        <FeatureRow
                            key={firstTop.sectionId || firstTop.id}
                            type={type}
                            component={<CardList data={firstTop.items} type={type} />}
                        />
                    </View>
                    <View>
                        <Text className="text-2xl text-white font-bold pt-2">Đã nghe gần đây</Text>
                        <FeatureRow
                            key={firstPlaylist.sectionId || firstPlaylist.id}
                            type={playlistType}
                            component={<CardList data={firstPlaylist.items} type={playlistType} />}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SearchScreen;
