import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import SwipeScreen from "./screens/SwipeScreen"
import MatchScreen from "./screens/MatchScreen"
import ProfileScreen from "./screens/ProfileScreen"

const Stack = createStackNavigator()

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Swipe" component={SwipeScreen} />
          <Stack.Screen name="Match" component={MatchScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

