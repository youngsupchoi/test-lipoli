import * as React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Main from "./sources/screen/main/Main";
import UserScreenStack from "./UserScreenStack";
import GiftFundingStack from "./GiftFundingStack";
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#212529",
            borderTopColor: "#212529",
          },
        }}
      >
        <Tab.Screen name="Main" component={Main} />

        <Tab.Screen
          name="UserScreenStack"
          component={UserScreenStack}
          options={{
            title: "",
            tabBarIcon: ({ color, size }) => (
              <Icon
                style={{
                  paddingTop: 12,
                  elevation: 5,
                  shadowOpacity: 0,
                  shadowOffset: { x: 0, y: 6 },
                  shadowColor: "black",
                }}
                name="md-home-outline"
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen name="GiftFundingsStack" component={GiftFundingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabStack;

const styles = StyleSheet.create({});
