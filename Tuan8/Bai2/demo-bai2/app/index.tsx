import { Link } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MANAGE YOUR{"\n"}TASK</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#999"
        />

        <Link href={`/tasks?name=${encodeURI(name)}`} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>GET STARTED →</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  content: {
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8A56F5",
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1ED5F4",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
