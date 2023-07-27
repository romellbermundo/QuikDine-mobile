//{TabNav App.js}
{import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import AccountNav from "./src/screens/MyAccount/_AccountNav";
import RecipeNav from "./src/screens/RecipePage/_RecipeNav";
import PantryNav from "./src/screens/MyPantry/_PantryNav";
import PlanNav from "./src/screens/PlanDinner/_PlanNav";

const Tab = createBottomTabNavigator();

export default function App() {
  const [ingredientList, setIngredientList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);

  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    Ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Recipe Nav"
        options={{ headerShown: false }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recipe") {
              iconName = focused ? "restaurant" : "restaurant";
            } else if (route.name === "My Account") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Plan Dinner") {
              iconName = focused ? "calendar" : "calendar";
            } else if (route.name === "My Pantry") {
              iconName = focused ? "fast-food" : "fast-food";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: "#D3FAD9",
          tabBarInactiveTintColor: "#379540",
          tabBarStyle: { backgroundColor: "#333333" },
        })}
      >
        <Tab.Screen name="Plan Nav">
          {(props) => <PlanNav {...props} recipeList={recipeList} />}
        </Tab.Screen>
        <Tab.Screen name="Recipe Nav">
          {(props) => <RecipeNav {...props} ingredientList={ingredientList} />}
        </Tab.Screen>
        <Tab.Screen name="Pantry Nav">
          {(props) => (
            <PantryNav
              {...props}
              ingredientList={ingredientList}
              setIngredientList={setIngredientList}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Account Nav">
          {(props) => <AccountNav {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}}
//{StackNav App.js}
{import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterPage from "./src/screens/RegisterPage";
import MyPantry from "./src/screens/MyPantry";
import Camera from "./src/screens/Camera";
import VotingPage from "./src/screens/VotingPage";
import RecipePage from "./src/screens/RecipePage";
import CameraPage from "./src/screens/CameraPage";
import ListIngredient from "./src/screens/ListIngredient";
import AddIngredient from "./src/screens/AddIngredient";
import LandingPage from "./src/screens/LandingPage";
import DashBoard from "./src/screens/DashBoard";
import BarCodeScanner from "./src/screens/BarCodeScanner";
import SuggestedRecipes from "./src/screens/SuggestedRecipes";
import PlanDinner from "./src/screens/PlanDinner";
import SendEmail from "./src/screens/SendEmail";
import TestPage from "./src/screens/TestPage";
import MyAccount from "./src/screens/MyAccount";
import CreateEvent from "./src/screens/CreateEvent";

import Ionicons from "react-native-vector-icons/Ionicons";
import TimeSlots from "./src/screens/TimeSlots";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      options={{ headerShown: false }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "My Account") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Plan Dinner") {
            iconName = focused ? "calendar" : "calendar";
          } else if (route.name === "My Pantry") {
            iconName = focused ? "fast-food" : "fast-food";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "#D3FAD9",
        tabBarInactiveTintColor: "#379540",
        tabBarStyle: { backgroundColor: "#333333" },
      })}
    >
      <Tab.Screen name="My Account" component={MyAccount} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Plan Dinner" component={PlanDinner} />
      <Tab.Screen name="My Pantry" component={MyPantry} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [ingredientList, setIngredientList] = React.useState([]);

  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    Ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={NavBar}
          screenoptions={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Register" component={RegisterPage} /> */}
        {/* <Stack.Screen name="MyPantry" component={MyPantry} /> */}
        <Stack.Screen name="Camera" component={CameraPage} />
        <Stack.Screen name="Voting" component={VotingPage} />

        <Stack.Screen name="Recipe">
          {(props) => <RecipePage {...props} ingredientList={ingredientList} />}
        </Stack.Screen>
        <Stack.Screen name="AddIngredient">
          {(props) => (
            <AddIngredient
              {...props}
              ingredientList={ingredientList}
              setIngredientList={setIngredientList}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="TestPage" component={TestPage} />
        <Stack.Screen name="ListIngredient" component={ListIngredient} />

        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="BarCodeScanner" component={BarCodeScanner} />
        {/* <Stack.Screen name="PlanDinner" component={PlanDinner} /> */}
        <Stack.Screen name="SuggestedRecipes" component={SuggestedRecipes} />
        <Stack.Screen name="SendEmail" component={SendEmail} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} />
        <Stack.Screen name="TimeSlots" component={TimeSlots} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});}
