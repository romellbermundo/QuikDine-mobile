import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeSearch } from "../RecipePage/RecipeSearch";
import { RecipeResult } from "../RecipePage/RecipeResult";
import { TestResult } from "./TestResult";
import { AdvancedSearch } from "../RecipePage/AdvancedSearch";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  SafeAreaView,
} from "react-native";
import LoginScreen from "../LoginScreen";
import HomeScreen from "./HomeScreen";
import TestPage from "./TestPage";
import CameraPage from "../MyPantry/CameraPage";
import RegisterPage from "../RegisterPage";

const Stack = createNativeStackNavigator();
export default function TestNav() {
  return (
    <Stack.Navigator id="Test Nav">
      {/* <Stack.Screen name="Recipe Search">
        {(props) => <RecipeSearch {...props} ingredientList={ingredientList} />}
      </Stack.Screen> */}
      {/* <Stack.Screen name="Test Result">{() => <TestResult />}</Stack.Screen> */}
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
        {() => <HomeScreen />}
      </Stack.Screen>
      <Stack.Screen name="LoginScreen" options={{ headerShown: false }}>
        {() => <LoginScreen />}
      </Stack.Screen>
      <Stack.Screen name="RegisterPage" options={{ headerShown: false }}>
        {() => <RegisterPage />}
      </Stack.Screen>
      <Stack.Screen name="TestPage" options={{ headerShown: false }}>
        {() => <TestPage />}
      </Stack.Screen>
      {/* <Stack.Screen name="Camera" options={{ headerShown: false }}>
        {() => <CameraPage />}
      </Stack.Screen> */}

      {/* <Stack.Screen name="Advanced Search">
        <Text>Hello</Text>
      </Stack.Screen> */}
    </Stack.Navigator>
  );
}
