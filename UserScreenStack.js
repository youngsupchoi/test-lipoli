import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./sources/Login";
import Main from "./sources/screen/main/Main";
import UserMainPage from "./sources/screen/user/UserMainPage";
import UserGiftPiece from "./sources/screen/user/UserGiftPiece";
/* function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Login />
    </View>
  );
} */

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
        <Stack.Screen name="UserMainPage" component={UserMainPage} />
        <Stack.Screen name="UserGiftPiece" component={UserGiftPiece} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;

const styles = StyleSheet.create({});
