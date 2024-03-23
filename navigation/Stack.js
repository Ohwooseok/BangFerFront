import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native-stack";
import MainPage from "../screens/MainPage";
import FreeBoard from "../screens/FreeBoard";
import MyPage from "../screens/MyPage";
import BangusukTeam from "../screens/BangusukTeam";
import Tactics from "../screens/Tactics";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="FreeBoard" component={FreeBoard} />
      <Stack.Screen name="Tactics" component={Tactics} />
      <Stack.Screen name="BangusukTeam" component={BangusukTeam} />
      <Stack.Screen name="MyPage" component={MyPage} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
