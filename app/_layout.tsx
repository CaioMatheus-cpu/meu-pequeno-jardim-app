import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Tela principal, sem cabeçalho */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Cadastro" }} />
      <Stack.Screen name="register-child" options={{ title: "Cadastro da Criança" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="parent-area" options={{ headerShown: false }} />
      <Stack.Screen name="faq" options={{ headerShown: false }} />

    </Stack>
  );
}