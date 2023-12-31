import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import MealItem from "../components/MealsList/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  // const renderMealItem = (itemData) => {
  //   const item = itemData.item;
  //   const mealItemProps = {
  //     id: item.id,
  //     title: item.title,
  //     imageUrl: item.imageUrl,
  //     affordability: item.affordability,
  //     complexity: item.complexity,
  //     duration: item.duration,
  //   };

  //   const pressFoodItemHandler = () => {
  //     navigation.navigate("MealsItemScreen", {
  //       categoryId: itemData.item.id,
  //     });
  //   };

  //   return <MealItem {...mealItemProps} onPress={pressFoodItemHandler} />;
  // };

  // return (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={displayedMeals}
  //       keyExtractor={(item) => item.id}
  //       renderItem={renderMealItem}
  //     />
  //   </View>
  // );
  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 16,
  // },
});
