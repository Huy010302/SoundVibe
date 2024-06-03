import { View, Text, TouchableOpacity, Image } from "react-native";
import imgLogo from '../../assets/img_Logo.png';
import { TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup); // extend yup
import Button from "../Button";
import { useState } from "react";
import { setDataToAsyncStorage, toast } from "../../libs";
import { authApi } from "../../app/api/authApi";
import { useDispatch } from "react-redux";
import { setName } from "../../app/reducers";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email().max(20),
  password: yup.string().required("Password is required").password().max(15),
});

const LoginModal = ({
  setAccount,
  changeOption,
  onModalWillHide,
  setIsLoading,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  // store
  const dispatch = useDispatch();

  // react hook form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });


  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    const res = await authApi.login(email, password);

    if (Object.keys(res.data).length > 0) {
      dispatch(setName(res.data.name));
      await setDataToAsyncStorage("acc", res.data);

      // update account info in drawer
      setAccount(res.data);
    }
    // hide modal
    onModalWillHide();
    setIsLoading(false);

    // notify login successfully
    toast(res.message);
  };

  return (
    <View className="p-4 m-4 bg-black rounded items-center justify-center">
      {/* header */}
      <View className="py-2">
        <View>
          <Image
            source={imgLogo}
            style={{ width: 241, height: 130 }} />
        </View>
        <Text className="text-3xl text-white font-bold text-center">Đăng Nhập</Text>
      </View>
      <View className="w-full">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="w-full my-2 bg-white"
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        // rules={{ required: true }}
        />
        {errors.email && (
          <Text className="text-red-500 italic">{errors.email.message}</Text>
        )}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="w-full my-2 bg-white"
              label="Mật khẩu"
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
          name="password"
        />
        {errors.password && (
          <Text className="text-red-500 italic">{errors.password.message}</Text>
        )}
      </View>
      <View className="top-2 pb-2 w-full space-y-2">
        <Button
          title="Đăng nhập"
          onPress={handleSubmit(onSubmit)}
        />
        <TouchableOpacity
          className="flex-row justify-end"
          onPress={changeOption}
        >
          <Text className="italic text-slate-500 text-right">
            Bạn có tài khoản chưa?{" "}
          </Text>
          <Text className=" text-sky-500 font-medium text-right">
            Tạo tài khoản mới
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginModal;
