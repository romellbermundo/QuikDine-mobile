import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppContext from "./src/Context/AppContext";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Home } from "./src/screens/Home";
import AccountNav from "./src/screens/MyAccount/_AccountNav";
import PantryNav from "./src/screens/MyPantry/_PantryNav";
import PlanNav from "./src/screens/PlanDinner/_PlanNav";
import RecipeNav from "./src/screens/RecipePage/_RecipeNav";
// import TestNav from "./src/screens/TestPage/_TestNav";

// This import allows the dev to save states between screens
import initializeVariables from "./src/Context/StateInitializer";

const Tab = createBottomTabNavigator();

export default function App() {
  const stateVariables = initializeVariables();

  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    Ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
    HappyMonkey: require("./assets/fonts/HappyMonkey-Regular.ttf"),
    NunitoSans: require("./assets/fonts/NunitoSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AppContext.Provider value={stateVariables}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          options={{ headerShown: false }}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Recipe") {
                iconName = focused ? "restaurant" : "restaurant";
              } else if (route.name === "Profile") {
                iconName = focused ? "person-circle" : "person-circle";
              } else if (route.name === "Plan Meal") {
                iconName = focused ? "calendar" : "calendar";
              } else if (route.name === "Pantry") {
                iconName = focused ? "fast-food" : "fast-food";
              } else if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={30} color={color} />;
            },
            tabBarActiveTintColor: "#D3FAD9",
            tabBarInactiveTintColor: "#47c053",
            tabBarStyle: { backgroundColor: "#333333", height: 70 },
            tabBarLabelStyle: { fontSize: 12, height: 25, marginTop: -10 },
          })}
        >
          <Tab.Screen name="Profile" component={AccountNav} />
          <Tab.Screen name="Plan Meal" component={PlanNav} />
          <Tab.Screen name="Home" component={Home} />
          {/* <Tab.Screen name="Test" component={TestNav} /> */}
          <Tab.Screen name="Recipe" component={RecipeNav} />
          <Tab.Screen name="Pantry" component={PantryNav} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
