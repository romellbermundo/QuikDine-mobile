import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyPantry from "../screens/MyPantry";
import MyAccount from "../screens/MyAccount";
import HomeScreen from "../screens/HomeScreen";
import PlanDinner from "../screens/PlanDinner";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      options={{ headerShown: false }}
      screenoptions={{ headerShown: false }}
    >
      <Tab.Screen name="MyAccount" component={MyAccount} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Plan Dinner" component={PlanDinner} />
      <Tab.Screen name="MyPantry" component={MyPantry} />
    </Tab.Navigator>
  );
}
