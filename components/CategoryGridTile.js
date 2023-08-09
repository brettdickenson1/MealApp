import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
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
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonStyle: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
