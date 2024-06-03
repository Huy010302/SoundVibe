import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { seletedName } from '../app/reducers';
import { useSelector } from 'react-redux';
import { getFirstCharacter } from '../utils';
import { getDataToAsyncStorage } from '../libs';
import Icon from 'react-native-vector-icons/Ionicons';

const UserScreen = () => {
    const username = useSelector(seletedName);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        (async () => {
            const userInfo = await getDataToAsyncStorage('acc');
            setAccount(userInfo);
        })();
    }, []);

    return (
        <SafeAreaView className="relative bg-main space-y-4 flex-1 ">
            <ScrollView className="p-4">
                <View className="items-center">
                    {account ? (
                        <Image
                            source={{ uri: account.avatar }}
                            style={{ width: 128, height: 128, borderRadius: 64 }}
                        />
                    ) : (
                        <View style={{ width: 128, height: 128, borderRadius: 64, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                            <Text className="text-xl font-bold text-white">
                                {getFirstCharacter(username).toUpperCase()}
                            </Text>
                        </View>
                    )}
                    <Text className="mt-2 text-2xl font-bold text-white">
                        {username}
                    </Text>
                    <View className="flex justify-between w-full py-4 px-4">
                        <Text className=" text-white text-2xl font-bold">Nâng cấp tài khoản</Text>
                    </View>
                    <View className="flex w-full py-4 px-4 bg-emerald-700 rounded-xl">
                        <Text className="text-2xl font-bold text-white">SoundVibe Plus</Text>
                        <Text className="text-xl text-yellow-200">19,000₫ / Tháng</Text>
                        <Text className="text-xl text-white ">Nghe nhạc với chất lượng cao nhất, không quảng cáo</Text>
                        <View className="flex flex-row justify-around w-full py-4 px-4 shadow">
                            <TouchableOpacity className="items-center text-center px-4 py-2">
                                <View className="rounded-full bg-white p-1">
                                    <Icon name="close-outline" size={30} color="red" />
                                </View>
                                <Text className="text-black font-bold">Loại bỏ quảng cáo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="items-center text-center px-4 py-2">
                                <View className="rounded-full bg-white p-1">
                                    <Icon name="arrow-down-circle-outline" size={30} color="purple" />
                                </View>
                                <Text className="text-black font-bold">Lưu trữ nhạc không giới hạn</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="items-center text-center px-4 py-2">
                                <View className="rounded-full bg-white p-1">
                                    <Icon name="musical-notes-outline" size={30} color="blue" />
                                </View>
                                <Text className="text-black font-bold">Chất lượng âm thanh Lossless</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="flex w-full py-4 px-4 bg-yellow-200 rounded-xl mt-5">
                        <Text className="text-2xl font-bold text-black">SoundVibe Premium</Text>
                        <Text className="text-xl text-black">49,000₫ / Tháng</Text>
                        <Text className="text-xl text-black ">Toàn bộ đặc quyền Plus cùng kho nhạc Premium</Text>
                        <View className="flex flex-row justify-around w-full py-4 px-4 shadow items-center">
                            <TouchableOpacity className="items-center text-center px-4 py-2">
                                <View className="rounded-full bg-white p-1">
                                    <Icon name="cloud-download-outline" size={30} color="red" />
                                </View>
                                <Text className="text-black font-bold">Nghe và tải toàn bộ bài hát</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="items-center text-center px-4 py-2">
                                <View className="rounded-full bg-white p-1">
                                    <Icon name="close-outline" size={30} color="purple" />
                                </View>
                                <Text className="text-black font-bold">Loại bỏ quảng cáo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="items-center text-center px-4 py-2">
                                <View className="rounded-full bg-white p-1">
                                    <Icon name="musical-notes-outline" size={30} color="blue" />
                                </View>
                                <Text className="text-black font-bold">Chất lượng âm thanh Lossless</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="flex flex-row justify-between items-center  w-full py-4 px-4">
                        <Text className="text-2xl font-bold text-white">Trải nghiệm nghe nhạc nâng cao</Text>
                    </View>
                    <View className="flex flex-row justify-around items-center w-full py-4 px-4">
                        <View className="flex flex-col bg-rose-600  py-4 px-4">
                            <Icon name="mic-outline" size={28} color="blue" />
                            <Text className="text-base font-bold">Âm thanh vượt trội</Text>
                            <Text className="text-sm text-white">(Lossless)</Text>
                        </View>
                        <View className="flex flex-col bg-rose-600 py-4 px-4">
                            <Icon name='shuffle-outline' size={28} color="red" />
                            <Text className="text-base font-bold">Chuyển bài mượt mà</Text>
                            <Text className="text-sm text-white">(Crossfade)</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

export default UserScreen;
