import { View, Text, TouchableOpacity } from "react-native";
import { mainShadow } from "../utils/constants";
const Button = ({ class: classes, onPress, icon, title }) => {
  return (
    <TouchableOpacity
      className={`py-3 rounded w-full flex-row justify-center items-center relative  ${
        classes ? classes : "bg-main"
      }`}
      style={mainShadow}
      onPress={onPress}
    >
      {icon && <View className="absolute left-0 ml-4">{icon}</View>}
      <Text className="text-center font-bold text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
