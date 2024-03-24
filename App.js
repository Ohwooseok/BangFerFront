import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/Stack";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation screenOptions={{ headerShown: false }} />
    </NavigationContainer>
  );
};

export default App;
