import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#4FC3F7" barStyle="light-content" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4FC3F7",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Vsmart Joy 3" }} />
        <Stack.Screen name="color-selection" options={{ title: "Chọn màu" }} />
        <Stack.Screen name="detail" options={{ title: "Chi tiết sản phẩm" }} />
      </Stack>
    </>
  );
}
