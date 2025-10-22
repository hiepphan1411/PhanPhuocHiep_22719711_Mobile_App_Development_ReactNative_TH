import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <SQLiteProvider databaseName="jobs.db">
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "white" },
          }}

        />
      </ SQLiteProvider>
    </>
  );
}
