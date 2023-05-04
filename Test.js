import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Test = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "pink" }}>Test</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});
