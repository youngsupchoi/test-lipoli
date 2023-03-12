import * as React from "react";
import { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Main from "./sources/screen/main/Main";
import UserScreenStack from "./UserScreenStack";
import GiftFundingStack from "./GiftFundingStack";
import ChallengeMain from "./sources/screen/challenge/ChallengeMain";
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
  const [tabVisible, setTabVisible] = useState(true);
  const tabVisibleHandler = () => {
    setTabVisible(!tabVisible);
  };

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 40,

            backgroundColor: "#212529",
            borderTopColor: "#212529",
            display: tabVisible ? undefined : "none",
          },
        }}
      >
        <Tab.Screen
          name="UserScreenStack"
          component={UserScreenStack}
          temp="hi"
          setTabVisible={tabVisibleHandler}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                style={{
                  paddingVertical: 1,
                  elevation: 5,
                  shadowOpacity: 0,
                  shadowOffset: { x: 0, y: 6 },
                  shadowColor: "black",
                }}
                name="md-person-circle-outline"
                color={color}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                style={{
                  paddingVertical: 1,
                  elevation: 5,
                  shadowOpacity: 0,
                  shadowOffset: { x: 0, y: 6 },
                  shadowColor: "black",
                }}
                name="md-home-outline"
                color={color}
                size={20}
              />
            ),
          }}
        />

        <Tab.Screen
          name="GiftFundingsStack"
          component={GiftFundingStack}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                style={{
                  paddingVertical: 1,
                  elevation: 5,
                  shadowOpacity: 0,
                  shadowOffset: { x: 0, y: 6 },
                  shadowColor: "black",
                }}
                name="md-gift-outline"
                color={color}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ChallengeMain"
          component={ChallengeMain}
          params={"hihi"}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                style={{
                  paddingVertical: 1,
                  elevation: 5,
                  shadowOpacity: 0,
                  shadowOffset: { x: 0, y: 6 },
                  shadowColor: "black",
                }}
                name="md-flag-outline"
                color={color}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabStack;

const styles = StyleSheet.create({});
