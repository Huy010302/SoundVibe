// SearchComponent.js
import React, { useState, useRef, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input-v2';
import * as Icons from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import { browserApi } from '../app/api/browserApi';
import { deleteAllSpaceOfString, uniqueArray } from '../utils/helpers';
import ResultItem from './../components/ResultItem';
import { GlobalContext } from '../contexts/GlobalContext';
import { getDataToAsyncStorage } from '../libs';
import { seletedName } from '../app/reducers';
import { AntDesign } from '@expo/vector-icons';
import randomColor from 'randomcolor';
import { getFirstCharacter } from '../utils';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [suggest, setSuggest] = useState([]);
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

    return (
        <View className="">
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
        </View>
    );
};

export default SearchComponent;
