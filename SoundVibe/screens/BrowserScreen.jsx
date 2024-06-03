import React, { useCallback, useContext, useEffect, useRef, useState, memo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { avatar, fontMap, red } from '../utils/constants';
import HomeScreen from './HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlaylistsScreen from './PlaylistsScreen';
import * as Icons from 'react-native-heroicons/solid';
import { browserApi } from '../app/api/browserApi';
import { useSelector } from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input-v2';
import { deleteAllSpaceOfString, uniqueArray } from '../utils/helpers';
import ResultItem from './../components/ResultItem';
import { GlobalContext } from '../contexts/GlobalContext';
import randomColor from 'randomcolor';
import { getDataToAsyncStorage } from '../libs';
import { getFirstCharacter } from '../utils';
import { seletedName } from '../app/reducers';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import SearchScreen from './SearchScreen';
import UserScreen from './UserScreen';
import SearchComponent from './SearchComponent';



const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const color = randomColor({ luminosity: 'dark' });

const BrowserScreen = () => {
  const navigation = useNavigation();
  const username = useSelector(seletedName);
  const getTimeMes = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return 'chào buổi sáng';
    } else if (currentTime < 17) {
      return 'chào buổi chiều';
    } else {
      return 'chào buổi tối';
    }
  };

  const message = getTimeMes();

  const [query, setQuery] = useState('');
  const [suggest, setSuggest] = useState([]);

  const [account, setAccount] = useState();

  useEffect(() => {
    (async () => {
      const userInfo = await getDataToAsyncStorage('acc');
      setAccount(userInfo);
    })();
  }, []);

  const { drawer } = useContext(GlobalContext);

  const queryRef = useRef('');
  const inputRef = useRef(null);

  const handleSearchWithKeyword = async (event) => {
    const keyword = event.nativeEvent.text;
    try {
      if (keyword) {
        const { data } = await browserApi.search(event.nativeEvent.text);

        const { top: topItem } = data;

        let newSuggess = [];
        if (topItem) {
          const topItemSuggest = {
            encodeId: topItem.encodeId || topItem.id,
            keyword: topItem.title || topItem.name,
            artistsNames: topItem.artistsNames,
            thumbnailM: topItem.thumbnailM || topItem.thumbnail,
            alias: [
              topItem.alias,
              topItem.title,
              topItem.artistsNames,
              topItem.name,
              keyword,
            ],
            type: topItem.objectType,
            duration: topItem?.duration || 0,
          };
          queryRef.current = deleteAllSpaceOfString(keyword);

          newSuggess.push(topItemSuggest);
        }
        let keyTypes = Object.keys(data);
        keyTypes = keyTypes.filter((key) => key !== 'videos');
        keyTypes &&
          keyTypes.map((key) => {
            if (Array.isArray(data[key])) {
              const sectionItem = data[key].map((item) => {
                if (item.encodeId === 'ZW8I7FF8')
                  console.log('item.duration: ', item);
                return {
                  encodeId: item.encodeId || item.id,
                  keyword: item.title || item.name,
                  artistsNames: item.artistsNames,
                  thumbnailM: item.thumbnailM || item.thumbnail,
                  alias: [
                    item.alias,
                    item.title,
                    item.artistsNames,
                    item.name,
                    keyword,
                  ],
                  duration: item.duration,
                  type: key.toString().slice(0, -1),
                };
              });
              newSuggess.push(...sectionItem);
            }
          });

        if (newSuggess.length > 0) {
          inputRef.current.focus();
          setSuggest(uniqueArray(newSuggess, 'encodeId'));
        }
      }
    } catch (error) {
      console.log('err', error);
    }
  };

  const restrict = (event) => {
    const regex = new RegExp('^[a-zA-Z]+$');
    const key = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  };

  const findData = (query) => {
    try {
      if (query === '') {
        return [];
      }
      const regex = new RegExp(`${query}`, 'i');
      return suggest.filter((item) => {
        const keyList =
          item.alias &&
          item.alias.map(
            (it) => it && deleteAllSpaceOfString(it.toLowerCase().trim())
          );

        const findKey = keyList.map(
          (kw) => kw && kw.toLowerCase().trim().search(regex) >= 0
        );
        if (findKey) return item;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const dataFilter = findData(query.toLowerCase().trim());
  const comp = (a, b) => a.toLowerCase() === b.toLowerCase();

  const [fontsLoaded] = useFonts(fontMap);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return (
    <SafeAreaView
      className="relative bg-main pt-4 space-y-4 flex-1 "
      onLayout={onLayoutRootView}
    >
      <View className="px-4 space-y-4 pb-2 flex-row justify-between items-center">
        <View className='ml-2'>
          <Text className=" text-white text-2xl font-semi-bold italic">
            SoundVibe, {message} {username}
          </Text>
        </View>
        <TouchableOpacity
          className={`justify-center`}
          onPress={() => drawer.current.openDrawer()}
        >
          {username ? (
            <View
              className={`w-12 h-12 rounded-full justify-center items-center`}
              style={{
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: color,
              }}
            >
              {account ? (
                <Image
                  source={{ uri: account.avatar }}
                  className="rounded-full w-10 h-10"
                />
              ) : (
                <Text className="text-xl font-bold text-white">
                  {getFirstCharacter(username).toUpperCase()}
                </Text>
              )}
            </View>
          ) : (
            <View
              className={`w-10 h-10 rounded-full justify-center items-center`}
              style={{
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: color,
              }}
            >
              <Text className='text-2xl font-bol'>
                <AntDesign name="user" size={24} color="white" />
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* <View className="">
        <View
          className="relative flex-row space-x-2 items-center bg-[#242636] min-h-[48px] px-3 py-2 rounded-md"
          style={{
            shadowOpacity: 5,
            shadowOffset: {
              width: 0,
              height: 8,
            },
            elevation: 10,
          }}
        >
          <Icons.MagnifyingGlassIcon
            color={'#A1A1AD'}
            className="absolute top-0 mt-3 ml-3"
            onPress={() => {
              inputRef.current.focus();
            }}
          />
          <Autocomplete
            ref={inputRef}
            placeholder="Tìm kiếm bài hát, nghệ sĩ..."
            data={
              dataFilter &&
                dataFilter.length === 1 &&
                comp(queryRef.current, dataFilter[0].keyword)
                ? []
                : dataFilter
            }
            value={query}
            onChangeText={(text) => setQuery(text)}
            onSubmitEditing={handleSearchWithKeyword}
            onKeyPress={restrict}
            flatListProps={{
              keyExtractor: (_, idx) => idx,
              renderItem: ({ item, index }) => (
                <ResultItem onPress={() => setQuery('')} item={item} />
              ),
            }}
            style={{
              flex: 1,
              backgroundColor: '#242636',
              paddingLeft: 3,
              color: '#A1A1AD',
            }}
            placeholderTextColor={'#A1A1AD'}
            cursorColor={'#A1A1AD'}
            listContainerStyle={{
              marginHorizontal: 13,
            }}
          />
        </View>
      </View> */}
      {/* <SearchComponent /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Playlists"
          component={PlaylistsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconContent} onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={30} color="white" />
          <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContent} onPress={() => navigation.navigate('Search')}>
          <Icon
            name="search-outline" size={30} color="white" />
          <Text style={styles.iconText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContent} onPress={() => navigation.navigate('User')}>
          <Icon name="person-outline" size={30} color="white" />
          <Text style={styles.iconText}>User</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconContent: {
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
  },
});

export default memo(BrowserScreen);