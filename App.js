import React from "react";
import { StyleSheet, View } from "react-native";
import MatchScreen from "./src/screens/MatchScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MatchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
});
