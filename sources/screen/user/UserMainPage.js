import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserMainPage = ({ navigation, setTabVisible }) => {
  return (
    <View>
      <Text style={{ backgroundColor: "green" }}>
        <Text
          onPress={() => {
            /* setTabVisible(false); */
            navigation.navigate("UserGiftPieceMain");
          }}
          style={{ backgroundColor: "yellow" }}
        >
          Button
        </Text>
        UserMainPage
      </Text>
    </View>
  );
};

export default UserMainPage;

const styles = StyleSheet.create({});
