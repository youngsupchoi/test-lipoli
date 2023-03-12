import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Detail, Title, UpperBar } from "../../../style/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
const GiftShopMain = () => {
  return (
    <View style={styles.container}>
      <UpperBar>
        <Title style={{ fontSize: 16, marginLeft: 15 }}>선물 펀딩</Title>
        <View style={styles.upperBarIconContainer}>
          <Ionicons name="md-search-sharp" size={24} color="white" />
          <Ionicons name="md-cart-outline" size={24} color="white" />
        </View>
      </UpperBar>
    </View>
  );
};

export default GiftShopMain;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#212529",
  },
  upperBarIconContainer: {
    flexDirection: "row",
    marginRight: "5%",

    width: "20%",
    justifyContent: "space-between",
  },
});
