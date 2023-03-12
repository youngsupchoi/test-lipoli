import * as React from "react";

import { StyleSheet, View, Text } from "react-native";
import TabStack from "./TabStack";
import Login from "./sources/Login";
import Stacks from "./Stacks";
function App() {
  return <Stacks />;
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
