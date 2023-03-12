import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChallengeMain = (route) => {
  console.log(route.route.params);
  return (
    <View>
      <Text>ChallengeMain</Text>
    </View>
  );
};

export default ChallengeMain;

const styles = StyleSheet.create({});
