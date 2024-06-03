import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup); // extend yup
import Button from "../Button";
import { useState } from "react";
import {
  getDataToAsyncStorage,
  setDataToAsyncStorage,
  toast,
} from "../../libs";
import { authApi } from "../../app/api/authApi";

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required("New password is required")
    .password()
    .max(15),
  repeatPassword: yup
    .string()
    .required("Repeat password is required")
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

const PasswordChangeModal = ({ onModalWillHide }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  // react hook form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newPassword: "",
      repeatPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ newPassword, repeatPassword }) => {
    const account = await getDataToAsyncStorage("acc");

    const res = await authApi.changePassword(
      account._id,
      account.accessToken,
      newPassword
    );

    // notify login successfully
    toast(res.message);

    // hide modal
    onModalWillHide();
  };

  return (
    <View className="p-4 m-4 bg-white rounded items-center">
      {/* header */}
      <View className="py-2">
        <Text className="text-2xl font-bold text-center">
          Change your password
        </Text>
        <Text className="text-sm text-center text-slate-400">
          Access to your password
        </Text>
      </View>
      <View className="w-full">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="w-full my-2 bg-white"
              label="New Password"
              secureTextEntry={passwordVisible}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              right={
                <TextInput.Icon
                  size={20}
                  icon={passwordVisible ? "eye" : "eye-off"}
                  iconColor={"gray"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
          )}
          name="newPassword"
        />
        {errors.newPassword && (
          <Text className="text-red-500 italic">
            {errors.newPassword.message}
          </Text>
        )}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="w-full my-2 bg-white"
              label="Repeat your password"
              secureTextEntry={passwordVisible}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              right={
                <TextInput.Icon
                  size={20}
                  icon={passwordVisible ? "eye" : "eye-off"}
                  iconColor={"gray"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
          )}
          name="repeatPassword"
        />
        {errors.repeatPassword && (
          <Text className="text-red-500 italic">
            {errors.repeatPassword.message}
          </Text>
        )}
      </View>
      <View className="top-2 pb-2 w-full space-y-2">
        <Button title="Update" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default PasswordChangeModal;
