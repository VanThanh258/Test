import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Develop = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>Develop</Text>
    </View>
  );
};

export default Develop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
