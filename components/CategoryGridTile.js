import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-web";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable style={styles.buttonStyle}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "white",
    padding: 20,
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonStyle: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
