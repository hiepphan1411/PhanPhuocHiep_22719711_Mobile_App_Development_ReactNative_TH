import { initDb } from "@/util/db";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    initDb();
  }, []);
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
      </SQLiteProvider>
    </>
  );
}
