import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import List from "./screens/List";
import ImageList from "./screens/ImageList";
import { StatusBar } from "expo-status-bar";

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="list" component={List} />
          <Stack.Screen name="image" component={ImageList} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}