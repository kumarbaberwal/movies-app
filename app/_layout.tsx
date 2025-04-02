import { Stack } from "expo-router";
import '@/app/global.css'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return <Stack
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={'(tabs)'}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="movies/[id]"
      options={{ headerShown: false }}
    />
    <StatusBar style={'dark'} />
  </Stack>;
}
