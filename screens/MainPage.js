import { StatusBar } from "expo-status-bar";
import Back1 from "../assets/Back1.png";
import Button1 from "../assets/Button1.png";
import Button2 from "../assets/Button2.png";
import Button3 from "../assets/Button3.png";
import Button4 from "../assets/Button4.png";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.BackGround}>
        <Image
          source={Back1}
          resizeMode={"stretch"}
          style={styles.ImageStyle}
        />
      </View>
      <View style={styles.first}></View>
      <View style={styles.second}>
        <Text style={styles.Maintext}>BANGUSUK</Text>
        <Text style={styles.Maintext}>FERGUSON</Text>
      </View>
      <View style={styles.third}>
        <View style={styles.thirdRow}>
          <TouchableOpacity
            style={styles.firstButton}
            onPress={() => navigation.navigate("Tactics")}
          >
            <Image
              source={Button1}
              resizeMode={"contain"}
              style={styles.ButtonImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.firstButton}
            onPress={() => navigation.navigate("BangusukTeam")}
          >
            <Image
              source={Button2}
              resizeMode={"contain"}
              style={styles.ButtonImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.thirdRow}>
          <TouchableOpacity
            style={styles.secondButton}
            onPress={() => navigation.navigate("FreeBoard")}
          >
            <Image
              source={Button3}
              resizeMode={"contain"}
              style={styles.ButtonImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondButton}
            onPress={() => navigation.navigate("MyPage")}
          >
            <Image
              source={Button4}
              resizeMode={"contain"}
              style={styles.ButtonImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.four}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  first: {
    flex: 1,
  },
  second: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  Maintext: {
    fontSize: 45,
    fontWeight: "600",
    color: "black",
    textDecorationLine: "underline",
  },
  third: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  thirdRow: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  four: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  ImageStyle: {
    width: "100%",
    height: "100%",
  },
  BackGround: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  firstButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 120,
    height: 120,
    margin: -5,
  },
  secondButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 120,
    height: 120,
    margin: -5,
  },
  ButtonImage: {
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
});

export default MainPage;
