import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image } from "react-native";
import BackGround from "../assets/Back1.png";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

const BackGroundView = styled.View`
  ${StyleSheet.absoluteFillObject};
  z-index: -1;
`;

const FirstView = styled.View`
  flex: 1;
`;

const SecondView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ThirdView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FourthView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 45px;
  font-weight: 600;
  color: black;
  text-decoration-line: underline;
`;

const BackGroundImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const Tactics = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style="auto" />
      <BackGroundView>
        <BackGroundImage source={BackGround} resizeMode={"stretch"} />
      </BackGroundView>
      <FirstView></FirstView>
      <SecondView>
        <TitleText>BANGUSUK</TitleText>
        <TitleText>FERGUSON</TitleText>
      </SecondView>
      <ThirdView></ThirdView>
      <FourthView></FourthView>
    </Container>
  );
};

export default Tactics;
