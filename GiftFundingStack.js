import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GiftShopMain from "./sources/screen/giftFunding/GiftShopMain";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="GiftShopMain" component={GiftShopMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;

const styles = StyleSheet.create({});
