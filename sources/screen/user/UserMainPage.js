import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserMainPage = ({ navigation }) => {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate("UserGiftPiece");
        }}
        style={{ backgroundColor: "yellow" }}
      >
        UserMainPage
      </Text>
    </View>
  );
};

export default UserMainPage;

const styles = StyleSheet.create({});
