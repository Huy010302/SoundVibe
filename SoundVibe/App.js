import "react-native-gesture-handler";

import GlobalContextProvider from "./contexts/GlobalContext";

import { store } from "./app/store";

import { Provider } from "react-redux";

import RootLayout from "./screens/RootScreen";

import { RootSiblingParent } from "react-native-root-siblings";

import * as WebBrowser from "expo-web-browser";
WebBrowser.maybeCompleteAuthSession();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalContextProvider>
        <RootSiblingParent>
          <RootLayout />
        </RootSiblingParent>
      </GlobalContextProvider>
    </Provider>
  );
};
export default App;
