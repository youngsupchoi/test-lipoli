import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#212529",
  },
});
