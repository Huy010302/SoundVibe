import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup); // extend yup
import Button from "../Button";
import { useEffect, useState } from "react";
import { getDataToAsyncStorage, toast } from "../../libs";
import { favoriteApi } from "../../app/api";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
});

const AddNewFavoritePlaylist = ({ account, onFetch, onModalWillHide }) => {
  // react hook form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ title }) => {
    const data = await favoriteApi.create(
      account._id,
      title,
      account.accessToken
    );

    // update favorite playlist data
    onFetch();

    // notify create status
    toast(data.message, 0);

    // close modal
    onModalWillHide();
  };

  return (
    <View className="p-4 m-4 bg-white rounded items-center">
      {/* header */}
      <View className="py-2">
        <Text className="text-2xl font-bold text-center">
          Tạo Danh sách mới
        </Text>
        <Text className="text-sm text-center text-slate-400">
          Thêm vào Danh sách yêu thích của bạn
        </Text>
      </View>
      <View className="w-full">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="w-full my-2 bg-white"
              label="Tên Danh sách"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="title"
        />
        {errors.title && (
          <Text className="text-red-500 italic">Vui lòng nhập tên Danh sách</Text>
        )}
      </View>
      <View className="top-2 pb-2 w-full space-y-2">
        <Button title="Thêm" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default AddNewFavoritePlaylist;
