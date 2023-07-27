import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppContext from "../../Context/AppContext";
import { LoginScreen } from "../MyAccount/LoginScreen";
import { EventList } from "./EventList";
import { InProgressEvent } from "./InProgressEvent";
import { NewEvent } from "./NewEvent";
import SendEmail from "./SendEmail";

const Stack = createNativeStackNavigator();
export default function PlanNav() {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <Stack.Navigator id="Plan Meal">
      <Stack.Screen name="Event List" options={{ headerShown: false }}>
        {isLoggedIn ? () => <EventList /> : () => <LoginScreen />}
      </Stack.Screen>
      <Stack.Screen name="New Event" options={{ headerShown: false }}>
        {isLoggedIn ? () => <NewEvent /> : () => <LoginScreen />}
      </Stack.Screen>
      <Stack.Screen name="In-Progress Event" options={{ headerShown: false }}>
        {isLoggedIn ? () => <InProgressEvent /> : () => <LoginScreen />}
      </Stack.Screen>
      <Stack.Screen name="Send Email" options={{ headerShown: false }}>
        {isLoggedIn ? () => <SendEmail /> : () => <LoginScreen />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
