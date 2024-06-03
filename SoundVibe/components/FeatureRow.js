import {
  View,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";


const FeatureRow = ({ title, component }) => {
  const navigator = useNavigation();

  const renderFeatureComponent = () => {
    return component;
  };

  const handleNavigation = () => {
    // if (type === "playlist") navigator.navigate("Playlists");
  };

  return (
    <View>
      {/* Header */}
      <View className="flex-row justify-between items-center py-2">
        <View className="flex-row space-x-1 mb-1">
          <Text className="font-['Montserrat-Medium'] text-2xl text-white">
            {title}
          </Text>
        </View>
      </View>
      {/* Body */}
      <View>
        {/* Albums List */}
        {component && renderFeatureComponent()}
      </View>
    </View>
  );
};

export default FeatureRow;
