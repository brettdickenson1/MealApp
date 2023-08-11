import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsItemScreen from "./screens/MealsItemScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const options = {
    title: "All Food",
    headerStyle: { backgroundColor: "#a5a3a3" },
    headerTintColor: "white",
    contentStyle: { backgroundColor: "#a5a3a3" },
  };
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#75C2F6" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#75C2F6" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealsItemScreen" component={MealsItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
