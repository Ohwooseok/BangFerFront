import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image } from "react-native";
import Back1 from "../assets/Back1.png";

const Tactics = ({ navigation }) => {
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
      <View style={styles.third}></View>
      <View style={styles.four}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  BackGround: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  ImageStyle: {
    width: "100%",
    height: "100%",
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
  },
  four: {
    flex: 1,
  },
});

export default Tactics;
