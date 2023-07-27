import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdvancedSearch } from "./AdvancedSearch";
import { RecipeResult } from "./RecipeResult";
import { RecipeSearch } from "./RecipeSearch";

const Stack = createNativeStackNavigator();

export default function RecipeNav() {
  return (
    <Stack.Navigator id="Recipe Nav">
      <Stack.Screen
        name="Recipe Search"
        component={RecipeSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Recipe Result"
        component={RecipeResult}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Advanced Search"
        component={AdvancedSearch}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
