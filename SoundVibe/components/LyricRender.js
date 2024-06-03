import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Dimensions, Text, View } from "react-native";
import { Lyric, LrcLine } from "react-native-lyric";
import { useDispatch, useSelector } from "react-redux";
import { browserApi } from "../app/api/browserApi";
import { selectLyrics, setLyrics } from "../app/reducers/playlistSlice";
import { GlobalContext } from "../contexts/GlobalContext";
import { getLyricsBySongId } from "../libs";
import { getLyrics } from "../utils/helpers";

const LyricRender = ({ currentTime, songIdIsPlaying }) => {
  // store
  const [lyrics, setLyrics] = useState();
  const dispatch = useDispatch();

  const lineRenderer = useCallback(
    ({ lrcLine: { millisecond, content }, index, active }) => (
      <View className="items-center py-1 h-10 mb-3 ">
        <Text
          className={`${active ? "text-red-500" : "text-white"
            } text-2xl justify-center items-center`}
        >
          {content}
        </Text>
      </View>
    ),
    []
  );

  useEffect(() => {
    // get lyrics
    const renderLyric = async () => {
      try {
        // get lyric of track is playing
        const data = await getLyricsBySongId(songIdIsPlaying);
        setLyrics(data);
      } catch (error) {
        console.log(error);
      }
    };
    renderLyric();
  }, [songIdIsPlaying]);

  if (!lyrics) return;

  return (
    <Lyric
      height={200}
      lrc={lyrics}
      currentTime={currentTime}
      lineHeight={30}
      lineRenderer={lineRenderer}
      autoScroll
      autoScrollAfterUserScroll={600}
    />
  );
};

export default LyricRender;
