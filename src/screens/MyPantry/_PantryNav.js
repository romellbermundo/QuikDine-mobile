import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BarCodeScan from "../MyPantry/BarCodeScanner";
import CameraPage from "../MyPantry/CameraPage";
import MyPantry from "./MyPantry";

const Stack = createNativeStackNavigator();
export default function PantryNav() {
  return (
    <Stack.Navigator id="Pantry Nav">
      <Stack.Screen
        name="My Pantry"
        component={MyPantry}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Camera" options={{ headerShown: false }}>
        {() => <CameraPage />}
      </Stack.Screen>
      <Stack.Screen name="BarCodeScanner" options={{ headerShown: false }}>
        {() => <BarCodeScan />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
