import { Navigation } from "react-native-navigation";
import App from "./App";

import IntroScreen from "./src/screen/introScreen"

Navigation.registerComponent("Intro", () => IntroScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "Intro"
      }
    }
  });
});
