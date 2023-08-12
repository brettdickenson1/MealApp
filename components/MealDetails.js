import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>
        {duration} <FontAwesome5 name="clock" size={14} color="black" />
      </Text>

      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}{" "}
        <MaterialCommunityIcons name="food-variant" size={16} color="black" />
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}{" "}
        <FontAwesome5 name="money-bill-alt" size={14} color="black" />
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
    marginBottom: 10,
    alignItems: "baseline",
  },
  iconOne: {
    alignItems: "center",
  },
});
