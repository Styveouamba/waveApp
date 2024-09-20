import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Setting" />
      <Stack.Screen name="Send" />
      <Stack.Screen name="Paiement" />
      <Stack.Screen name="Credit" />
      <Stack.Screen name="Banque" />
      <Stack.Screen name="Cadeau" />
    </Stack>
  );
}
