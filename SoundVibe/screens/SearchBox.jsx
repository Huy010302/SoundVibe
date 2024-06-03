import React, { useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import * as Icons from 'react-native-heroicons/solid';
import Autocomplete from 'react-native-autocomplete-input-v2';
import { deleteAllSpaceOfString, uniqueArray } from '../utils/helpers';
import ResultItem from './../components/ResultItem';

const SearchBox = ({ handleSearchWithKeyword, suggest }) => {
    const [query, setQuery] = useState('');
    const queryRef = useRef('');
    const inputRef = useRef(null);

    const dataFilter = suggest.filter(item =>
        item.alias.some(alias =>
            deleteAllSpaceOfString(alias.toLowerCase()).includes(
                deleteAllSpaceOfString(query.toLowerCase())
            )
        )
    );

    const comp = (a, b) => a.toLowerCase() === b.toLowerCase();

    return (
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
                    dataFilter.length === 1 && comp(queryRef.current, dataFilter[0].keyword)
                        ? []
                        : dataFilter
                }
                value={query}
                onChangeText={(text) => setQuery(text)}
                onSubmitEditing={handleSearchWithKeyword}
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
    );
};

export default SearchBox;
