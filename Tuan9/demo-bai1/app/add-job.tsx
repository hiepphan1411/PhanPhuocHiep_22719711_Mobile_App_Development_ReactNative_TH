import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { addJob, initDb } from './util/db';

export default function AddJobScreen() {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initDb();
  }, [])

  const addJobHandle = async () => {
    if (!jobTitle.trim()) {
      Alert.alert("Error", "Please enter a job title");
      return;
    }

    setLoading(true);

    try {
      await addJob(jobTitle);
      Alert.alert("Success", "Thêm thành công", [
        { text: "OK", onPress: () => router.back() }
      ]);
      router.replace("/tasks")
    } catch (error) {
      console.error("Error adding job:", error);
      Alert.alert("Error", "Failed to add job. Please try again.");
    } finally{
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>      </View>
      <View style={styles.content}>
        <Text style={styles.title}>ADD YOUR JOB</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="document-text-outline" size={24} color="green" />
          <TextInput
            style={styles.input}
            placeholder="input job"
            value={jobTitle}
            onChangeText={setJobTitle}
          />
        </View>

        <Image
          source={{
            uri: "https://via.placeholder.com/150/FFFF00/000000?text=Notes",
          }}
          style={styles.notesImage}
        />
        <Pressable
          style={styles.finishButton}
          onPress={addJobHandle}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>FINISH →</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
  profileInfo: {
    marginLeft: 10,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#777",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 40,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  notesImage: {
    width: 120,
    height: 120,
    marginBottom: 40,
    resizeMode: "contain",
  },
  finishButton: {
    backgroundColor: "#1ED5F4",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
